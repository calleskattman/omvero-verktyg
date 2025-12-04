// app/villkor/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description:
    "Läs användarvillkoren för Omvero och våra kalkylatorer online.",
  alternates: {
    canonical: "https://omvero.se/villkor",
  },
};

export default function VillkorPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">Hem / Användarvillkor</p>
        <h1 className="text-2xl font-semibold text-slate-900">
          Användarvillkor
        </h1>
        <p className="text-sm text-slate-700 max-w-2xl">
          Genom att använda omvero.se och våra kalkylatorer accepterar du
          följande villkor.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Tjänstens natur
        </h2>
        <p>
          Omvero tillhandahåller kostnadsfria verktyg och kalkylatorer online.
          Tjänsten erbjuds i befintligt skick utan någon garanti för
          tillgänglighet, exakthet eller att resultaten är fullständiga.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Ingen ekonomisk eller juridisk rådgivning
        </h2>
        <p>
          Resultat från kalkylatorerna är förenklade och ska ses som vägledande
          exempel. De utgör inte ekonomisk, juridisk, medicinsk eller annan
          professionell rådgivning. Du ansvarar själv för alla beslut du fattar
          baserat på information från Omvero.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Ansvarsbegränsning
        </h2>
        <p>
          Vi strävar efter att ge korrekta och uppdaterade beräkningar, men kan
          inte garantera att alla formler, satser, regelverk eller externa
          datakällor alltid är aktuella eller felfria. Vi ansvarar inte för
          direkta eller indirekta skador som kan uppstå genom användning av
          webbplatsen eller dess innehåll.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Tillåten användning
        </h2>
        <p>
          Du får använda Omvero för privata och professionella syften så länge
          användningen följer gällande lagar och inte stör eller överbelastar
          tjänsten. Det är inte tillåtet att försöka kringgå säkerhet,
          manipulera beräkningar eller automatiskt skrapa stora datamängder utan
          vårt uttryckliga medgivande.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Immateriella rättigheter
        </h2>
        <p>
          Texter, struktur, design och logotyp på omvero.se ägs av Omvero om
          inget annat anges. Du får länka till våra sidor och använda
          skärmavbilder i informationssyfte, men får inte kopiera eller
          återpublicera innehåll i kommersiellt syfte utan vårt medgivande.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Ändringar i villkoren
        </h2>
        <p>
          Vi kan komma att uppdatera dessa användarvillkor. Den senaste
          versionen finns alltid på denna sida, och fortsätter du använda
          webbplatsen efter ändringar innebär det att du accepterar de uppdaterade
          villkoren.
        </p>
      </section>
    </div>
  );
}
