// app/kaloriraknare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import CalorieTool from "@/components/tools/CalorieTool";

// SEO-metadata för kaloriräknaren
export const metadata: Metadata = {
  title: "Kaloriräknare (TDEE) – räkna ut ditt kaloribehov",
  description:
    "Räkna ut ditt dagliga kaloribehov (TDEE) baserat på kön, ålder, längd, vikt och aktivitetsnivå. Få en uppskattning av hur många kalorier du förbränner per dag.",
  alternates: {
    canonical: "https://omvero.se/kaloriraknare",
  },
};

// FAQ-schema för Google (måste spegla FAQ-texten på sidan)
const calorieFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad är TDEE?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "TDEE står för Total Daily Energy Expenditure och är en uppskattning av hur många kalorier du förbränner per dag, inklusive både basalomsättning och fysisk aktivitet.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken formel används i kaloriräknaren?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Den här kaloriräknaren använder den vanliga Mifflin–St Jeor-formeln för att uppskatta basalomsättningen (BMR) och multiplicerar sedan med en aktivitetsfaktor för att beräkna TDEE.",
      },
    },
    {
      "@type": "Question",
      name: "Är resultatet medicinsk rådgivning?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nej, resultatet är en förenklad uppskattning och ersätter inte medicinsk rådgivning. Vid oro kring vikt, kost eller hälsa bör du kontakta vården eller en legitimerad dietist.",
      },
    },
  ],
};

export default function KaloriraknarePage() {
  return (
    <ToolLayout
      title="Kaloriräknare (TDEE)"
      description="Räkna ut ditt dagliga kaloribehov (TDEE) baserat på kön, ålder, längd, vikt och aktivitetsnivå. Resultatet är en uppskattning av hur många kalorier du förbränner per dag."
    >
      <>
        {/* FAQ-schema för rich results i Google */}
        <Script
          id="calorie-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(calorieFaqSchema) }}
        />

        <div className="space-y-10">
          {/* Själva verktyget */}
          <section aria-labelledby="calorie-verktyg-rubrik">
            <h2 id="calorie-verktyg-rubrik" className="sr-only">
              Kaloriräknare – beräkning av TDEE
            </h2>
            <CalorieTool />
          </section>

          {/* Förklaring */}
          <section aria-labelledby="calorie-hur-fungerar-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="calorie-hur-fungerar-rubrik"
            >
              Hur fungerar kaloriräknaren?
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Kaloriräknaren uppskattar först din basalomsättning (BMR), det
              vill säga hur mycket energi kroppen förbrukar i vila. Därefter
              justeras värdet med en aktivitetsfaktor baserat på hur aktiv du är
              i vardagen. Resultatet kallas TDEE – ditt totala uppskattade
              kaloribehov per dag.
            </p>
            <p className="text-sm text-slate-700">
              Formeln som används är Mifflin–St&nbsp;Jeor, som är en av de mest
              använda modellerna för att uppskatta energiomsättning hos vuxna.
              Tänk på att värdet är en grov uppskattning och inte tar hänsyn
              till alla individuella faktorer.
            </p>
          </section>

          {/* Exempel */}
          <section aria-labelledby="calorie-exempel-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="calorie-exempel-rubrik"
            >
              Exempel
            </h2>
            <p className="text-sm text-slate-700">
              En person som väger 75 kg, är 180 cm lång, 30 år gammal och har en
              medelaktiv livsstil kan få ett uppskattat TDEE på runt 2600 kcal
              per dag. Det innebär att personen ungefär behöver äta den mängden
              energi dagligen för att behålla vikten, förutsatt att
              aktivitetsnivån är densamma.
            </p>
          </section>

          {/* FAQ */}
          <section aria-labelledby="calorie-faq-rubrik">
            <h2
              className="text-xl font-semibold mb-3"
              id="calorie-faq-rubrik"
            >
              Vanliga frågor om kaloribehov
            </h2>
            <div className="space-y-3 text-sm text-slate-700">
              <article aria-labelledby="calorie-faq-1">
                <h3 className="font-semibold mb-1" id="calorie-faq-1">
                  Kan jag använda TDEE för att gå upp eller ned i vikt?
                </h3>
                <p>
                  TDEE kan ge en ungefärlig bild av ditt nuvarande energibehov.
                  För att gå ned i vikt brukar man ofta minska energiintaget
                  något, och för att gå upp i vikt öka det. Exakt nivå beror på
                  dina mål och din hälsa – ta hjälp av vården eller dietist vid
                  behov.
                </p>
              </article>

              <article aria-labelledby="calorie-faq-2">
                <h3 className="font-semibold mb-1" id="calorie-faq-2">
                  Varför skiljer sig olika kaloriräknare åt?
                </h3>
                <p>
                  Olika räknare kan använda olika formler och
                  aktivitetsfaktorer. Det gör att resultatet kan skilja sig
                  något mellan verktyg. Se därför TDEE som en riktlinje snarare
                  än ett exakt värde.
                </p>
              </article>
            </div>
          </section>

          {/* Relaterade verktyg */}
          <section aria-labelledby="calorie-relaterade-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="calorie-relaterade-rubrik"
            >
              Relaterade verktyg
            </h2>
            <p className="text-sm text-slate-700">
              Du kan också använda vår{" "}
              <a
                href="/bmi-raknare"
                className="text-[var(--primary)] hover:underline"
              >
                BMI-räknare
              </a>{" "}
              för att få en enkel indikation på hur ditt BMI ligger i
              förhållande till vanliga intervall.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
