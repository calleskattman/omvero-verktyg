// app/amorteringskalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import AmorteringskalkylatorTool from "@/components/tools/AmorteringskalkylatorTool";

export const metadata: Metadata = {
  title: "Amorteringskalkylator – räkna ut amortering på lån",
  description:
    "Räkna ut amortering på lån och se hur din skuld minskar över tid. Amorteringskalkylatorn hjälper dig att förstå månadskostnad, räntekostnad och amorteringskrav för bolån och andra lån.",
  alternates: {
    canonical: "https://omvero.se/amorteringskalkylator",
  },
};

const faqQ1 = "Vad är en amorteringskalkylator?";
const faqA1 =
  "En amorteringskalkylator hjälper dig att räkna ut hur mycket du behöver amortera på ett lån och hur skulden minskar över tid. Genom att ange lånebelopp, ränta och amorteringstid kan du se en uppskattad månadskostnad samt hur stor del som är ränta och hur stor del som är amortering.";

const faqQ2 = "Hur fungerar en amorteringskalkylator i praktiken?";
const faqA2 =
  "En amorteringskalkylator använder dina inmatade värden för lånebelopp, ränta och återbetalningstid för att räkna fram en ungefärlig amorteringsplan. I en förenklad modell kan kalkylatorn visa en uppskattad månadskostnad där ränta och amortering slås ihop. Mer avancerade versioner kan även visa hur skulden minskar månad för månad.";

const faqQ3 =
  "Vad är skillnaden mellan rak amortering och annuitetslån?";
const faqA3 =
  "Vid rak amortering betalar du samma amorteringsbelopp varje månad, medan räntekostnaden minskar i takt med att skulden blir mindre. I ett annuitetslån är totalbeloppet per månad ungefär detsamma under lånets löptid, men fördelningen mellan ränta och amortering ändras över tid. En amorteringskalkylator kan hjälpa dig att jämföra hur månadskostnaden påverkas av olika upplägg.";

const faqQ4 =
  "Hur kan jag använda en amorteringskalkylator för bolån?";
const faqA4 =
  "För bolån kan du använda en amorteringskalkylator för att uppskatta hur mycket du behöver amortera enligt amorteringskraven, samt hur olika amorteringsnivåer påverkar din månadskostnad. Genom att ändra amorteringstid och ränta kan du se hur snabbt lånet betalas av och hur mycket ränta du betalar totalt över tiden.";

const faqQ5 =
  "Hur tillförlitlig är en amorteringskalkylator jämfört med bankens uträkningar?";
const faqA5 =
  "En amorteringskalkylator ger en bra översikt och en förenklad bild av hur ditt lån kan utvecklas, men den ersätter inte bankens exakta beräkningar. Banker kan ha egna villkor, avgifter och amorteringsregler som påverkar din faktiska månadskostnad. Se därför kalkylatorn som ett uppskattat underlag och stäm av detaljer med din bank.";

