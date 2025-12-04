// app/integritetspolicy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Läs hur Omvero behandlar personuppgifter, cookies och användardata i enlighet med GDPR.",
  alternates: {
    canonical: "https://omvero.se/integritetspolicy",
  },
};

export default function IntegritetspolicyPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">
          Hem / Integritetspolicy
        </p>
        <h1 className="text-2xl font-semibold text-slate-900">
          Integritetspolicy
        </h1>
        <p className="text-sm text-slate-700 max-w-2xl">
          Den här integritetspolicyn beskriver hur Omvero (&quot;vi&quot;,
          &quot;oss&quot;) samlar in och behandlar personuppgifter när du
          använder våra kalkylatorer och övriga tjänster på omvero.se.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Personuppgiftsansvarig
        </h2>
        <p>
          Personuppgiftsansvarig för behandlingen av dina personuppgifter är:
        </p>
        <ul className="list-disc pl-5">
          <li>FÖRETAGSNAMN / Namn på ansvarig</li>
          <li>ORGNUMMER (om företag)</li>
          <li>ADRESS</li>
          <li>E-post: kontakt@exempel.se</li>
        </ul>
        <p className="text-xs text-slate-500">
          Byt ut uppgifterna ovan till dina faktiska uppgifter.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Vilka uppgifter samlar vi in?
        </h2>
        <p>
          Omvero är byggt för att användas utan konto, och vi ber inte om namn
          eller kontaktuppgifter för att du ska kunna använda våra kalkylatorer.
          Däremot kan följande typer av uppgifter behandlas:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-medium">Teknisk data</span> – t.ex. IP-adress,
            webbläsare, operativsystem, enhetstyp och ungefärlig geografisk
            plats (land/stad).
          </li>
          <li>
            <span className="font-medium">Användarbeteende</span> – t.ex. vilka
            sidor och verktyg som används, tid på sidan samt klick och
            navigering.
          </li>
          <li>
            <span className="font-medium">Formulärdata</span> – värden du skriver
            in i kalkylatorerna behandlas lokalt i din webbläsare och sparas
            normalt inte av oss. Vissa sammanställningar kan göras i anonym och
            aggregerad form för statistik.
          </li>
        </ul>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Syften och rättslig grund
        </h2>
        <p>Vi behandlar uppgifter för följande syften:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            För att kunna leverera och förbättra våra kalkylatorer och tjänster
            (berättigat intresse).
          </li>
          <li>
            För att mäta trafik, analysera användning och förbättra
            användarupplevelsen (berättigat intresse).
          </li>
          <li>
            För att upptäcka och motverka missbruk och tekniska problem
            (berättigat intresse).
          </li>
        </ul>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Google Analytics och cookies
        </h2>
        <p>
          Vi använder Google Analytics 4 för att samla in besöksstatistik.
          Informationen lagras av Google och används för att skapa rapporter om
          hur webbplatsen används. Datan anonymiseras i möjligaste mån och
          lagras enligt Googles egna villkor.
        </p>
        <p>
          Du kan när som helst blockera eller radera cookies i din webbläsares
          inställningar. Det kan påverka vissa funktioner men våra kalkylatorer
          är i huvudsak fullt användbara även utan cookies.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Lagringstid
        </h2>
        <p>
          Vi sparar endast personuppgifter så länge det är nödvändigt för att
          uppfylla syftena ovan. Data i Google Analytics lagras enligt
          standardinställningar eller den lagringsperiod vi har valt i tjänsten.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Dina rättigheter
        </h2>
        <p>
          Enligt dataskyddsförordningen (GDPR) har du rätt att begära utdrag,
          rättelse, radering eller begränsning av behandling av dina
          personuppgifter. Du har även rätt att invända mot behandling som
          grundas på berättigat intresse.
        </p>
        <p>
          Kontakta oss via e-post om du vill utöva dina rättigheter. Du har även
          rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du
          anser att vi behandlar dina uppgifter felaktigt.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Ändringar i integritetspolicyn
        </h2>
        <p>
          Vi kan uppdatera denna integritetspolicy vid behov. Den senaste
          versionen finns alltid publicerad på den här sidan.
        </p>
      </section>
    </div>
  );
}
