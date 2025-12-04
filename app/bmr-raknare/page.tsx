// app/bmr-raknare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import BmrTool from "@/components/tools/BmrTool";

export const metadata: Metadata = {
  title: "BMR-räknare – beräkna din basalomsättning",
  description:
    "Beräkna din BMR (basalomsättning) och se hur många kalorier din kropp förbränner i vila. BMR-räknaren hjälper dig att räkna ut ditt kaloriintag för viktminskning, viktökning eller bibehållen vikt.",
  alternates: {
    canonical: "https://omvero.se/bmr-raknare",
  },
};

const faqQ1 = "Vad är en BMR-räknare?";
const faqA1 =
  "En BMR-räknare hjälper dig att beräkna din basalomsättning, alltså hur många kalorier din kropp behöver per dygn i fullständig vila. Genom att utgå från längd, vikt, ålder och kön kan BMR-räknaren uppskatta din vilometabolism, vilket är en viktig grund när du vill räkna ut rätt kaloriintag.";

const faqQ2 = "Hur fungerar en BMR-räknare?";
const faqA2 =
  "En BMR-räknare använder etablerade formler, som till exempel Mifflin–St Jeor, för att uppskatta din BMR baserat på längd, vikt, ålder och kön. Resultatet visar hur mycket energi kroppen förbrukar i vila. Du kan sedan lägga till din aktivitetsnivå för att räkna ut ditt totala kaloribehov per dag.";

const faqQ3 = "Vad är skillnaden mellan BMR och TDEE?";
const faqA3 =
  "BMR är basalomsättningen – kalorierna du förbrukar i vila. TDEE (Total Daily Energy Expenditure) är ditt totala kaloribehov per dag när både BMR och din aktivitetsnivå räknas in. För att räkna ut TDEE används ofta BMR som grund, som sedan multipliceras med en aktivitetsfaktor.";

const faqQ4 =
  "Hur kan jag använda en BMR-räknare för att gå ner i vikt?";
const faqA4 =
  "När du har räknat ut din BMR och ditt totala kaloribehov kan du skapa ett kaloriunderskott för att gå ner i vikt. En vanlig riktlinje är att minska det dagliga kaloriintaget med 300–500 kcal. BMR-räknaren ger dig en grundsiffra att utgå från, men kom ihåg att anpassa intaget efter hur du mår och utvecklas över tid.";

const faqQ5 =
  "Hur tillförlitlig är en BMR-räknare jämfört med verkligheten?";
const faqA5 =
  "En BMR-räknare ger en uppskattning baserad på genomsnittliga formler. Den tar inte hänsyn till alla individuella faktorer som muskelmassa, hormoner, sjukdomar eller genetik. Därför ska resultatet ses som en riktlinje, inte en exakt sanning. För avancerade behov kan professionell rådgivning vara ett bra komplement.";

