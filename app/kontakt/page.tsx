// app/kontakt/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Omvero om du har frågor, förslag på nya verktyg eller vill rapportera ett fel.",
  alternates: {
    canonical: "https://omvero.se/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">Hem / Kontakt</p>
        <h1 className="text-2xl font-semibold text-slate-900">Kontakt</h1>
        <p className="text-sm text-slate-700 max-w-2xl">
          Använd formuläret nedan eller kontakta oss via e-post om du har
          frågor, förslag eller synpunkter på Omvero.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Kontaktuppgifter
        </h2>
        <ul className="space-y-1">
          <li>
            <span className="font-medium">E-post:</span>{" "}
            <span>kontakt@exempel.se</span>
          </li>
          <li>
            <span className="font-medium">Företag / ansvarig:</span>{" "}
            <span>FÖRETAGSNAMN / NAMN</span>
          </li>
          <li>
            <span className="font-medium">Org.nr (om företag):</span>{" "}
            <span>ORGNUMMER</span>
          </li>
          <li>
            <span className="font-medium">Adress:</span>{" "}
            <span>ADRESS</span>
          </li>
        </ul>
        <p className="text-xs text-slate-500">
          Byt ut uppgifterna ovan till dina faktiska uppgifter.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Förslag och felrapportering
        </h2>
        <p>
          Om du upptäcker ett fel i en kalkylator eller har önskemål om nya
          funktioner är du varmt välkommen att höra av dig. Beskriv gärna
          vilket verktyg det gäller och vad du vill förbättra så blir det lättare
          för oss att prioritera rätt.
        </p>
      </section>
    </div>
  );
}
