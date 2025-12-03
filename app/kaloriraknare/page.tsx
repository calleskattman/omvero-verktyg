// app/kaloriraknare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import CalorieTool from "@/components/tools/CalorieTool";

// SEO-metadata för kaloriräknaren
export const metadata: Metadata = {
  title: "Kaloriräknare (TDEE) – räkna ut ditt dagliga kaloribehov",
  description:
    "Räkna ut ditt dagliga kaloribehov (TDEE) baserat på kön, ålder, längd, vikt och aktivitetsnivå. Få en tydlig uppskattning av hur många kalorier du förbränner per dag.",
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
      name: "Vad är TDEE i en kaloriräknare?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "TDEE står för Total Daily Energy Expenditure och är en uppskattning av hur många kalorier du förbränner under en vanlig dag. Värdet inkluderar både kroppens grundförbrukning i vila och den energi som går åt till all fysisk aktivitet.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken formel använder den här kaloriräknaren?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Kaloriräknaren utgår från en vanlig formel för basalomsättning (BMR) och multiplicerar sedan med en aktivitetsfaktor för att uppskatta ditt totala kaloribehov, TDEE. Resultatet är en förenklad beräkning och ska ses som en riktlinje.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jag använda resultatet för att gå ned eller upp i vikt?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja, TDEE kan användas som en utgångspunkt. Vill du gå ned i vikt brukar man ofta minska energiintaget något jämfört med sitt TDEE, och vill du gå upp i vikt ökar man istället energiintaget. Exakt nivå beror på dina mål och din hälsa – kontakta gärna vården eller en dietist för personliga råd.",
      },
    },
    {
      "@type": "Question",
      name: "Hur exakt är en kaloriräknare online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "En kaloriräknare kan bara ge en uppskattning. Individuella faktorer som muskelmassa, genetik, hormonbalans, sjukdomar och vardagsvanor påverkar också energiförbrukningen. Se därför resultatet som ett ungefärligt riktvärde och inte som en medicinsk bedömning.",
      },
    },
  ],
};

