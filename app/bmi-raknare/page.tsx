// app/bmi-raknare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import BmiTool from "@/components/tools/BmiTool";

// SEO-metadata för BMI-räknaren
export const metadata: Metadata = {
  title: "BMI-räknare – räkna ut ditt BMI",
  description:
    "Räkna ut ditt BMI (Body Mass Index) med längd och vikt. Få en enkel indikation på om du hamnar i undervikt, normalvikt, övervikt eller fetma.",
  alternates: {
    canonical: "https://omvero.se/bmi-raknare",
  },
};

// FAQ-schema för Google (måste spegla FAQ-texten på sidan)
const bmiFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad är BMI?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "BMI (Body Mass Index) är ett mått som beräknas utifrån längd och vikt. Det används ofta som en enkel indikator på undervikt, normalvikt, övervikt eller fetma, men tar inte hänsyn till faktorer som muskelmassa och kroppssammansättning.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka enheter används för BMI-beräkningen?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "I den här räknaren anger du vikt i kilo och längd i centimeter. Kalkylatorn omvandlar längden till meter och beräknar sedan BMI enligt formeln kg/m².",
      },
    },
    {
      "@type": "Question",
      name: "Räcker BMI för att bedöma hälsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nej, BMI är bara en grov uppskattning. Det säger inget om kroppssammansättning, muskelmassa, fettfördelning eller andra viktiga hälsoparametrar. Vid oro över vikt eller hälsa bör du kontakta vården för en individuell bedömning.",
      },
    },
  ],
};

<Script
  id="bmi-tool-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Calculator",
      "name": "BMI-räknare",
      "description": "Räkna ut ditt BMI (Body Mass Index) baserat på längd och vikt. Få en indikation på undervikt, normalvikt eller övervikt.",
      "url": "https://omvero.se/bmi-raknare",
      "applicationCategory": "HealthApplication",
      "isAccessibleForFree": true,
      "publisher": {
        "@type": "Organization",
        "name": "Omvero Verktygsportalen",
        "url": "https://omvero.se"
      }
    })
  }}
/>


export default function BmiRaknarePage() {
  return (
    <ToolLayout
      title="BMI-räknare"
      description="Räkna ut ditt BMI (Body Mass Index) med längd och vikt. Få en enkel indikation på om ditt BMI hamnar i undervikt, normalvikt, övervikt eller fetma."
    >
      <>
        {/* FAQ-schema för rich results i Google */}
        <Script
          id="bmi-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bmiFaqSchema) }}
        />

        <div className="space-y-10">
          {/* Själva verktyget */}
          <section aria-labelledby="bmi-verktyg-rubrik">
            <h2 id="bmi-verktyg-rubrik" className="sr-only">
              BMI-räknare – beräkning
            </h2>
            <BmiTool />
          </section>

          {/* Förklaring */}
          <section aria-labelledby="bmi-hur-fungerar-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="bmi-hur-fungerar-rubrik"
            >
              Hur fungerar BMI-räknaren?
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              BMI (Body Mass Index) beräknas genom att ta kroppsvikten i kilo
              och dela med längden i meter i kvadrat (kg/m²). Kalkylatorn tar
              dina värden för längd och vikt och räknar automatiskt ut ditt BMI.
            </p>
            <p className="text-sm text-slate-700">
              Resultatet jämförs sedan med vanliga BMI-intervall, som ofta
              används för att klassificera undervikt, normalvikt, övervikt och
              fetma. Tänk på att BMI är en förenklad modell och inte ger en
              fullständig bild av din hälsa.
            </p>
          </section>

          {/* Exempel */}
          <section aria-labelledby="bmi-exempel-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="bmi-exempel-rubrik">
              Exempel
            </h2>
            <p className="text-sm text-slate-700">
              Om du väger 72 kg och är 180 cm lång beräknas ditt BMI som 72 / (1
              ,80 × 1,80) ≈ 22,2. Det ligger inom intervallet för normalvikt
              enligt vanliga BMI-gränser.
            </p>
          </section>

          {/* FAQ */}
          <section aria-labelledby="bmi-faq-rubrik">
            <h2 className="text-xl font-semibold mb-3" id="bmi-faq-rubrik">
              Vanliga frågor om BMI
            </h2>
            <div className="space-y-3 text-sm text-slate-700">
              <article aria-labelledby="bmi-faq-1">
                <h3 className="font-semibold mb-1" id="bmi-faq-1">
                  Kan BMI användas för alla?
                </h3>
                <p>
                  BMI lämpar sig sämre för till exempel barn, äldre, personer
                  med mycket muskelmassa eller vid vissa sjukdomstillstånd. I
                  dessa fall kan andra mätmetoder vara mer relevanta.
                </p>
              </article>

              <article aria-labelledby="bmi-faq-2">
                <h3 className="font-semibold mb-1" id="bmi-faq-2">
                  Ska jag ändra mina vanor enbart utifrån BMI?
                </h3>
                <p>
                  Nej, ta alltid hänsyn till helheten. Om du är orolig för din
                  vikt eller hälsa är det bäst att prata med vården för att få
                  en samlad bedömning och personliga råd.
                </p>
              </article>
            </div>
          </section>

          {/* Relaterade verktyg */}
          <section aria-labelledby="bmi-relaterade-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="bmi-relaterade-rubrik"
            >
              Relaterade verktyg
            </h2>
            <p className="text-sm text-slate-700">
              På sikt kan du hitta fler hälsorelaterade räknare här, till
              exempel verktyg för energibehov eller träningsplanering.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
