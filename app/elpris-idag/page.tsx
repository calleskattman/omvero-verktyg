// app/elpris-idag/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import ElprisTool from "@/components/tools/ElprisTool";

export const metadata: Metadata = {
  title: "Elpris idag – se aktuellt elpris och spotpris",
  description:
    "Få en översikt över elpris idag och spotpris på el timme för timme. Lär dig hur elpriser sätts, vad som påverkar kostnaden och hur du kan planera din elanvändning smartare.",
  alternates: {
    canonical: "https://omvero.se/elpris-idag",
  },
};

const faqQ1 = "Vad menas med elpris idag?";
const faqA1 =
  "Elpris idag syftar oftast på det aktuella spotpriset på el för dygnet, vanligtvis uppdelat timme för timme. Priset sätts på elbörsen Nord Pool och påverkas bland annat av tillgång, efterfrågan, väder, bränslepriser och överföringskapacitet. Elpris idag är grunden för rörligt elavtal och timprisavtal.";

const faqQ2 = "Vad är skillnaden mellan elpris, spotpris och timpris?";
const faqA2 =
  "Spotpris är det pris som sätts på elbörsen för varje timme. Timpris innebär att du som kund betalar ett pris som följer spotpriset timme för timme, plus elhandlarens påslag, skatt och nätavgifter. När man pratar om elpris idag menar man ofta spotpriset eller ett genomsnittligt elpris för dygnet, innan övriga kostnader lagts på.";

const faqQ3 = "Hur kan jag använda information om elpris idag?";
const faqA3 =
  "Genom att följa elpris idag kan du planera din elanvändning smartare. Till exempel kan du lägga tvätt, diskmaskin eller elbilsladdning till timmar då elpriset är lågt. På så sätt kan du sänka din elkostnad, särskilt om du har timprisavtal. En elpriskalkylator eller elprisgraf gör det enklare att se vilka tider som är billigast.";

const faqQ4 = "Varför varierar elpriset så mycket mellan olika timmar?";
const faqA4 =
  "Elpriset varierar eftersom produktion och efterfrågan förändras över dygnet. När många använder el samtidigt, som morgon och kväll, stiger ofta elpriset. Väder, vindkraft, vattennivåer och import/export påverkar också. Därför kan elpris idag vara väldigt lågt vissa timmar och betydligt högre andra timmar.";

const faqQ5 =
  "Tar elpris idag hänsyn till elnätavgift, skatt och andra kostnader?";
const faqA5 =
  "När man pratar om elpris idag eller spotpris syftar man normalt på själva elpriset på elbörsen, exklusive elnätavgift, energiskatt, moms och elhandlarens påslag. Din faktiska elkostnad blir högre än spotpriset. En komplett elkostnadskalkyl måste därför lägga till samtliga delar för att visa vad du betalar totalt per kWh.";

const elprisFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: faqQ1,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqA1,
      },
    },
    {
      "@type": "Question",
      name: faqQ2,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqA2,
      },
    },
    {
      "@type": "Question",
      name: faqQ3,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqA3,
      },
    },
    {
      "@type": "Question",
      name: faqQ4,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqA4,
      },
    },
    {
      "@type": "Question",
      name: faqQ5,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqA5,
      },
    },
  ],
};

const elprisCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Elpris idag – elpris och spotpris",
  description:
    "Ett verktyg för att följa elpris idag och spotpris på el timme för timme, samt förstå hur elpriser påverkar din elkostnad.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/elpris-idag",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function ElprisIdagPage() {
  return (
    <ToolLayout
      title="Elpris idag"
      description="Se hur elpris idag och spotpris på el påverkar din elkostnad och lär dig planera din elanvändning smartare över dygnet."
      category="ekonomi"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="elpris-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(elprisFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="elpris-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(elprisCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator / elprisöversikt – placeholder */}
          <section aria-labelledby="elpris-verktyg-rubrik">
            <h2 id="elpris-verktyg-rubrik" className="sr-only">
              Elpris idag – översikt över elpris och spotpris
            </h2>

            <ElprisTool />
          </section>

          {/* Hur fungerar elpris och spotpris idag? */}
          <section aria-labelledby="elpris-hur-fungerar-rubrik">
            <h2
              id="elpris-hur-fungerar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar elpris idag och spotpris på el?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Elpris idag baseras i grunden på spotpriset som sätts på
                elbörsen Nord Pool. För varje timme under dygnet bestäms ett
                pris där tillgång och efterfrågan möts. När det finns gott om
                billig produktion, som vattenkraft och vindkraft, kan
                elpriserna bli låga. När efterfrågan är hög eller produktionen
                är begränsad stiger priset.
              </p>
              <p>
                För dig som kund beror det faktiska elpriset på vilket avtal du
                har. Med rörligt elpris betalar du vanligtvis ett genomsnitt
                av månadens spotpris plus elhandlarens påslag. Har du timpris
                följer ditt elpris dagens spotpris timme för timme, vilket
                gör att elpris idag får direkt påverkan på vad du betalar för
                varje kWh under dygnet.
              </p>
              <p>
                Utöver själva elpriset tillkommer alltid elnätsavgift,
                energiskatt och moms. Därför är det viktigt att skilja på
                elpris idag på elbörsen och den totala elkostnaden på din
                faktura. Vårt kommande elprisverktyg fokuserar på att förklara
                just dessa skillnader på ett enkelt sätt.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="elpris-exempel-rubrik">
            <h2
              id="elpris-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så kan elpris idag påverka din elkostnad
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig att elpris idag varierar mellan 40 öre och 200 öre per
                kWh under dygnet. Om du har timprisavtal och laddar elbilen
                när priset ligger runt 50 öre per kWh kan kostnaden bli
                avsevärt lägre jämfört med om du laddar under en pristopp på
                150–200 öre per kWh.
              </p>
              <p>
                Samma sak gäller tvättmaskin, torktumlare, diskmaskin och andra
                större förbrukare. Genom att flytta elanvändning till timmar
                med lågt elpris kan du sänka din månadskostnad, även om din
                totala förbrukning är densamma. Informationen om elpris idag
                blir då ett praktiskt verktyg i vardagen.
              </p>
              <p>
                Har du istället ett traditionellt rörligt elavtal påverkas du
                mer av månadens genomsnittliga elpris. Då kan det vara
                intressant att följa generella prisnivåer, perioder med höga
                eller låga elpriser och hur säsongerna påverkar kostnaden
                snarare än enskilda timmar.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="elpris-begransningar-rubrik">
            <h2
              id="elpris-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Information om elpris idag fokuserar oftast på spotprisnivån,
                inte din fullständiga elkostnad. För att få en komplett bild
                behöver du lägga till elnätsavgift, energiskatt, moms och
                eventuellt fasta avgifter. Två hushåll med samma elpris idag
                kan därför ändå få olika totala elkostnader beroende på avtal
                och nätområde.
              </p>
              <p>
                Elpriser kan också variera mellan olika elområden i Sverige
                beroende på överföringskapacitet och var produktionen finns.
                När du tolkar elpris idag är det därför viktigt att titta på
                rätt elområde och rätt tidsperiod. Historiska prisnivåer är
                inte heller någon garanti för framtida priser.
              </p>
              <p className="font-semibold">
                Använd information om elpris idag som ett stöd för att förstå
                trender och planera elanvändning, men fatta alltid beslut om
                elavtal och investeringar utifrån din egen ekonomi och
                situation. Vid osäkerhet kring elmarknaden eller avtal kan det
                vara klokt att kontakta din elleverantör eller en rådgivare.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="elpris-faq-rubrik">
            <h2
              id="elpris-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om elpris idag
            </h2>
            <div className="mt-3 space-y-4 text-sm text-slate-700">
              <article>
                <h3 className="font-semibold">{faqQ1}</h3>
                <p>{faqA1}</p>
              </article>

              <article>
                <h3 className="font-semibold">{faqQ2}</h3>
                <p>{faqA2}</p>
              </article>

              <article>
                <h3 className="font-semibold">{faqQ3}</h3>
                <p>{faqA3}</p>
              </article>

              <article>
                <h3 className="font-semibold">{faqQ4}</h3>
                <p>{faqA4}</p>
              </article>

              <article>
                <h3 className="font-semibold">{faqQ5}</h3>
                <p>{faqA5}</p>
              </article>
            </div>
          </section>

          {/* Relaterade verktyg */}
          <section aria-labelledby="elpris-relaterade-rubrik">
            <h2
              id="elpris-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Vill du räkna mer på din energiförbrukning kan du framöver
              använda vår{" "}
              <a
                href="/energiforbrukning-kalkylator"
                className="text-blue-600 hover:underline"
              >
                energiförbrukningskalkylator
              </a>{" "}
              för att uppskatta kWh per månad och år. För att se hur elpris
              påverkar din boendekostnad kan du kombinera informationen från
              elpris idag med vår{" "}
              <a
                href="/bolanekalkylator"
                className="text-blue-600 hover:underline"
              >
                bolånekalkylator
              </a>{" "}
              och fler{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-600 hover:underline"
              >
                ekonomiska verktyg
              </a>{" "}
              på Omvero.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
