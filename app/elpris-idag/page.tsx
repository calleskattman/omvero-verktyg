// app/elpris-idag/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import ElprisTool from "@/components/tools/ElprisTool";

export const metadata: Metadata = {
  title: "Elpris idag – aktuellt elpris, spotpris och timpris per elområde",
  description:
    "Se elpris idag timme för timme för ditt elområde. Verktyget visar aktuellt spotpris på el baserat på Nord Pools priser och hjälper dig förstå hur elpriset påverkar din elkostnad.",
  alternates: {
    canonical: "https://omvero.se/elpris-idag",
  },
};

// FAQ-innehåll (måste matcha UI + schema)
const faqQ1 = "Vad menas med elpris idag?";
const faqA1 =
  "Elpris idag syftar oftast på det aktuella spotpriset på el för dygnet, uppdelat timme för timme. Priset sätts på elbörsen Nord Pool och påverkas bland annat av tillgång, efterfrågan, väder, bränslepriser och överföringskapacitet. Elpris idag är grunden för rörligt elavtal och timprisavtal.";

const faqQ2 = "Vad är skillnaden mellan elpris, spotpris och timpris?";
const faqA2 =
  "Spotpris är det pris som sätts på elbörsen för varje timme. Timpris innebär att du som kund betalar ett pris som följer spotpriset timme för timme, plus elhandlarens påslag, skatt och nätavgifter. När man pratar om elpris idag menar man ofta spotpriset eller ett genomsnittligt elpris för dygnet, innan övriga kostnader lagts på.";

const faqQ3 = "Hur kan jag använda information om elpris idag i vardagen?";
const faqA3 =
  "Genom att följa elpris idag kan du planera din elanvändning smartare. Till exempel kan du lägga tvätt, diskmaskin eller elbilsladdning till timmar då elpriset är lågt. Har du timprisavtal kan du på så sätt sänka din elkostnad, även om din totala förbrukning är densamma. En elprisgraf gör det enklare att se vilka tider som är billigast.";

const faqQ4 = "Varför varierar elpriset så mycket mellan olika timmar och elområden?";
const faqA4 =
  "Elpriset varierar eftersom produktion och efterfrågan förändras över dygnet och skiljer sig åt mellan elområden. När många använder el samtidigt, som på morgon och kväll, stiger ofta elpriset. Väder, vindkraft, vattennivåer, bränslepriser och överföringskapacitet mellan elområden påverkar också. Därför kan elpris idag vara väldigt lågt vissa timmar och betydligt högre andra.";

const faqQ5 =
  "Ingår elnätavgift, skatt och andra kostnader i elpris idag som visas här?";
const faqA5 =
  "Nej. Elpris idag i verktyget syftar på spotpriset på elbörsen, exklusive elnätavgift, energiskatt, moms och elhandlarens påslag. Din faktiska elkostnad på elräkningen blir därför högre än spotpriset. För en komplett elkostnadsbild behöver du lägga till samtliga delar som ingår i ditt avtal.";

const faqQ6 = "Hur ofta uppdateras elpriserna i elprisverktyget?";
const faqA6 =
  "Elpriserna i elprisverktyget uppdateras automatiskt baserat på de timvisa spotpriserna från elbörsen Nord Pool. När nya timpriser publiceras hämtas de via API och visas i grafen. På så sätt får du en aktuell bild av elpris idag för ditt elområde, timme för timme.";

// FAQ-schema (JSON-LD)
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
    {
      "@type": "Question",
      name: faqQ6,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqA6,
      },
    },
  ],
};

// SoftwareApplication-schema för själva verktyget
const elprisCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Elpris idag – elpris och spotpris per timme",
  description:
    "Ett elprisverktyg som visar elpris idag timme för timme per elområde baserat på Nord Pools spotpriser. Hjälper dig att förstå hur elpriser påverkar din elkostnad och planera elanvändningen smartare.",
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

// Dataset-schema (extra E-E-A-T för tidsserie-data)
const elprisDatasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Elpris idag – timvisa spotpriser per elområde",
  description:
    "Timvisa spotpriser på el för svenska elområden (SE1–SE4) baserade på elbörsen Nord Pools officiella priser, visualiserade i ett elprisverktyg med graf.",
  creator: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
  distribution: [
    {
      "@type": "DataDownload",
      encodingFormat: "application/json",
      contentUrl: "https://omvero.se/elpris-idag",
    },
  ],
  license: "https://creativecommons.org/licenses/by-nc/4.0/",
  inLanguage: "sv-SE",
  isAccessibleForFree: true,
};

