// config/tools.ts
import type { ComponentType } from "react";

import BmiTool from "@/components/tools/BmiTool";
import CalorieTool from "@/components/tools/CalorieTool";
import RotTool from "@/components/tools/RotTool";

/**
 * Tillåtna kategorier för verktyg.
 * Dessa används för SEO, filtrering och kategorisidor.
 */
export type ToolCategory = "halsa" | "ekonomi" | "konvertering" | "ovrigt";

/**
 * Struktur för varje verktyg på Omvero.
 */
export type Tool = {
  slug: string;                // används i URL, t.ex. /bmi-raknare
  name: string;                // visat namn
  shortDescription: string;    // kort beskrivning till listor/kort
  category: ToolCategory;      // halsa | ekonomi | konvertering | ovrigt
  component: ComponentType;    // React-komponent för själva verktyget
  showOnHome?: boolean;        // om den ska visas i "utvalda" på startsidan
};

/**
 * Lista med alla verktyg på Omvero.
 * Lägg till nya verktyg genom att skapa en komponent och registrera den här.
 */
export const tools: Tool[] = [
  {
    slug: "bmi-raknare",
    name: "BMI-räknare",
    shortDescription: "Räkna ut ditt BMI snabbt och enkelt.",
    category: "halsa",
    component: BmiTool,
    showOnHome: true,
  },
  {
    slug: "kaloriraknare",
    name: "Kaloriräknare",
    shortDescription:
      "Beräkna ditt dagliga kaloribehov baserat på din aktivitetsnivå.",
    category: "halsa",
    component: CalorieTool,
    showOnHome: true,
  },
  {
    slug: "rot-kalkylator",
    name: "ROT-kalkylator",
    shortDescription: "Räkna ut ROT-avdrag och vad du faktiskt betalar.",
    category: "ekonomi",
    component: RotTool,
    showOnHome: true,
  },

  // --- Fler verktyg läggs till här ---
  // {
  //   slug: "nytt-verktyg",
  //   name: "Namn på verktyget",
  //   shortDescription: "Kort beskrivning av verktyget.",
  //   category: "konvertering", // eller annan kategori
  //   component: NewToolComponent,
  //   showOnHome: false,
  // },
];
