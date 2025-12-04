// app/km-till-miles-kalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import KmMilesTool from "@/components/tools/KmMilesTool";

export const metadata: Metadata = {
  title: "Km till miles-kalkylator – konvertera kilometer till miles",
  description:
    "Konvertera kilometer till miles och miles till kilometer med vår km till miles-kalkylator. Få en snabb och tydlig omvandling av sträcka för resor, träning och vardag.",
  alternates: {
    canonical: "https://omvero.se/km-till-miles-kalkylator",
  },
};

const faqQ1 = "Vad är en km till miles-kalkylator?";
const faqA1 =
  "En km till miles-kalkylator hjälper dig att konvertera sträckor mellan kilometer och miles. Du anger en sträcka i kilometer eller miles och verktyget räknar automatiskt om den till den andra enheten. Det är praktiskt vid resor, löpning, bilkörning eller när du läser kartor och vill förstå avstånd i ett annat måttsystem.";

const faqQ2 = "Hur fungerar omvandlingen mellan kilometer och miles?";
const faqA2 =
  "Omvandlingen mellan kilometer och miles baseras på fasta matematiska samband. En mile motsvarar ungefär 1,609 kilometer, och en kilometer motsvarar cirka 0,621 miles. En km till miles-kalkylator använder dessa faktorer för att räkna om sträckan åt dig, så att du slipper göra beräkningen manuellt.";

const faqQ3 = "När är det bra att använda en km till miles-kalkylator?";
const faqA3 =
  "En km till miles-kalkylator är särskilt användbar när du planerar resor i länder som använder miles, till exempel USA eller Storbritannien, medan du själv är van vid kilometer. Den är också bra när du följer träningsprogram eller löptävlingar där distanser anges i miles men du vill veta sträckan i kilometer, eller tvärtom.";

const faqQ4 = "Hur noggrann är omvandlingen mellan kilometer och miles?";
const faqA4 =
  "En km till miles-kalkylator kan räkna med hög noggrannhet genom att använda exakta omvandlingsfaktorer. I praktiken avrundas ofta resultatet till ett rimligt antal decimaler, till exempel en eller två decimaler, för att vara lättare att läsa. För vardagsanvändning är detta mer än tillräckligt exakt.";

const faqQ5 =
  "Kan jag också räkna om miles till kilometer i samma kalkylator?";
const faqA5 =
  "Ja, en bra km till miles-kalkylator låter dig både konvertera kilometer till miles och miles till kilometer. Du väljer bara vilket håll du vill räkna åt, skriver in sträckan och får resultatet direkt, oavsett om du utgår från kilometer eller miles.";

