// app/bolanekalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import { BolanekalkylatorTool } from "@/components/tools/BolanekalkylatorTool";

export const metadata: Metadata = {
  title: "Bolånekalkylator – räkna ut månadskostnad och ränta",
  description:
    "Räkna ut månadskostnad, räntekostnad och kvarvarande skuld för ditt bolån. Bolånekalkylatorn använder rak amortering och hjälper dig att jämföra olika räntor och amorteringsnivåer direkt i webbläsaren.",
  alternates: {
    canonical: "https://omvero.se/bolanekalkylator",
  },
};

// FAQ-schema
const loanFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hur fungerar en bolånekalkylator?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "En bolånekalkylator hjälper dig att räkna ut en ungefärlig månadskostnad baserat på lånebelopp, ränta och amortering. I den här bolånekalkylatorn använder vi rak amortering, vilket innebär att du betalar samma amorteringsbelopp varje månad medan räntekostnaden minskar i takt med att skulden blir lägre.",
      },
    },
    {
      "@type": "Question",
      name: "Hur noggrann är bolånekalkylatorn?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Bolånekalkylatorn ger en förenklad bild av din bolånekostnad baserat på oförändrad ränta och samma betalning varje månad. Verkliga kostnader påverkas av ränteförändringar, amorteringskrav, avgifter och andra villkor i ditt låneavtal. Se därför resultatet som en riktlinje, inte en exakt prognos.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jag använda bolånekalkylatorn för både rörlig och bunden ränta?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja, du kan använda bolånekalkylatorn oavsett om du har rörlig eller bunden ränta. Ange den räntenivå du vill räkna på, till exempel din aktuella ränta eller en nivå du vill testa inför en ränteförändring.",
      },
    },
    {
      "@type": "Question",
      name: "Vad är skillnaden mellan rak amortering och annuitetslån?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Vid rak amortering betalar du samma amorteringsbelopp varje månad, vilket gör att räntekostnaden minskar när skulden blir lägre. Det innebär att den totala månadskostnaden sjunker över tid. I ett annuitetslån är den totala månadskostnaden istället i huvudsak densamma varje månad, men fördelningen mellan ränta och amortering förändras över lånets löptid.",
      },
    },
    {
      "@type": "Question",
      name: "Hur mycket ska jag amortera på mitt bolån?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Hur mycket du bör amortera beror på din belåningsgrad, din ekonomi och vilka amorteringskrav som gäller för ditt bolån. Kalkylatorn kan hjälpa dig att se hur olika amorteringsnivåer påverkar månadskostnad, räntekostnad och skulden över tid, men individuella råd får du från din bank eller en oberoende rådgivare.",
      },
    },
  ],
};

