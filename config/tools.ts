// config/tools.ts
import type { ComponentType } from "react";
import BmiTool from "@/components/tools/BmiTool";
import CalorieTool from "@/components/tools/CalorieTool";
import RotTool from "@/components/tools/RotTool";

export type Tool = {
  slug: string;              // används i URL, t.ex. /bmi-raknare
  name: string;              // visat namn
  shortDescription: string;  // kort beskrivning till listor/kort
  category: "halsa" | "ekonomi" | "ovrigt";
  component: ComponentType;  // React-komponent för själva verktyget
  showOnHome?: boolean;      // om den ska visas i "utvalda" på startsidan
};


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
  // Nya verktyg:
  // 1) Skapa komponent i components/tools
  // 2) Lägg till ett objekt här med slug, name, description, category, component
];
