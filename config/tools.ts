// config/tools.ts
import type { ComponentType } from "react";

/* -------------------------------------------------
   📁 IMPORTS – sorterade per kategori
-------------------------------------------------- */

// 🟦 HÄLSA
import BmiTool from "@/components/tools/BmiTool";
import CalorieTool from "@/components/tools/CalorieTool";
import BmrTool from "@/components/tools/BmrTool";
import PromilleTool from "@/components/tools/PromilleTool";

// 🟩 EKONOMI
import RotTool from "@/components/tools/RotTool";
import RutTool from "@/components/tools/RutTool";
import MomsTool from "@/components/tools/MomsTool";
import RantaPaRantaTool from "@/components/tools/RantaPaRantaTool";
import ElprisTool from "@/components/tools/ElprisTool";
import { BolanekalkylatorTool } from "@/components/tools/BolanekalkylatorTool";
import AmorteringskalkylatorTool from "@/components/tools/AmorteringskalkylatorTool";
import ValutakonverterareTool from "@/components/tools/ValutakonverterareTool";




// 🟧 KONVERTERING → (kommer senare)
import KmMilesTool from "@/components/tools/KmMilesTool";

// 🟪 ÖVRIGT → (kommer senare)
// import SomethingTool from "@/components/tools/...";


/* -------------------------------------------------
   📌 TYPER
-------------------------------------------------- */

export type ToolCategory = "halsa" | "ekonomi" | "konvertering" | "ovrigt";

export type Tool = {
  slug: string;
  name: string;
  shortDescription: string;
  category: ToolCategory;
  component: ComponentType;
  showOnHome?: boolean;
};


/* -------------------------------------------------
   🗂️ VERKTYGSREGISTER – sorterat per kategori
-------------------------------------------------- */

export const tools: Tool[] = [

  /* -----------------------------------------------
     🟦 HÄLSA
  -------------------------------------------------- */
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
    slug: "bmr-raknare",
    name: "BMR-räknare",
    shortDescription:
      "Beräkna din basalmetabolism (BMR) baserat på kön, ålder, vikt och längd.",
    category: "halsa",
    component: BmrTool,
    showOnHome: true,
  },
  {
    slug: "promillekalkylator",
    name: "Promillekalkylator",
    shortDescription:
      "Beräkna en uppskattad promillehalt baserat på vikt, tid och vad du har druckit.",
    category: "halsa",
    component: PromilleTool,
    showOnHome: true,
  },

  /* -----------------------------------------------
     🟩 EKONOMI
  -------------------------------------------------- */
  {
    slug: "rot-kalkylator",
    name: "ROT-kalkylator",
    shortDescription: "Räkna ut ROT-avdrag och vad du faktiskt betalar.",
    category: "ekonomi",
    component: RotTool,
    showOnHome: true,
  },
  {
    slug: "rut-kalkylator",
    name: "RUT-kalkylator",
    shortDescription:
      "Räkna ut RUT-avdrag och se kundens slutpris efter avdrag.",
    category: "ekonomi",
    component: RutTool,
    showOnHome: true,
  },
  {
    slug: "momsraknare",
    name: "Momsräknare",
    shortDescription:
      "Räkna ut pris med och utan moms och se momsbeloppet baserat på svenska momssatser.",
    category: "ekonomi",
    component: MomsTool,
    showOnHome: true,
  },
  {
    slug: "ranta-pa-ranta-kalkylator",
    name: "Ränta-på-ränta kalkylator",
    shortDescription:
      "Räkna ut hur ditt sparande växer över tid med ränta på ränta och månadssparande.",
    category: "ekonomi",
    component: RantaPaRantaTool,
    showOnHome: true,
  },
  {
    slug: "elpris-idag",
    name: "Elpris idag",
    shortDescription:
      "Se dagens elpris per kWh för ditt elområde baserat på aktuella spotpriser.",
    category: "ekonomi",
    component: ElprisTool,
    showOnHome: true,
  },
  {
    slug: "bolanekalkylator",
    name: "Bolånekalkylator",
    shortDescription:
      "Räkna ut din månadskostnad för bolån baserat på ränta, amorteringstid och lånebelopp. Snabb och tydlig kalkyl.",
    category: "ekonomi",
    component: BolanekalkylatorTool,
    showOnHome: true,
  },  
  {
    slug: "amorteringskalkylator",
    name: "Amorteringskalkylator",
    shortDescription:
      "Beräkna hur lång tid det tar att betala av ett lån med vald ränta och månadsbetalning.",
    category: "ekonomi",
    component: AmorteringskalkylatorTool,
    showOnHome: true, 
  },
  {
    slug: "valutakonverterare",
    name: "Valutakonverterare",
    shortDescription:
      "Konvertera belopp mellan olika valutor med aktuella växelkurser och växlingsavgift.",
    category: "ekonomi", // eller "konvertering" om du hellre vill ha den där
    component: ValutakonverterareTool,
    showOnHome: true,
  },
  
  
  
  /* -----------------------------------------------
     🟧 KONVERTERING
     (tom – vi fyller på när du bygger nästa kategori)
  -------------------------------------------------- */
  {
    slug: "km-till-miles-kalkylator",
    name: "KM till miles-kalkylator",
    shortDescription: "Konvertera snabbt mellan kilometer och miles åt båda hållen.",
    category: "konvertering",
    component: KmMilesTool,
    showOnHome: true,
  },

  /* -----------------------------------------------
     🟪 ÖVRIGT
     (tom – framtida verktyg)
  -------------------------------------------------- */

];