const amorteringFaqSchema = {
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

const amorteringCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Amorteringskalkylator",
  description:
    "En amorteringskalkylator där du kan räkna ut amortering på lån och se hur skulden minskar över tid, samt få en uppskattning av månadskostnaden.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/amorteringskalkylator",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function AmorteringskalkylatorPage() {
  return (
    <ToolLayout
      title="Amorteringskalkylator"
      description="Räkna ut amortering på lån och se hur din skuld minskar över tid. En tydlig amorteringskalkyl ger bättre koll på din månadskostnad och återbetalning."
      category="ekonomi"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="amortering-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(amorteringFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="amortering-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(amorteringCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator-sektion – placeholder tills verktyget är byggt */}
          <section aria-labelledby="amortering-verktyg-rubrik">
            <h2 id="amortering-verktyg-rubrik" className="sr-only">
              Amorteringskalkylator – beräkning av amortering
            </h2>

            <AmorteringskalkylatorTool />
          </section>

          {/* Hur fungerar amorteringskalkylatorn? */}
          <section aria-labelledby="amortering-hur-fungerar-rubrik">
            <h2
              id="amortering-hur-fungerar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar en amorteringskalkylator?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En amorteringskalkylator utgår från tre grunduppgifter: hur
                mycket du lånar, vilken ränta du har och hur lång
                återbetalningstid du väljer. Utifrån detta kan kalkylatorn
                räkna fram en ungefärlig månadskostnad och ge en bild av hur
                skulden utvecklas över tid. Det gör det enklare att förstå hur
                olika amorteringsnivåer påverkar din ekonomi.
              </p>
              <p>
                I enklare modeller får du en uppskattad total månadskostnad
                där ränta och amortering är sammanlagda. I mer detaljerade
                amorteringskalkylatorer kan du även se hur stor andel av
                betalningen som är ränta i början av lånet och hur amorteringen
                ökar i takt med att skulden minskar, särskilt om du har rak
                amortering.
              </p>
              <p>
                Genom att justera parametrar som amorteringstid, extra
                amorteringar eller ändrad ränta kan du använda
                amorteringskalkylatorn för att simulera olika scenarier. Det
                hjälper dig att planera hur snabbt du vill bli skuldfri och hur
                mycket du är beredd att betala varje månad.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="amortering-exempel-rubrik">
            <h2
              id="amortering-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så påverkar amortering din månadskostnad
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig att du har ett lån på 1 000 000 kronor med 4 procent
                ränta och en återbetalningstid på 30 år. Med hjälp av en
                amorteringskalkylator kan du uppskatta en månadskostnad där en
                del är ränta och en del är amortering. För ett annuitetslån
                blir totalbeloppet per månad relativt jämnt, medan för rak
                amortering sjunker totalbeloppet över tid när räntekostnaden
                minskar.
              </p>
              <p>
                Om du väljer att korta amorteringstiden till exempelvis 20 år
                blir månadskostnaden högre, men lånet betalas av betydligt
                snabbare. En amorteringskalkylator gör det tydligt hur stor
                skillnaden blir i både månadskostnad och total räntekostnad
                över lånets löptid.
              </p>
              <p>
                Du kan också simulera extra amorteringar, till exempel att
                betala in ett större engångsbelopp. Då kan kalkylatorn visa hur
                mycket snabbare lånet blir återbetalt och hur mycket ränta du
                sparar genom att sänka skulden tidigare.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="amortering-begransningar-rubrik">
            <h2
              id="amortering-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En amorteringskalkylator baseras på förenklade antaganden om
                ränta, amorteringstid och betalningsintervall. I verkligheten
                kan räntan förändras över tid, särskilt om du har rörlig ränta
                eller bindningstider som löper ut. Det gör att den faktiska
                månadskostnaden kan avvika från den beräkning du ser i
                kalkylatorn.
              </p>
              <p>
                Banken kan också ha särskilda amorteringskrav, till exempel
                kopplade till belåningsgrad eller din inkomstnivå. Dessa
                detaljer syns inte alltid i en enkel amorteringskalkylator,
                utan måste kontrolleras i dina lånevillkor eller direkt med
                banken.
              </p>
              <p className="font-semibold">
                Använd amorteringskalkylatorn som ett planeringsverktyg för att
                förstå din lånesituation bättre, men fatta inte ekonomiska
                beslut enbart baserat på en förenklad kalkyl. Vid större
                beslut, som att ta nytt bolån eller lägga om befintliga lån,
                bör du alltid rådgöra med din bank eller en oberoende
                rådgivare.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="amortering-faq-rubrik">
            <h2
              id="amortering-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om amorteringskalkylatorn
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
          <section aria-labelledby="amortering-relaterade-rubrik">
            <h2
              id="amortering-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Vill du få en ännu bättre överblick över din boendekostnad kan du
              också använda vår{" "}
              <a
                href="/bolanekalkylator"
                className="text-blue-600 hover:underline"
              >
                bolånekalkylator
              </a>{" "}
              för att räkna på totala kostnaden för ditt bolån. Du kan även
              använda{" "}
              <a
                href="/ranta-pa-ranta-kalkylator"
                className="text-blue-600 hover:underline"
              >
                ränta-på-ränta kalkylatorn
              </a>{" "}
              för att se hur sparande kan växa över tid, eller utforska fler{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-600 hover:underline"
              >
                ekonomiska verktyg
              </a>{" "}
              på Omvero för att stärka din privatekonomi.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
