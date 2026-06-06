import {
  Ear,
  Stethoscope,
  Activity,
  Baby,
  Syringe,
  Scan,
  ShieldPlus,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Ear,
    title: "Ear Care & Hearing",
    description:
      "Diagnosis and treatment of ear infections, hearing loss, tinnitus, wax removal and balance disorders with modern audiometry.",
  },
  {
    icon: Wind,
    title: "Nose & Sinus",
    description:
      "Relief from sinusitis, allergies, nasal congestion, polyps and deviated septum through advanced rhinology techniques.",
  },
  {
    icon: Stethoscope,
    title: "Throat & Voice",
    description:
      "Care for sore throats, tonsillitis, voice disorders and swallowing difficulties for patients of every age.",
  },
  {
    icon: Baby,
    title: "Pediatric ENT",
    description:
      "Gentle, child-focused treatment for ear infections, adenoids, tonsils and breathing concerns in children.",
  },
  {
    icon: ShieldPlus,
    title: "Emergency ENT",
    description:
      "Round-the-clock response for nosebleeds, foreign bodies, acute infections and sudden hearing loss — 24/7.",
  },
  {
    icon: Scan,
    title: "Endoscopy & Diagnostics",
    description:
      "Precise in-house endoscopic examination and imaging for fast, accurate diagnosis and clear treatment plans.",
  },
  {
    icon: Syringe,
    title: "Minor Surgery",
    description:
      "Safe outpatient ENT procedures performed by experienced surgeons in a sterile, comfortable environment.",
  },
  {
    icon: Activity,
    title: "Allergy & Snoring",
    description:
      "Comprehensive allergy testing plus assessment and treatment of snoring and sleep-related breathing issues.",
  },
];
