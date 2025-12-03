// app/bmi-raknare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import BmiTool from "@/components/tools/BmiTool";

// SEO-metadata för BMI-räknaren
export const metadata: Metadata = {
  title: "BMI-räknare – räkna ut ditt BMI (Body Mass Index)",
  description:
    "Räkna ut ditt BMI (Body Mass Index) med längd och vikt. Få en tydlig förklaring av ditt resultat, BMI-tabell och svar på vanliga frågor om BMI.",
  alternates: {
    canonical: "https://omvero.se/bmi-raknare",
  },
};

// FAQ-schema för Google – speglar FAQ-sektionen på sidan
const bmiFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad är BMI och hur räknas det ut?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "BMI (Body Mass Index) är ett mått som räknas ut genom att ta kroppsvikten i kilo och dela med längden i meter i kvadrat (kg/m²). Det används ofta som en enkel indikation på om en person ligger i undervikt, normalvikt, övervikt eller fetma.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka enheter används i BMI-räknaren?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "I denna BMI-räknare anger du vikt i kilo och längd i centimeter. Kalkylatorn omvandlar automatiskt längden till meter och räknar ut ditt BMI enligt den vanliga formeln kg/m².",
      },
    },
    {
      "@type": "Question",
      name: "Är BMI ett säkert mått på hälsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "BMI är en förenklad modell och säger ingenting om fördelningen mellan muskler och fett eller var på kroppen fettet sitter. Det kan därför vara missvisande för till exempel mycket vältränade personer. Vid oro över vikt eller hälsa bör du alltid kontakta vården för en individuell bedömning.",
      },
    },
  ],
};

