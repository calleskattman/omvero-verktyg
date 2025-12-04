// app/ranta-pa-ranta-kalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import RantaPaRantaTool from "@/components/tools/RantaPaRantaTool";

export const metadata: Metadata = {
  title: "Ränta-på-ränta kalkylator – räkna på ditt sparande",
  description:
    "Räkna på ränta på ränta och se hur ditt sparande kan växa över tid. Ränta-på-ränta kalkylatorn hjälper dig att uppskatta framtida värde på dina pengar baserat på insättning, avkastning och spartid.",
  alternates: {
    canonical: "https://omvero.se/ranta-pa-ranta-kalkylator",
  },
};

const faqQ1 =
  "Hur fungerar en ränta-på-ränta kalkylator?";
const faqA1 =
  "En ränta-på-ränta kalkylator hjälper dig att räkna på hur ditt sparande kan växa när avkastningen du får varje period återinvesteras. Du fyller i startbelopp, eventuell månadssparande, årlig ränta och spartid, och kalkylatorn visar ett uppskattat framtida värde med ränta på ränta-effekt.";

const faqQ2 =
  "Vad betyder ränta på ränta?";
const faqA2 =
  "Ränta på ränta betyder att du inte bara får avkastning på dina insatta pengar, utan även på den ränta du tidigare har tjänat. Effekten blir att sparandet växer snabbare ju längre tiden går, särskilt om du fortsätter att spara regelbundet.";

const faqQ3 =
  "Hur kan jag räkna ut ränta på ränta på mitt sparande?";
const faqA3 =
  "För att räkna ut ränta på ränta behöver du veta ditt startbelopp, hur mycket du sparar löpande, den årliga avkastningen och hur många år du sparar. En ränta-på-ränta kalkylator räknar ut detta åt dig automatiskt och visar hur pengarna kan utvecklas över tid.";

const faqQ4 =
  "Vilken ränta ska jag använda i ränta-på-ränta kalkylatorn?";
const faqA4 =
  "Du kan använda den historiska snitträntan eller den ränta du förväntar dig framöver. För aktiefonder används ofta 5–8 % per år som exempel, medan ett sparkonto kan ligga betydligt lägre. Kom ihåg att framtida avkastning aldrig är garanterad.";

const faqQ5 =
  "Tar ränta-på-ränta kalkylatorn hänsyn till skatt och avgifter?";
const faqA5 =
  "En enkel ränta-på-ränta kalkylator tar normalt inte hänsyn till skatt, avgifter eller inflation. Den visar en förenklad bild av hur sparandet kan växa. Vill du få en mer verklighetstrogen bild behöver du själv ta höjd för till exempel schablonskatt i ISK, fondavgifter eller courtage.";