const bmrFaqSchema = {
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

const bmrCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BMR-räknare",
  description:
    "En BMR-räknare där du kan beräkna din basalomsättning och uppskatta hur många kalorier din kropp förbränner i vila.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/bmr-raknare",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function BmrRaknarePage() {
  return (
    <ToolLayout
      title="BMR-räknare"
      description="Beräkna din BMR (basalomsättning) och se hur många kalorier din kropp förbränner i vila. En bra grund för att räkna ut rätt kaloriintag för dina mål."
      category="halsa"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="bmr-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bmrFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="bmr-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bmrCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator-sektion – placeholder tills verktyget är byggt */}
          <section aria-labelledby="bmr-verktyg-rubrik">
            <h2 id="bmr-verktyg-rubrik" className="sr-only">
              BMR-räknare – beräkning
            </h2>

            <BmrTool />
          </section>

          {/* Hur fungerar BMR-räknaren? */}
          <section aria-labelledby="bmr-hur-fungerar-rubrik">
            <h2
              id="bmr-hur-fungerar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar en BMR-räknare?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En BMR-räknare hjälper dig att räkna ut din basalomsättning,
                det vill säga hur många kalorier din kropp behöver per dygn i
                absolut vila. Den använder etablerade formler för att uppskatta
                din vilometabolism baserat på längd, vikt, ålder och kön. På så
                sätt får du en startpunkt när du vill beräkna ditt kaloribehov.
              </p>
              <p>
                BMR står för Basal Metabolic Rate och beskriver kroppens
                energiförbrukning för att hålla igång grundläggande funktioner
                som andning, hjärtslag, hjärnaktivitet och cellreparation. När
                du använder en BMR-räknare får du en uppskattning av denna
                energiförbrukning innan fysisk aktivitet räknas in.
              </p>
              <p>
                Resultatet från BMR-räknaren kan sedan multipliceras med en
                aktivitetsfaktor för att räkna ut ditt totala kaloribehov
                (TDEE). Det gör att du kan använda BMR både för att planera
                viktnedgång, viktuppgång och för att hålla vikten stabil.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="bmr-exempel-rubrik">
            <h2
              id="bmr-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så kan din BMR påverka kaloriintaget
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig en person som är 30 år, väger 80 kg och är 180 cm
                lång. Med en BMR-räknare kan basalomsättningen uppskattas till
                runt 1 800–1 900 kcal per dag. Det är ungefär så många kalorier
                kroppen förbrukar i vila, utan någon extra aktivitet.
              </p>
              <p>
                Om samma person har en normal aktivitetsnivå i vardagen kan det
                totala kaloribehovet (TDEE) hamna runt 2 400–2 700 kcal per
                dag. Vill personen gå ner i vikt kan ett rimligt steg vara att
                lägga sig några hundra kilokalorier under sitt uppskattade
                TDEE, beroende på mål och tidsram.
              </p>
              <p>
                En BMR-räknare gör det enklare att förstå var du befinner dig i
                utgångsläget. Istället för att gissa kan du utgå från en
                beräknad basalomsättning och justera kaloriintaget gradvis
                utifrån hur kroppen reagerar över tid.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="bmr-begransningar-rubrik">
            <h2
              id="bmr-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En BMR-räknare bygger på generella formler och antaganden.
                Resultatet tar inte hänsyn till skillnader i kroppssammansättning,
                som hur mycket muskler du har, eller faktorer som hormoner,
                sömn, stress och eventuella sjukdomar. Två personer med samma
                längd, vikt och ålder kan därför ha olika verklig
                basalomsättning.
              </p>
              <p>
                Därför ska BMR alltid ses som en uppskattning och ett
                startvärde, inte en exakt siffra. Det kan vara klokt att
                kombinera BMR-räkning med hur du faktiskt mår, hur vikten
                utvecklas och om du känner dig pigg eller trött i vardagen.
              </p>
              <p className="font-semibold">
                Använd BMR-räknaren som ett verktyg för att bättre förstå din
                kropp och ditt energibehov, men fatta beslut om kost och
                träning med sunt förnuft och gärna i dialog med vård eller
                rådgivare om du är osäker.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="bmr-faq-rubrik">
            <h2
              id="bmr-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om BMR-räknaren
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
          <section aria-labelledby="bmr-relaterade-rubrik">
            <h2
              id="bmr-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Vill du gå vidare från BMR och räkna på ditt totala
              kaloribehov kan du testa vår{" "}
              <a
                href="/kaloriraknare"
                className="text-blue-800 underline hover:text-blue-900"
              >
                kaloriräknare (TDEE)
              </a>{" "}
              för att se hur aktivitet påverkar energibehovet. Du kan också
              använda vår{" "}
              <a
                href="/bmi-raknare"
                className="text-blue-800 underline hover:text-blue-900"
              >
                BMI-räknare
              </a>{" "}
              för att få en enkel indikation på din vikt i förhållande till din
              längd, eller utforska fler{" "}
              <a
                href="/verktyg/halsa"
                className="text-blue-800 underline hover:text-blue-900"
              >
                verktyg för hälsa
              </a>{" "}
              på Omvero.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
