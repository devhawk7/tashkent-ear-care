import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  originLat: z.number().min(-90).max(90),
  originLng: z.number().min(-180).max(180),
  destLat: z.number().min(-90).max(90),
  destLng: z.number().min(-180).max(180),
});

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

export const computeRoute = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!lovableKey || !mapsKey) {
      throw new Error("Missing Google Maps connector credentials");
    }

    const res = await fetch(`${GATEWAY_URL}/routes/directions/v2:computeRoutes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": mapsKey,
        "Content-Type": "application/json",
        "X-Goog-FieldMask":
          "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
      },
      body: JSON.stringify({
        origin: {
          location: { latLng: { latitude: data.originLat, longitude: data.originLng } },
        },
        destination: {
          location: { latLng: { latitude: data.destLat, longitude: data.destLng } },
        },
        travelMode: "DRIVE",
        routingPreference: "TRAFFIC_AWARE",
        languageCode: "en-US",
        units: "METRIC",
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Routes API failed (${res.status}): ${body}`);
    }

    const json = (await res.json()) as {
      routes?: Array<{
        distanceMeters?: number;
        duration?: string;
        polyline?: { encodedPolyline?: string };
      }>;
    };

    const route = json.routes?.[0];
    if (!route?.polyline?.encodedPolyline) {
      throw new Error("No route found");
    }

    const meters = route.distanceMeters ?? 0;
    const seconds = parseInt(route.duration?.replace("s", "") ?? "0", 10);

    return {
      encodedPolyline: route.polyline.encodedPolyline,
      distanceText: meters >= 1000 ? `${(meters / 1000).toFixed(1)} km` : `${meters} m`,
      durationText:
        seconds >= 3600
          ? `${Math.floor(seconds / 3600)} hr ${Math.round((seconds % 3600) / 60)} min`
          : `${Math.max(1, Math.round(seconds / 60))} min`,
    };
  });