export default function ElprisIdagPage() {
  return (
    <ToolLayout
      title="Elpris idag"
      description="Se elpris idag timme för timme för ditt elområde. Följ aktuellt spotpris på el baserat på Nord Pools priser och lär dig planera din elanvändning smartare."
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

        {/* Dataset-schema */}
        <Script
          id="elpris-dataset-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(elprisDatasetSchema),
          }}
        />

        <div className="space-y-10">
          {/* (1) Verktyget: elprisgraf + kort förklaring */}
          <section aria-labelledby="elpris-verktyg-rubrik">
            <h2 id="elpris-verktyg-rubrik" className="sr-only">
              Elpris idag – översikt över elpris, spotpris och timpris
            </h2>

            <ElprisTool />

            <p className="mt-3 text-xs text-slate-500">
              Elpriserna i verktyget baseras på spotpriser från elbörsen Nord
              Pool och hämtas automatiskt via API. Värdena visas per timme för
              valt elområde (SE1–SE4) och uppdateras löpande i takt med att nya
              timpriser publiceras. Priserna är exklusive elnätsavgift,
              energiskatt, moms och elhandlarens påslag.
            </p>
          </section>

          {/* (2) Hur fungerar elpris idag och spotpris? */}
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
                Vårt elprisverktyg hämtar dessa timvisa spotpriser automatiskt
                via API och visar dem i en graf för respektive elområde: SE1,
                SE2, SE3 och SE4. Du kan se både elpris just nu och hur priset
                har varierat under dygnet, vilket gör det enklare att förstå
                mönster och trender i elpris idag.
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
                spotpris som visas här och den totala elkostnaden på din
                faktura. Elpris idag i verktyget är tänkt som ett stöd för att
                förstå marknadspriset på el, inte som en fullständig
                elkostnadskalkyl.
              </p>
            </div>
          </section>

          {/* (3) Exempel */}
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
                totala förbrukning är densamma. Elpris idag blir då ett
                praktiskt verktyg för att styra förbrukningen till billigare
                timmar.
              </p>
              <p>
                Har du istället ett traditionellt rörligt elavtal påverkas du
                mer av månadens genomsnittliga elpris. Då kan det vara
                intressant att följa generella prisnivåer, perioder med höga
                eller låga elpriser och hur säsongerna påverkar kostnaden
                snarare än enskilda timmar. Även då ger elpris idag en bra
                indikation på hur marknaden rör sig.
              </p>
            </div>
          </section>

          {/* (4) Fördjupning: elområden och prisvariation */}
          <section aria-labelledby="elpris-fordjupning-rubrik">
            <h2
              id="elpris-fordjupning-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Elområden i Sverige och varför elpris idag skiljer sig åt
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Sverige är uppdelat i fyra elområden: SE1, SE2, SE3 och SE4.
                Elpris idag kan skilja sig åt mellan dessa områden beroende på
                var produktionen finns, hur mycket el som används lokalt och
                hur stor överföringskapaciteten är mellan områdena. När det är
                trångt i elnäten kan elpriset bli högre i områden med stort
                underskott av produktion.
              </p>
              <p>
                I elprisverktyget väljer du elområde och ser timvisa priser för
                just det område som är relevant för dig. Det gör att du kan
                följa elpris idag på en nivå som stämmer med din faktiska
                situation, snarare än att bara titta på ett nationellt
                genomsnitt.
              </p>
            </div>
          </section>

          {/* (5) Begränsningar */}
          <section aria-labelledby="elpris-begransningar-rubrik">
            <h2
              id="elpris-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Information om elpris idag i verktyget fokuserar på spotpris
                från elbörsen, inte din fullständiga elkostnad. För att få en
                komplett bild behöver du lägga till elnätsavgift, energiskatt,
                moms och eventuella fasta avgifter. Två hushåll med samma
                spotpris kan därför ändå få olika totala elkostnader beroende
                på avtal och nätområde.
              </p>
              <p>
                Elpriser kan också ändras snabbt vid extrema väderförhållanden,
                förändrad produktion, ändrade bränslepriser eller störningar i
                överföringsnätet. Historiska prisnivåer är ingen garanti för
                framtida elpris idag, även om de kan ge en bild av hur
                marknaden brukar röra sig under olika säsonger.
              </p>
              <p className="font-semibold">
                Använd elpris idag som ett stöd för att förstå trender och
                planera elanvändning, men fatta alltid beslut om elavtal och
                investeringar utifrån din egen ekonomi och risknivå. Vid
                osäkerhet kring elmarknaden eller ditt avtal kan det vara
                klokt att kontakta din elleverantör eller en oberoende
                rådgivare.
              </p>
            </div>
          </section>

          {/* (6) FAQ */}
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

              <article>
                <h3 className="font-semibold">{faqQ6}</h3>
                <p>{faqA6}</p>
              </article>
            </div>
          </section>

          {/* (7) Relaterade verktyg */}
          <section aria-labelledby="elpris-relaterade-rubrik">
            <h2
              id="elpris-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Vill du räkna mer på din privatekonomi kan du använda vår{" "}
              <a
                href="/bolanekalkylator"
                className="text-blue-700 hover:underline"
              >
                bolånekalkylator
              </a>{" "}
              för att se hur ränta och amortering påverkar din boendekostnad.
              Du kan också utforska fler{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-700 hover:underline"
              >
                ekonomiska verktyg
              </a>{" "}
              på Omvero för att få en bättre helhetsbild av dina kostnader och
              din vardagsekonomi.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
