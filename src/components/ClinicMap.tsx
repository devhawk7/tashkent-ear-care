import { useEffect, useRef, useState, useCallback } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MapPin, Navigation, ExternalLink, AlertTriangle, Loader2 } from "lucide-react";
import { computeRoute } from "../lib/maps.functions";
import { useLang } from "../lib/i18n";

/* Clinic location — Babur Street, Tashkent */
const CLINIC = { lat: 41.2994, lng: 69.262 };
const CLINIC_LABEL = "LOR Clinic — Babur Street, Tashkent";

/* Key areas around Tashkent to offer directions from */
const KEY_AREAS = [
  { id: "airport", lat: 41.2579, lng: 69.2817 },
  { id: "amir", lat: 41.3111, lng: 69.2797 },
  { id: "chorsu", lat: 41.3258, lng: 69.2349 },
  { id: "railway", lat: 41.2906, lng: 69.2731 },
  { id: "yunusabad", lat: 41.364, lng: 69.289 },
  { id: "ulugbek", lat: 41.33, lng: 69.334 },
] as const;

type Area = (typeof KEY_AREAS)[number];


const BROWSER_KEY = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY as
  | string
  | undefined;
const CHANNEL = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID as string | undefined;

const CALLBACK_NAME = "__initLorClinicMap";
let mapsPromise: Promise<void> | null = null;

function loadGoogleMaps(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if ((window as any).google?.maps) return Promise.resolve();
  if (mapsPromise) return mapsPromise;
  if (!BROWSER_KEY) return Promise.reject(new Error("missing key"));

  mapsPromise = new Promise<void>((resolve, reject) => {
    (window as any)[CALLBACK_NAME] = () => resolve();
    const script = document.createElement("script");
    const params = new URLSearchParams({
      key: BROWSER_KEY,
      loading: "async",
      callback: CALLBACK_NAME,
      libraries: "geometry",
    });
    if (CHANNEL) params.set("channel", CHANNEL);
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.onerror = () => reject(new Error("script load failed"));
    document.head.appendChild(script);
  });
  return mapsPromise;
}

/* External Google Maps directions URL (works without the JS API) */
function directionsUrl(area: Area) {
  const p = new URLSearchParams({
    api: "1",
    origin: `${area.lat},${area.lng}`,
    destination: `${CLINIC.lat},${CLINIC.lng}`,
    travelmode: "driving",
  });
  return `https://www.google.com/maps/dir/?${p.toString()}`;
}

export function ClinicMap() {
  const { t } = useLang();
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const polylineRef = useRef<any>(null);

  const fetchRoute = useServerFn(computeRoute);


  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [active, setActive] = useState<string | null>(null);
  const [routing, setRouting] = useState(false);
  const [route, setRoute] = useState<{ distance: string; duration: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const timeout = setTimeout(() => {
      if (!cancelled && status === "loading") setStatus("error");
    }, 9000);

    loadGoogleMaps()
      .then(() => {
        if (cancelled || !mapEl.current) return;
        const g = (window as any).google;
        const map = new g.maps.Map(mapEl.current, {
          center: CLINIC,
          zoom: 14,
          disableDefaultUI: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        });
        markerRef.current = new g.maps.Marker({ position: CLINIC, map, title: CLINIC_LABEL });
        mapRef.current = map;
        clearTimeout(timeout);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
        clearTimeout(timeout);
      });

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showRoute = useCallback(
    async (area: Area) => {
      const g = (window as any).google;
      if (!g || !mapRef.current) return;
      setActive(area.id);
      setRouting(true);
      setRoute(null);
      try {
        const result = await fetchRoute({
          data: {
            originLat: area.lat,
            originLng: area.lng,
            destLat: CLINIC.lat,
            destLng: CLINIC.lng,
          },
        });

        const path = g.maps.geometry.encoding.decodePath(result.encodedPolyline);
        if (polylineRef.current) polylineRef.current.setMap(null);
        polylineRef.current = new g.maps.Polyline({
          path,
          map: mapRef.current,
          strokeColor: "#9a7b2e",
          strokeWeight: 5,
          strokeOpacity: 0.9,
        });

        const bounds = new g.maps.LatLngBounds();
        path.forEach((p: any) => bounds.extend(p));
        mapRef.current.fitBounds(bounds, 60);

        setRoute({ distance: result.distanceText, duration: result.durationText });
      } catch {
        // If routing fails, open external Google Maps directions as a fallback
        window.open(directionsUrl(area), "_blank", "noopener,noreferrer");
        setRoute(null);
      } finally {
        setRouting(false);
      }
    },
    [fetchRoute],
  );


  const isReady = status === "ready";

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
      {/* Directions panel */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2">
          <Navigation className="h-5 w-5 text-gold" />
          <h3 className="font-display text-xl font-semibold text-foreground">{t.map.title}</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {isReady ? t.map.subReady : t.map.subFallback}
        </p>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {KEY_AREAS.map((area) =>
            isReady ? (
              <button
                key={area.id}
                onClick={() => showRoute(area)}
                className={`flex items-center gap-2 rounded-xl border px-3.5 py-3 text-left text-sm font-medium transition-colors ${
                  active === area.id
                    ? "border-gold bg-gold/10 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-gold/60 hover:text-foreground"
                }`}
              >
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {t.map.areas[area.id]}
              </button>
            ) : (
              <a
                key={area.id}
                href={directionsUrl(area)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:border-gold/60 hover:text-foreground"
              >
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {t.map.areas[area.id]}
              </a>
            ),
          )}
        </div>

        {isReady && (routing || route) && (
          <div className="mt-5 flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3 text-sm">
            <span className="font-semibold text-foreground">
              {active ? t.map.areas[active] : ""}
            </span>
            {routing ? (
              <span className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin text-gold" /> {t.map.calculating}
              </span>
            ) : (
              route && (
                <span className="text-muted-foreground">
                  {route.distance} · ~{route.duration} {t.map.byCar}
                </span>
              )
            )}
          </div>
        )}



        <a
          href={`https://www.google.com/maps/search/?api=1&query=${CLINIC.lat},${CLINIC.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
        >
          {t.map.openMaps} <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Map / fallback */}
      <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border shadow-card">
        {/* Map container is always mounted so the JS API can attach */}
        <div
          ref={mapEl}
          className="h-full min-h-[420px] w-full"
          style={{ display: status === "error" ? "none" : "block" }}
        />

        {status === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin text-gold" />
            <span className="text-sm">{t.map.loading}</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 bg-secondary/40 p-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
              <AlertTriangle className="h-7 w-7 text-gold" />
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-foreground">
                {t.map.unavailableTitle}
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                {t.map.unavailableBody}
              </p>
            </div>
            <div className="w-full max-w-sm rounded-xl border border-border bg-card p-5 text-left shadow-card">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold text-foreground">LOR Clinic</p>
                  <p className="text-sm text-muted-foreground">Babur Street, Tashkent, Uzbekistan</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {CLINIC.lat.toFixed(4)}, {CLINIC.lng.toFixed(4)}
                  </p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${CLINIC.lat},${CLINIC.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Open in Google Maps <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