const kmMilesFaqSchema = {
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

const kmMilesCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Km till miles-kalkylator",
  description:
    "En km till miles-kalkylator där du kan konvertera sträckor mellan kilometer och miles snabbt och enkelt.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/km-till-miles-kalkylator",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function KmTillMilesKalkylatorPage() {
  return (
    <ToolLayout
      title="Km till miles-kalkylator"
      description="Konvertera kilometer till miles och miles till kilometer på några sekunder. Perfekt för resor, träning och vardagsanvändning."
      category="konvertering"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="km-miles-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(kmMilesFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="km-miles-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(kmMilesCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator-sektion – placeholder tills verktyget är byggt */}
          <section aria-labelledby="km-miles-verktyg-rubrik">
            <h2 id="km-miles-verktyg-rubrik" className="sr-only">
              Km till miles-kalkylator – konvertering mellan kilometer och miles
            </h2>

            <KmMilesTool />
          </section>

          {/* Hur fungerar km till miles-kalkylatorn? */}
          <section aria-labelledby="km-miles-hur-fungerar-rubrik">
            <h2
              id="km-miles-hur-fungerar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar en km till miles-kalkylator?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En km till miles-kalkylator bygger på fasta omvandlingsfaktorer
                mellan måttenheterna kilometer och miles. En mile är definierad
                som ungefär 1,609 kilometer, vilket innebär att du kan räkna om
                kilometer till miles genom att multiplicera med cirka 0,621.
                Kalkylatorn gör denna omvandling automatiskt åt dig.
              </p>
              <p>
                För att använda kalkylatorn anger du vilket håll du vill räkna
                åt: kilometer till miles eller miles till kilometer. Du skriver
                in sträckan, och verktyget räknar ut resultatet direkt. Det
                sparar tid och minskar risken för fel som kan uppstå vid
                huvudräkning eller manuella beräkningar.
              </p>
              <p>
                I en användarvänlig km till miles-kalkylator kan du enkelt
                växla riktning på omvandlingen och göra flera beräkningar i
                följd. Det gör det smidigt när du till exempel planerar en
                resa, jämför löpdistans eller försöker tolka en karta där
                avstånden anges i miles.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="km-miles-exempel-rubrik">
            <h2
              id="km-miles-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så konverterar du kilometer till miles
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Anta att du har en löprunda på 10 kilometer och vill veta vad
                det motsvarar i miles. Med omvandlingsfaktorn 1 kilometer ≈
                0,621 miles blir 10 km ungefär 6,21 miles. En km till
                miles-kalkylator gör den här beräkningen åt dig och visar
                resultatet direkt.
              </p>
              <p>
                Om du istället ser en sträcka på 5 miles i ett träningsprogram
                och vill veta hur långt det är i kilometer kan du räkna åt
                andra hållet. 5 miles motsvarar ungefär 8,05 kilometer. Även
                här gör kalkylatorn omvandlingen åt dig så att du enkelt kan
                anpassa träningspassen till det måttsystem du är van vid.
              </p>
              <p>
                Samma princip gäller vid bilresor och resplanering. Om en
                sträcka anges i miles på en karta från USA eller Storbritannien
                kan du snabbt räkna om den till kilometer för att få en bättre
                känsla för hur långt det faktiskt är.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="km-miles-begransningar-rubrik">
            <h2
              id="km-miles-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En km till miles-kalkylator använder matematiska omvandlingar
                som i sig är exakta, men resultaten avrundas ofta till ett
                rimligt antal decimaler. Det innebär att små avvikelser kan
                uppstå om du jämför med mycket exakta vetenskapliga eller
                tekniska beräkningar, men för vardagsanvändning är
                noggrannheten mer än tillräcklig.
              </p>
              <p>
                I praktiken kan det också finnas avrundningsskillnader mellan
                olika källor, till exempel om vissa använder 1 mile = 1,609 km
                och andra 1,61 km. Så länge samma omvandlingsfaktor används
                konsekvent i kalkylatorn blir resultaten lätta att tolka och
                jämföra.
              </p>
              <p className="font-semibold">
                Se km till miles-kalkylatorn som ett praktiskt hjälpmedel för
                resor, träning och vardag, inte som ett vetenskapligt
                mätinstrument. Vid behov av extrem precision kan du alltid
                kontrollera exakta värden i tekniska specifikationer eller
                standarder.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="km-miles-faq-rubrik">
            <h2
              id="km-miles-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om km till miles-kalkylatorn
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
          <section aria-labelledby="km-miles-relaterade-rubrik">
            <h2
              id="km-miles-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              För fler smarta omvandlingar kan du också använda vår{" "}
              <a
                href="/valutakonverterare"
                className="text-blue-700 hover:underline"
              >
                valutakonverterare
              </a>{" "}
              för att räkna om mellan olika valutor, eller utforska fler{" "}
              <a
                href="/verktyg/konvertering"
                className="text-blue-700 hover:underline"
              >
                konverteringsverktyg
              </a>{" "}
              på Omvero. Vill du samtidigt få koll på kostnader kan du även
              testa våra{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-700 hover:underline"
              >
                ekonomiska kalkylatorer
              </a>{" "}
              som hjälper dig att räkna på lån, ränta och andra privatekonomiska
              beslut.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
