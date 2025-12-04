// app/cookies/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Läs mer om hur Omvero använder cookies och liknande tekniker.",
  alternates: {
    canonical: "https://omvero.se/cookies",
  },
};

export default function CookiesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">Hem / Cookies</p>
        <h1 className="text-2xl font-semibold text-slate-900">Cookies</h1>
        <p className="text-sm text-slate-700 max-w-2xl">
          Här förklarar vi vilka cookies som används på omvero.se, varför de
          används och hur du kan hantera dem.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Vad är cookies?
        </h2>
        <p>
          Cookies är små textfiler som lagras i din webbläsare när du besöker en
          webbplats. De kan användas för att komma ihåg inställningar, möjliggöra
          funktioner eller samla in statistik.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Vilka cookies använder Omvero?
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-medium">Analyscookies (Google Analytics)</span>{" "}
            – används för att mäta trafik, användning av verktyg och för att
            förstå hur besökare hittar till sidan.
          </li>
          <li>
            <span className="font-medium">Tekniska cookies</span> – kan användas
            för att förbättra prestanda och användarupplevelse, t.ex.
            lastbalansering eller säkerhetsfunktioner.
          </li>
        </ul>
        <p>
          Våra kalkylatorer fungerar i huvudsak även om du väljer att blockera
          cookies, men vissa funktioner kan påverkas.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Hur kan jag hantera cookies?
        </h2>
        <p>
          Du kan när som helst ändra dina cookie-inställningar i webbläsaren.
          Där kan du:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Blockera alla cookies</li>
          <li>Blockera cookies från vissa webbplatser</li>
          <li>Radera sparade cookies</li>
        </ul>
        <p>
          Se respektive webbläsares hjälpsidor för instruktioner. Om du blockerar
          cookies kan vissa delar av webbplatsen sluta fungera optimalt.
        </p>
      </section>
    </div>
  );
}