// SoftwareApplication / Calculator-schema
const loanCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bolånekalkylator",
  description:
    "Bolånekalkylator där du kan räkna ut månadskostnad, räntekostnad och kvarvarande skuld för ditt bolån med rak amortering.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/bolanekalkylator",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function BolanekalkylatorPage() {
  return (
    <ToolLayout
      title="Bolånekalkylator"
      category="ekonomi"
      description="Räkna ut månadskostnaden för ditt bolån baserat på ränta, amortering och beräkningsperiod. Få en tydlig bild av hur din bolånekostnad och skuld utvecklas över tid."
    >
      <>
        {/* JSON-LD schema */}
        <Script
          id="loan-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(loanFaqSchema),
          }}
        />
        <Script
          id="loan-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(loanCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* (1) Verktyget */}
          <section aria-labelledby="bolan-verktyg-rubrik">
            <h2 id="bolan-verktyg-rubrik" className="sr-only">
              Bolånekalkylator – beräkning
            </h2>
            <BolanekalkylatorTool />
          </section>

          {/* (2) Hur fungerar bolånekalkylatorn? */}
          <section
            aria-labelledby="hur-fungerar-bolanekalkylatorn"
            className="space-y-4"
          >
            <h2
              id="hur-fungerar-bolanekalkylatorn"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar bolånekalkylatorn?
            </h2>
            <p className="text-sm text-slate-700">
              Den här bolånekalkylatorn utgår från tre huvuduppgifter: hur
              mycket du lånar, vilken ränta du betalar och hur mycket du
              amorterar varje år. Utifrån dessa värden räknar kalkylatorn ut
              både din månadskostnad och hur skulden utvecklas över tid. Det gör
              det enklare att förstå hur olika räntenivåer och
              amorteringsnivåer påverkar din privatekonomi.
            </p>
            <p className="text-sm text-slate-700">
              Modellen använder{" "}
              <span className="font-medium">rak amortering</span>. Det innebär
              att amorteringsbeloppet är detsamma varje månad medan
              räntekostnaden minskar i takt med att skulden blir lägre. Din
              totala månadskostnad är alltså högre i början av lånet och sjunker
              successivt. Kalkylatorn visar både första månads kostnad,
              totalkostnad över den valda perioden och hur mycket som är ränta
              respektive amortering.
            </p>
            <p className="text-sm text-slate-700">
              Du kan använda bolånekalkylatorn för att planera ett nytt bolån,
              inför en omförhandling eller när du vill se effekten av att ändra
              din amorteringstakt. Genom att justera ränta, amorteringsnivå och
              beräkningsperiod kan du snabbt jämföra olika scenarier och se hur
              mycket du betalar i ränta samt hur mycket skulden minskar år för
              år.
            </p>
          </section>

          {/* (3) Exempel: så kan bolånekostnaden se ut */}
          <section
            aria-labelledby="exempel-bolanekostnad"
            className="space-y-4"
          >
            <h2
              id="exempel-bolanekostnad"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så kan din bolånekostnad se ut
            </h2>
            <p className="text-sm text-slate-700">
              Anta att du har ett bolån på{" "}
              <span className="font-medium">2&nbsp;500&nbsp;000 kr</span> med en
              ränta på <span className="font-medium">4&nbsp;%</span> och väljer
              att amortera <span className="font-medium">2&nbsp;%</span> av
              lånebeloppet per år. Det innebär en årlig amortering på
              50&nbsp;000 kr, eller drygt 4&nbsp;167 kr per månad.
            </p>
            <p className="text-sm text-slate-700">
              Första månaden betalar du då både amortering och ränta på hela
              lånebeloppet. Räntekostnaden är som högst i början och minskar
              sedan i takt med att skulden sjunker. Efter några år utgör
              amorteringsdelen en större andel av din månadskostnad, samtidigt
              som den totala månadskostnaden successivt sjunker.
            </p>
            <p className="text-sm text-slate-700">
              Med hjälp av bolånekalkylatorn kan du snabbt se hur din
              månadskostnad påverkas om du till exempel:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>höjer eller sänker räntan med någon procentenhet</li>
              <li>ökar amorteringen från till exempel 1&nbsp;% till 3&nbsp;%</li>
              <li>förlänger eller förkortar den period du vill räkna på</li>
            </ul>
            <p className="text-sm text-slate-700">
              Genom att testa olika kombinationer blir det tydligare hur mycket
              du betalar i ränta över tid och hur snabbt du kan minska din
              bolåneskuld om du väljer att amortera mer.
            </p>
          </section>

          {/* (4) Fördjupning / tabell */}
          <section
            aria-labelledby="fordjupning-bolanekalkylator"
            className="space-y-4"
          >
            <h2
              id="fordjupning-bolanekalkylator"
              className="text-xl font-semibold text-slate-900"
            >
              Fördjupning: hur påverkar ränta och amortering ditt bolån?
            </h2>
            <p className="text-sm text-slate-700">
              När du jämför bolån är det lätt att fokusera på räntan, men
              amorteringen har minst lika stor betydelse för hur din ekonomi
              utvecklas. Högre amortering innebär högre månadskostnad på kort
              sikt, men lägre skuldsättning och mindre räntekostnad på längre
              sikt.
            </p>
            <div className="overflow-x-auto text-sm">
              <table className="min-w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-2 pr-4 text-left font-medium text-slate-700">
                      Scenario
                    </th>
                    <th className="py-2 pr-4 text-left font-medium text-slate-700">
                      Ränta
                    </th>
                    <th className="py-2 pr-4 text-left font-medium text-slate-700">
                      Amortering per år
                    </th>
                    <th className="py-2 pr-4 text-left font-medium text-slate-700">
                      Månadskostnad första året*
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-slate-700">
                      Lågt amorteringstakt
                    </td>
                    <td className="py-2 pr-4 text-slate-700">4 %</td>
                    <td className="py-2 pr-4 text-slate-700">1 %</td>
                    <td className="py-2 pr-4 text-slate-700">
                      Lägre månadskostnad men skulden minskar långsamt.
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-slate-700">
                      Normal amortering
                    </td>
                    <td className="py-2 pr-4 text-slate-700">4 %</td>
                    <td className="py-2 pr-4 text-slate-700">2 %</td>
                    <td className="py-2 pr-4 text-slate-700">
                      Högre månadskostnad men snabbare skuldminskning.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-slate-700">
                      Hög amortering
                    </td>
                    <td className="py-2 pr-4 text-slate-700">4 %</td>
                    <td className="py-2 pr-4 text-slate-700">3 %</td>
                    <td className="py-2 pr-4 text-slate-700">
                      Hög månadskostnad på kort sikt men klart lägre ränta över
                      tid.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">
              *Exemplen är förenklade och utgår från ett bolån med rak
              amortering. Använd bolånekalkylatorn för att se exakta belopp för
              dina egna värden.
            </p>
          </section>

          {/* (5) Begränsningar och saker att tänka på */}
          <section
            aria-labelledby="begransningar-bolanekalkylator"
            className="space-y-4"
          >
            <h2
              id="begransningar-bolanekalkylator"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <p className="text-sm text-slate-700">
              Resultaten från bolånekalkylatorn är förenklade och bygger på att
              räntan är oförändrad under hela perioden. I verkligheten kan både
              räntan, dina inkomster och dina boendekostnader förändras över
              tid. Det kan också tillkomma avgifter, till exempel uppläggnings-
              och aviavgifter, som inte ingår i beräkningen.
            </p>
            <p className="text-sm text-slate-700">
              Dessutom finns det lagstadgade amorteringskrav och individuella
              regler hos olika banker som påverkar hur mycket du måste amortera
              på ditt bolån. Kalkylatorn tar inte hänsyn till sådana regler, utan
              visar en generell kostnadsbild baserad på de värden du själv
              anger.
            </p>
            <p className="text-sm text-slate-700">
              Använd därför bolånekalkylatorn som ett planeringsverktyg för att
              förstå hur din bolånekostnad kan se ut, men basera inte större
              ekonomiska beslut enbart på resultatet. Inför bostadsköp, lån eller
              omförhandling bör du alltid stämma av med din bank eller en
              oberoende rådgivare.
            </p>
          </section>

          {/* (6) FAQ */}
          <section
            aria-labelledby="vanliga-fragor-bolanekalkylator"
            className="space-y-4"
          >
            <h2
              id="vanliga-fragor-bolanekalkylator"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om bolånekalkylatorn
            </h2>

            <article className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900">
                Hur fungerar en bolånekalkylator?
              </h3>
              <p className="text-sm text-slate-700">
                En bolånekalkylator hjälper dig att räkna ut en ungefärlig
                månadskostnad baserat på lånebelopp, ränta och amortering. I den
                här bolånekalkylatorn använder vi rak amortering, vilket innebär
                att du betalar samma amorteringsbelopp varje månad medan
                räntekostnaden minskar i takt med att skulden blir lägre.
              </p>
            </article>

            <article className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900">
                Hur noggrann är bolånekalkylatorn?
              </h3>
              <p className="text-sm text-slate-700">
                Bolånekalkylatorn ger en förenklad bild av din bolånekostnad
                baserat på oförändrad ränta och samma betalning varje månad.
                Verkliga kostnader påverkas av ränteförändringar,
                amorteringskrav, avgifter och andra villkor i ditt låneavtal. Se
                därför resultatet som en riktlinje, inte en exakt prognos.
              </p>
            </article>

            <article className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900">
                Kan jag använda bolånekalkylatorn för både rörlig och bunden
                ränta?
              </h3>
              <p className="text-sm text-slate-700">
                Ja, du kan använda bolånekalkylatorn oavsett om du har rörlig
                eller bunden ränta. Ange den räntenivå du vill räkna på, till
                exempel din aktuella ränta eller en nivå du vill testa inför en
                ränteförändring.
              </p>
            </article>

            <article className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900">
                Vad är skillnaden mellan rak amortering och annuitetslån?
              </h3>
              <p className="text-sm text-slate-700">
                Vid rak amortering betalar du samma amorteringsbelopp varje
                månad, vilket gör att räntekostnaden minskar när skulden blir
                lägre. Det innebär att den totala månadskostnaden sjunker över
                tid. I ett annuitetslån är den totala månadskostnaden istället i
                huvudsak densamma varje månad, men fördelningen mellan ränta och
                amortering förändras över lånets löptid.
              </p>
            </article>

            <article className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900">
                Hur mycket ska jag amortera på mitt bolån?
              </h3>
              <p className="text-sm text-slate-700">
                Hur mycket du bör amortera beror på din belåningsgrad, din
                ekonomi och vilka amorteringskrav som gäller för ditt bolån.
                Kalkylatorn kan hjälpa dig att se hur olika amorteringsnivåer
                påverkar månadskostnad, räntekostnad och skulden över tid, men
                individuella råd får du från din bank eller en oberoende
                rådgivare.
              </p>
            </article>
          </section>

          {/* (7) Relaterade verktyg */}
          <section
            aria-labelledby="relaterade-verktyg-bolanekalkylator"
            className="space-y-3"
          >
            <h2
              id="relaterade-verktyg-bolanekalkylator"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="text-sm text-slate-700">
              Vill du få en ännu bättre överblick över din boendeekonomi kan du
              också använda vår{" "}
              <a
                href="/amorteringskalkylator"
                className="text-blue-700 underline hover:text-blue-800"
              >
                amorteringskalkylator
              </a>{" "}
              för att se hur snabbt ett lån kan bli återbetalt med en viss
              månadsbetalning. Du kan även testa{" "}
              <a
                href="/ranta-pa-ranta-kalkylator"
                className="text-blue-700 underline hover:text-blue-800"
              >
                ränta-på-ränta kalkylatorn
              </a>{" "}
              för att se hur ditt sparande kan växa över tid, eller fler{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-700 underline hover:text-blue-800"
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