export default function KaloriraknarePage() {
  return (
    <ToolLayout
      title="Kaloriräknare (TDEE)"
      description="Räkna ut ditt dagliga kaloribehov (TDEE) baserat på kön, ålder, längd, vikt och aktivitetsnivå. Resultatet ger en uppskattning av hur många kalorier du förbränner per dag."
    category="halsa"
    >
      <>
        {/* Structured data – SoftwareApplication */}
        <Script
          id="calorie-tool-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Kaloriräknare (TDEE)",
              description:
                "En gratis kaloriräknare online som beräknar ditt dagliga kaloribehov baserat på kön, ålder, längd, vikt och aktivitetsnivå.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              url: "https://omvero.se/kaloriraknare",
              isAccessibleForFree: true,
              publisher: {
                "@type": "Organization",
                name: "Omvero",
                url: "https://omvero.se",
              },
            }),
          }}
        />

        {/* Structured data – FAQ */}
        <Script
          id="calorie-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(calorieFaqSchema),
          }}
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
              Tänk på att det här är en förenklad modell. Kroppen är mer
              komplex än en formel, och individuella faktorer som
              kroppssammansättning, genetik, sömn, stress och hälsa påverkar
              också energiförbrukningen.
            </p>
          </section>

          {/* Aktivitetsnivåer */}
          <section aria-labelledby="calorie-aktivitet-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="calorie-aktivitet-rubrik"
            >
              Aktivitetsnivåer – riktlinjer
            </h2>
            <p className="text-sm text-slate-700 mb-3">
              När du väljer aktivitetsnivå i kaloriräknaren är det bra att
              tänka på hur en genomsnittlig vecka ser ut. Tabellen nedan ger en
              ungefärlig bild – välj det alternativ som känns mest rätt för din
              vardag.
            </p>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 border-b border-slate-200">
                      Aktivitetsnivå
                    </th>
                    <th className="px-4 py-2 border-b border-slate-200">
                      Beskrivning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-2 align-top font-medium">
                      Stillastående
                    </td>
                    <td className="px-4 py-2">
                      Du sitter eller står stilla större delen av dagen och
                      tränar sällan eller aldrig.
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-2 align-top font-medium">
                      Lätt aktiv
                    </td>
                    <td className="px-4 py-2">
                      Du tar promenader, rör dig i vardagen och tränar lätt ett
                      par gånger per vecka.
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-2 align-top font-medium">
                      Måttligt aktiv
                    </td>
                    <td className="px-4 py-2">
                      Du har ett mer rörligt jobb eller tränar regelbundet, till
                      exempel 3–5 pass per vecka.
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-2 align-top font-medium">
                      Mycket aktiv
                    </td>
                    <td className="px-4 py-2">
                      Du tränar hårt eller fysiskt tungt de flesta dagar i
                      veckan eller har ett mycket fysiskt arbete.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 align-top font-medium">
                      Elitnivå / extremt aktiv
                    </td>
                    <td className="px-4 py-2">
                      Du tränar på elitnivå, har dubbla pass vissa dagar eller
                      arbetar mycket fysiskt under större delen av veckan.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="calorie-exempel-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="calorie-exempel-rubrik"
            >
              Exempel på kaloriberäkning
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Tänk dig en person som är 30 år, väger 75 kg, är 180 cm lång och
              har en medelaktiv livsstil. Kaloriräknaren uppskattar först
              personens basalomsättning (BMR) och multiplicerar sedan med en
              aktivitetsfaktor.
            </p>
            <p className="text-sm text-slate-700 mb-1">
              Resultatet kan till exempel bli ett TDEE på runt{" "}
              <strong>2&nbsp;600 kcal per dag</strong>. Det innebär att personen
              ungefär behöver äta den mängden energi dagligen för att behålla
              sin nuvarande vikt, om aktivitetsnivån är densamma.
            </p>
            <p className="text-xs text-slate-500">
              Siffrorna är bara ett exempel och kan skilja sig från ditt eget
              resultat.
            </p>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="calorie-begransningar-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="calorie-begransningar-rubrik"
            >
              Begränsningar med kaloriräkning
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Även om en kaloriräknare kan vara ett bra verktyg för att förstå
              ungefär hur mycket energi kroppen använder, har metoden sina
              begränsningar. Formlerna tar sällan hänsyn till exempelvis
              muskelmassa, hormonella faktorer, sjukdomar eller hur du rör dig i
              detalj under dagen.
            </p>
            <p className="text-sm text-slate-700">
              Se därför resultatet som en grov uppskattning, inte som en exakt
              siffra eller medicinsk rekommendation. Vid oro kring vikt, kost
              eller hälsa är det alltid bäst att vända sig till vården eller en
              legitimerad dietist för en individuell bedömning.
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
                  Vad är TDEE i en kaloriräknare?
                </h3>
                <p>
                  TDEE står för Total Daily Energy Expenditure och beskriver hur
                  många kalorier du förbrukar under en hel dag. Värdet inkluderar både
                  kroppens grundförbrukning i vila och all fysisk aktivitet.
                </p>
              </article>

              <article aria-labelledby="calorie-faq-2">
                <h3 className="font-semibold mb-1" id="calorie-faq-2">
                  Vad är skillnaden mellan BMR och TDEE?
                </h3>
                <p>
                  BMR (Basal Metabolic Rate) är den energi kroppen använder i
                  vila – om du skulle ligga stilla hela dagen. TDEE är BMR
                  multiplicerat med en aktivitetsfaktor och visar ungefär hur
                  mycket energi du använder under en normal dag med rörelse och
                  träning inräknat.
                </p>
              </article>

              <article aria-labelledby="calorie-faq-3">
                <h3 className="font-semibold mb-1" id="calorie-faq-3">
                  Kan jag använda TDEE för att planera viktnedgång?
                </h3>
                <p>
                  Ja, många använder sitt uppskattade TDEE som utgångspunkt.
                  Vill du gå ned i vikt brukar man minska energiintaget något
                  jämfört med sitt TDEE, medan man ökar energiintaget om man vill
                  gå upp i vikt. Hur stort underskott eller överskott som är
                  lämpligt beror på dina mål och din hälsa – ta gärna hjälp av
                  vården eller en dietist vid osäkerhet.
                </p>
              </article>

              <article aria-labelledby="calorie-faq-4">
                <h3 className="font-semibold mb-1" id="calorie-faq-4">
                  Hur exakt är resultatet från en kaloriräknare?
                </h3>
                <p>
                  Resultatet är alltid en uppskattning. Olika räknare kan ge
                  lite olika värden beroende på formel och antaganden. Använd
                  TDEE som en grov riktlinje och kombinera gärna med hur kroppen
                  faktiskt reagerar över tid.
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
              Relaterade verktyg på Omvero
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Vill du få en enklare bild av din vikt i förhållande till din
              längd kan du även testa vår{" "}
              <a
                href="/bmi-raknare"
                className="text-[var(--primary)] hover:underline"
              >
                BMI-räknare
              </a>
              . Den kan ge en grov indikation på om du ligger inom vanliga
              intervall för undervikt, normalvikt, övervikt eller fetma.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