export default function BmiRaknarePage() {
  return (
    <ToolLayout
      title="BMI-räknare"
      description="Räkna ut ditt BMI (Body Mass Index) med längd och vikt. Få en enkel tolkning av ditt resultat och lär dig mer om hur BMI fungerar och vad det säger – och inte säger – om din hälsa."
    category="halsa"
    >
      <>
        {/* Structured data – Calculator */}
        <Script
          id="bmi-tool-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BMI-räknare",
              description:
                "Räkna ut ditt BMI (Body Mass Index) baserat på längd och vikt. Få en indikation på om du ligger i undervikt, normalvikt, övervikt eller fetma.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              url: "https://omvero.se/bmi-raknare",
              isAccessibleForFree: true,
              inLanguage: "sv-SE",
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
          id="bmi-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bmiFaqSchema) }}
        />

        <div className="space-y-10">
          {/* Själva verktyget */}
          <section aria-labelledby="bmi-verktyg-rubrik">
            <h2 id="bmi-verktyg-rubrik" className="sr-only">
              BMI-räknare – beräkning av BMI
            </h2>
            <BmiTool />
          </section>

          {/* Kort introduktion & hur det fungerar */}
          <section aria-labelledby="bmi-hur-fungerar-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="bmi-hur-fungerar-rubrik"
            >
              Hur fungerar BMI-räknaren?
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              BMI-räknaren beräknar ditt Body Mass Index genom att ta din vikt i
              kilo och dela med din längd i meter i kvadrat (kg/m²). Du anger
              helt enkelt din längd i centimeter och din vikt i kilo – resten
              sköter kalkylatorn automatiskt.
            </p>
            <p className="text-sm text-slate-700 mb-2">
              Resultatet jämförs sedan med vanliga BMI-intervall som ofta
              används i vården och olika riktlinjer för att ge en grov
              indikation på om du ligger i undervikt, normalvikt, övervikt eller
              fetma. Kom ihåg att detta bara är en förenklad modell – det är
              inte en medicinsk diagnos.
            </p>
            <p className="text-sm text-slate-700">
              BMI fungerar bäst som ett övergripande statistiskt mått på
              befolkningsnivå. För bedömning av din individuella hälsa behöver
              fler faktorer tas med, till exempel midjemått, blodtryck,
              blodfetter, livsstil och ärftlighet.
            </p>
          </section>

          {/* BMI-tabell */}
          <section aria-labelledby="bmi-tabell-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="bmi-tabell-rubrik">
              BMI-tabell – vanliga intervall för vuxna
            </h2>
            <p className="text-sm text-slate-700 mb-3">
              Här är en översikt över vanliga BMI-intervall för vuxna. Olika
              källor kan skilja sig något åt, men tabellen nedan ger en
              ungefärlig bild:
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-800">
                      BMI-intervall
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-800">
                      Tolkning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-100">
                    <td className="px-3 py-2 text-slate-800">Under 18,5</td>
                    <td className="px-3 py-2 text-slate-700">Undervikt</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="px-3 py-2 text-slate-800">18,5 – 24,9</td>
                    <td className="px-3 py-2 text-slate-700">Normalvikt</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="px-3 py-2 text-slate-800">25 – 29,9</td>
                    <td className="px-3 py-2 text-slate-700">Övervikt</td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="px-3 py-2 text-slate-800">30 – 34,9</td>
                    <td className="px-3 py-2 text-slate-700">
                      Fetma klass I
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="px-3 py-2 text-slate-800">35 – 39,9</td>
                    <td className="px-3 py-2 text-slate-700">
                      Fetma klass II
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="px-3 py-2 text-slate-800">40 eller mer</td>
                    <td className="px-3 py-2 text-slate-700">
                      Fetma klass III (svår fetma)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Tabellen är förenklad och kan skilja sig något från olika
              riktlinjer. Kontrollera alltid aktuella rekommendationer hos
              vården eller ansvarig myndighet.
            </p>
          </section>

          {/* Exempel */}
          <section aria-labelledby="bmi-exempel-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="bmi-exempel-rubrik">
              Exempel på BMI-beräkning
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Anta att en person väger <strong>72 kg</strong> och är{" "}
              <strong>180 cm</strong> lång. Längden i meter blir då 1,80 m.
            </p>
            <p className="text-sm text-slate-700 mb-2">
              BMI beräknas enligt formeln:
            </p>
            <p className="text-sm text-slate-700 font-mono bg-slate-50 border border-slate-200 rounded-md px-3 py-2 inline-block mb-2">
              BMI = vikt (kg) / (längd (m) × längd (m))
            </p>
            <p className="text-sm text-slate-700 mb-2">
              I det här fallet blir det:
            </p>
            <p className="text-sm text-slate-700 mb-2">
              72 / (1,80 × 1,80) ≈ <strong>22,2</strong>
            </p>
            <p className="text-sm text-slate-700">
              Ett BMI på cirka 22 ligger inom spannet för normalvikt enligt den
              förenklade tabellen ovan.
            </p>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="bmi-begransningar-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="bmi-begransningar-rubrik"
            >
              Begränsningar med BMI som mått
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Även om BMI används ofta är det viktigt att förstå begränsningarna
              med måttet. BMI skiljer till exempel inte på om vikten består av
              muskler eller fett, och det tar inte hänsyn till var på kroppen
              fettet sitter.
            </p>
            <p className="text-sm text-slate-700 mb-2">
              Det innebär att till exempel vältränade personer med mycket
              muskelmassa kan få ett BMI som hamnar i övervikt eller fetma,
              trots att fettprocenten är låg. För äldre personer kan BMI också
              vara svårare att tolka, eftersom kroppssammansättningen ändras
              med åldern.
            </p>
            <p className="text-sm text-slate-700">
              Se därför BMI som en grov indikator och inte som ett exakt mått på
              hälsa. Vid oro över vikt, hälsa eller riskfaktorer är det alltid
              bäst att kontakta vården för en individuell bedömning.
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
                  Vad är BMI och hur räknas det ut?
                </h3>
                <p>
                  BMI står för Body Mass Index och beräknas genom att ta din
                  vikt i kilo och dela med längden i meter i kvadrat. Måttet
                  används för att få en övergripande bild av om vikten ligger
                  inom ett intervall som ofta kallas undervikt, normalvikt,
                  övervikt eller fetma.
                </p>
              </article>

              <article aria-labelledby="bmi-faq-2">
                <h3 className="font-semibold mb-1" id="bmi-faq-2">
                  Vilka enheter använder BMI-räknaren?
                </h3>
                <p>
                  I den här räknaren anger du din vikt i kilo och din längd i
                  centimeter. Räknaren omvandlar längden till meter
                  automatiskt, så du behöver inte göra det själv.
                </p>
              </article>

              <article aria-labelledby="bmi-faq-3">
                <h3 className="font-semibold mb-1" id="bmi-faq-3">
                  Är BMI ett säkert mått på min hälsa?
                </h3>
                <p>
                  Nej, BMI säger inte allt om din hälsa. Det tar inte hänsyn
                  till kroppssammansättning, muskelmassa, fettfördelning eller
                  andra viktiga faktorer. Se därför resultatet som en
                  utgångspunkt och inte som en diagnos. Vid frågor eller oro är
                  det klokt att prata med vården.
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
              Relaterade verktyg på Omvero
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Om du vill fördjupa dig ytterligare i din hälsa och energiförbrukning
              kan du även testa:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>
                <a
                  href="/kaloriraknare"
                  className="text-[var(--primary)] hover:underline"
                >
                  Kaloriräknare (TDEE) – räkna ut ditt dagliga kaloribehov
                </a>
              </li>
              {/* När vi bygger fler hälsorelaterade verktyg (t.ex. BMR-räknare) kan vi lägga till dem här. */}
            </ul>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