const rantRantaFaqSchema = {
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

const rantRantaCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ränta-på-ränta kalkylator",
  description:
    "En ränta-på-ränta kalkylator där du kan räkna på hur ditt sparande växer över tid baserat på insättning, avkastning och spartid.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/ranta-pa-ranta-kalkylator",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function RantaPaRantaKalkylatorPage() {
  return (
    <ToolLayout
      title="Ränta-på-ränta kalkylator"
      description="Räkna på ränta på ränta och se hur ditt sparande kan växa över tid med hjälp av avkastning och regelbundet sparande."
      category="ekonomi"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="rant-ranta-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rantRantaFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="rant-ranta-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rantRantaCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator-sektion – placeholder tills verktyget är byggt */}
          <section
            aria-labelledby="ranta-pa-ranta-verktyg-rubrik"
          >
            <h2
              id="ranta-pa-ranta-verktyg-rubrik"
              className="sr-only"
            >
              Ränta-på-ränta kalkylator – beräkning
            </h2>

            <RantaPaRantaTool />

          </section>

          {/* Hur fungerar ränta-på-ränta kalkylatorn? */}
          <section
            aria-labelledby="ranta-pa-ranta-hur-fungerar"
          >
            <h2
              id="ranta-pa-ranta-hur-fungerar"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar en ränta-på-ränta kalkylator?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En ränta-på-ränta kalkylator hjälper dig att räkna ut hur
                sparande och investeringar kan växa när du får avkastning på
                både det du satt in och den ränta du tidigare tjänat. Du
                fyller i startbelopp, hur mycket du sparar löpande, den
                förväntade årliga räntan och hur många år du planerar att
                spara. Kalkylatorn räknar sedan fram ett uppskattat
                framtida värde med ränta på ränta-effekt.
              </p>
              <p>
                Principen bakom ränta på ränta är att du låter avkastningen
                stanna kvar och fortsätta arbeta åt dig. Istället för att ta
                ut avkastningen direkt, återinvesteras den och blir en del av
                kapitalet som i sin tur får avkastning. Ju längre tid du låter
                pengarna vara investerade, desto större blir effekten.
              </p>
              <p>
                Med en ränta-på-ränta kalkylator får du en tydligare känsla
                för hur kraftfull tiden är som faktor. Små belopp som
                investeras regelbundet kan växa till stora summor över många
                år, särskilt om avkastningen är hög och du håller nere avgifter
                och onödiga kostnader.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section
            aria-labelledby="ranta-pa-ranta-exempel-rubrik"
          >
            <h2
              id="ranta-pa-ranta-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så kan ränta på ränta påverka ditt sparande
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig att du sparar 1 000 kronor i månaden i en fond med
                en genomsnittlig avkastning på 7 % per år. Med en
                ränta-på-ränta kalkylator kan du räkna ut att ditt sparande
                efter 10 år kan vara värt runt ett sexsiffrigt belopp, och
                efter 20–30 år kan summan bli betydligt större. Större delen
                av slutbeloppet består då av ränta på ränta, inte bara dina
                egna insättningar.
              </p>
              <p>
                Om du istället sätter in ett engångsbelopp, till exempel
                50 000 kronor, och låter det stå med samma ränta kan du se
                hur värdet ökar år för år. Ränta-på-ränta kalkylatorn kan
                visa hur stor skillnad det blir om du låter pengarna jobba i
                5, 10, 20 eller 30 år.
              </p>
              <p>
                Exemplet visar också hur viktigt det är att börja tidigt.
                Ju tidigare du kommer igång, desto längre tid får ränta på
                ränta-effekten att verka – och desto större blir skillnaden
                jämfört med att börja spara sent i livet.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section
            aria-labelledby="ranta-pa-ranta-begransningar-rubrik"
          >
            <h2
              id="ranta-pa-ranta-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En ränta-på-ränta kalkylator bygger nästan alltid på
                förenklade antaganden. Den utgår vanligtvis från en jämn
                årlig avkastning och tar inte hänsyn till svängningar på
                börsen, avgifter, inflation eller skatt. Det betyder att
                verkligt utfall kan bli både högre och lägre än det som
                visas i kalkylen.
              </p>
              <p>
                När du räknar på ränta på ränta är det därför viktigt att se
                resultatet som en uppskattning – inte en garanti. Historisk
                avkastning är aldrig en garanti för framtida avkastning, och
                investeringar i aktier och fonder innebär alltid en risk för
                värdeminskning.
              </p>
              <p className="font-semibold">
                Använd ränta-på-ränta kalkylatorn som ett hjälpmedel för att
                förstå effekten av långsiktigt sparande, men fatta alltid
                beslut utifrån din egen ekonomi, risknivå och tidshorisont.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="ranta-pa-ranta-faq-rubrik">
            <h2
              id="ranta-pa-ranta-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om ränta-på-ränta kalkylatorn
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
          <section
            aria-labelledby="ranta-pa-ranta-relaterade-rubrik"
          >
            <h2
              id="ranta-pa-ranta-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Vill du räkna mer på din privatekonomi kan du också testa vår{" "}
              <a
                href="/bolanekalkylator"
                className="text-blue-800 underline hover:text-blue-900"
              >
                bolånekalkylator
              </a>{" "}
              och{" "}
              <a
                href="/amorteringskalkylator"
                className="text-blue-800 underline hover:text-blue-900"
              >
                amorteringskalkylator
              </a>{" "}
              när den är på plats. Under{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-800 underline hover:text-blue-900"
              >
                fler ekonomiska verktyg
              </a>{" "}
              hittar du även{" "}
              <a
                href="/momsraknare"
                className="text-blue-800 underline hover:text-blue-900"
              >
                momsräknare
              </a>{" "}
              och{" "}
              <a
                href="/rut-kalkylator"
                className="text-blue-800 underline hover:text-blue-900"
              >
                RUT-kalkylator
              </a>{" "}
              för att få bättre koll på vardagsekonomin.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
