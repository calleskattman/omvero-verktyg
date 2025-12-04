// app/om/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Omvero",
  description:
    "Omvero samlar smarta, snabba och gratis kalkylatorer online för vardag, hälsa och ekonomi.",
  alternates: {
    canonical: "https://omvero.se/om",
  },
};

export default function OmPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">Hem / Om Omvero</p>
        <h1 className="text-2xl font-semibold text-slate-900">Om Omvero</h1>
        <p className="text-sm text-slate-700 max-w-2xl">
          Omvero är en samlingsplats för tydliga och lättanvända kalkylatorer
          inom vardagsekonomi, hälsa och olika omvandlingar.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Syftet med Omvero
        </h2>
        <p>
          Målet med Omvero är att göra det enkelt att snabbt räkna på saker som
          annars kräver formler, egna excelark eller tidskrävande googling.
          Istället får du tydliga verktyg som förklarar resultaten på ett
          begripligt sätt.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Hur verktygen tas fram
        </h2>
        <p>
          Varje kalkylator bygger på öppet beskrivna formler, branschpraxis
          eller offentligt tillgängliga regelverk där det är relevant. Vi
          strävar efter att hålla innehållet uppdaterat, men du bör alltid
          dubbelkolla viktiga beslut mot originalkällor eller rådgivare.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Kontakt och feedback
        </h2>
        <p>
          Har du förslag på nya verktyg, hittat ett fel eller vill samarbeta?
          Hör gärna av dig via vår kontaktsida eller e-post:
        </p>
        <p className="font-medium">kontakt@exempel.se</p>
        <p className="text-xs text-slate-500">
          Ändra e-postadressen till din riktiga kontaktadress.
        </p>
      </section>
    </div>
  );
}
