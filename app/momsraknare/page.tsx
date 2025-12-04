// app/momsraknare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import MomsTool from "@/components/tools/MomsTool";


export const metadata: Metadata = {
  title: "Momsräknare – räkna ut moms snabbt och enkelt",
  description:
    "Räkna ut moms på varor och tjänster med vår momsräknare. Beräkna pris inklusive moms, exklusive moms och se hur mycket av beloppet som är moms.",
  alternates: {
    canonical: "https://omvero.se/momsraknare",
  },
};

const faqQ1 = "Vad är en momsräknare?";
const faqA1 =
  "En momsräknare hjälper dig att räkna ut moms på ett belopp. Du kan till exempel ta reda på hur mycket moms som ingår i ett pris inklusive moms, räkna fram pris exklusive moms eller lägga på moms på ett nettopris. Det gör det enklare att snabbt se hur stor del av priset som är skatt.";

const faqQ2 = "Hur fungerar en momsräknare?";
const faqA2 =
  "En momsräknare använder en vald momssats, till exempel 25, 12 eller 6 procent, för att räkna ut momsbeloppet. Du anger om ditt belopp är inklusive eller exklusive moms och vilken momssats som gäller. Därefter räknar momsräknaren automatiskt fram priset med och utan moms samt själva momsbeloppet.";

const faqQ3 = "Vilka momssatser används i Sverige?";
const faqA3 =
  "I Sverige är den vanligaste momssatsen 25 procent, som gäller för de flesta varor och tjänster. Det finns också 12 procent moms, till exempel på livsmedel och restaurangbesök, samt 6 procent moms på bland annat böcker, tidningar och vissa kultur- och idrottsevenemang. En momsräknare gör det enkelt att växla mellan olika momssatser.";

const faqQ4 = "Hur räknar jag ut pris exklusive moms?";
const faqA4 =
  "För att räkna ut pris exklusive moms från ett belopp inklusive moms delar du priset med 1 plus momssatsen i decimalform. Vid 25 procent moms delar du till exempel med 1,25. En momsräknare gör detta åt dig automatiskt och visar både nettopriset och hur stort momsbeloppet är.";

const faqQ5 =
  "Tar momsräknaren hänsyn till olika momssatser på samma faktura?";
const faqA5 =
  "En enkel momsräknare räknar normalt på ett belopp i taget med en momssats åt gången. Om du har en faktura med flera rader och olika momssatser behöver du räkna på varje del separat. För mer avancerade behov kan det krävas ett ekonomiprogram eller ett faktureringssystem som hanterar flera momssatser samtidigt.";

const momsFaqSchema = {
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

const momsCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Momsräknare",
  description:
    "En momsräknare där du kan räkna ut moms, pris inklusive moms och pris exklusive moms med olika momssatser.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/momsraknare",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function MomsraknarePage() {
  return (
    <ToolLayout
      title="Momsräknare"
      description="Räkna ut moms på några sekunder. Beräkna pris inklusive och exklusive moms och se exakt hur mycket moms som ingår i ett belopp."
      category="ekonomi"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="moms-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(momsFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="moms-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(momsCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator-sektion – placeholder tills verktyget är byggt */}
          <section aria-labelledby="moms-verktyg-rubrik">
            <h2 id="moms-verktyg-rubrik" className="sr-only">
              Momsräknare – beräkning av moms
            </h2>

            <MomsTool />
          </section>

          {/* Hur fungerar momsräknaren? */}
          <section aria-labelledby="moms-hur-fungerar-rubrik">
            <h2
              id="moms-hur-fungerar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar en momsräknare?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En momsräknare är ett verktyg som hjälper dig att räkna ut
                moms på ett belopp utan att du behöver komma ihåg formler.
                Genom att välja momssats och ange ett pris kan du snabbt se hur
                mycket av summan som är moms, samt vad priset blir med eller
                utan moms. Det sparar tid och minskar risken för felräkning.
              </p>
              <p>
                Om du har ett pris exklusive moms lägger momsräknaren på
                rätt momssats, till exempel 25, 12 eller 6 procent, och visar
                priset inklusive moms. Har du istället ett pris inklusive moms
                kan verktyget räkna baklänges för att ta fram nettopriset och
                momsbeloppet. På så sätt fungerar momsräknaren både för
                företagare och privatpersoner.
              </p>
              <p>
                Verktyget är särskilt användbart när du skapar offerter,
                kontrollerar fakturor eller vill förstå hur mycket moms du
                betalar på en vara eller tjänst. Med en tydlig momsräknare
                blir prisbilden enklare att tolka.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="moms-exempel-rubrik">
            <h2
              id="moms-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så räknar du ut moms i praktiken
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig att du har ett pris exklusive moms på 800 kronor och
                vill räkna ut pris inklusive moms med 25 procent moms. Med en
                momsräknare skriver du in 800 kronor, väljer 25 procent och får
                direkt fram momsbeloppet 200 kronor och totalpriset 1 000
                kronor inklusive moms.
              </p>
              <p>
                Om du istället bara ser priset 1 000 kronor inklusive moms och
                vill veta hur mycket som är moms, anger du beloppet som
                inklusive moms. Momsräknaren räknar då baklänges och visar att
                nettopriset är 800 kronor och att 200 kronor är moms. På så
                sätt kan du alltid se hur stor del av priset som är skatt.
              </p>
              <p>
                Samma princip gäller även för andra momssatser, som 12 eller 6
                procent. En momsräknare gör det enkelt att växla mellan olika
                satser och snabbt förstå effekten på priset.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="moms-begransningar-rubrik">
            <h2
              id="moms-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En momsräknare visar normalt bara matematiska beräkningar
                utifrån den momssats du väljer. Den tar inte hänsyn till
                specialregler, undantag eller situationer där olika
                momssatser gäller på olika delar av samma köp. Den hanterar
                inte heller regler kring omvänd skattskyldighet eller handel
                med andra länder.
              </p>
              <p>
                Reglerna för moms kan vara komplicerade, särskilt för företag
                som handlar internationellt eller säljer olika typer av
                tjänster. Därför är det viktigt att se momsräknaren som ett
                stöd för själva uträkningen, inte som en fullständig
                skatterådgivning.
              </p>
              <p className="font-semibold">
                Vid osäkerhet om vilken momssats som gäller, eller hur moms ska
                hanteras i bokföring och deklaration, bör du alltid kontrollera
                informationen hos Skatteverket eller prata med en redovisningskonsult.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="moms-faq-rubrik">
            <h2
              id="moms-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om momsräknaren
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
          <section aria-labelledby="moms-relaterade-rubrik">
            <h2
              id="moms-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              För fler beräkningar inom företagande och privatekonomi kan du
              testa vår{" "}
              <a
                href="/rot-kalkylator"
                className="text-blue-700 hover:underline"
              >
                ROT-avdrag kalkylator
              </a>{" "}
              och{" "}
              <a
                href="/rut-kalkylator"
                className="text-blue-700 hover:underline"
              >
                RUT-kalkylator
              </a>{" "}
              för att räkna på skattereduktion. Du kan också använda{" "}
              <a
                href="/bolanekalkylator"
                className="text-blue-700 hover:underline"
              >
                bolånekalkylatorn
              </a>{" "}
              eller utforska fler{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-700 hover:underline"
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
