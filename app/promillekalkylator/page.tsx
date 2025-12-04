// app/promillekalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import PromilleTool from "@/components/tools/PromilleTool";

export const metadata: Metadata = {
  title: "Promillekalkylator – räkna ut din promillehalt",
  description:
    "Räkna ut en uppskattad promillehalt och alkoholpromille baserat på vikt, kön, tid och vad du har druckit. Promillekalkylatorn hjälper dig att räkna ut promille på ett enkelt sätt direkt i webbläsaren.",
  alternates: {
    canonical: "https://omvero.se/promillekalkylator",
  },
};

const faqQ1 =
  "Hur fungerar en promillekalkylator?";
const faqA1 =
  "En promillekalkylator använder en förenklad version av Widmarks formel där mängden alkohol i gram sätts i relation till din vikt, ditt kön och hur lång tid som gått sedan du började dricka. Genom att lägga ihop olika drycker och räkna om dem till gram alkohol får du en uppskattad promillehalt och alkoholpromille, inte ett exakt medicinskt värde.";

const faqQ2 =
  "Hur länge stannar alkoholen i kroppen enligt promillekalkylatorn?";
const faqA2 =
  "Promillekalkylatorn utgår från en schablon på ungefär 0,15 promille per timme i nedbrytning, vilket är ett vanligt riktvärde. I verkligheten kan alkoholen sitta kvar både kortare och längre tid beroende på till exempel hälsa, genetik, matintag och läkemedel. Se därför tiden som en grov uppskattning, inte en garanti.";

const faqQ3 =
  "Är resultatet från promillekalkylatorn pålitligt?";
const faqA3 =
  "Resultatet från promillekalkylatorn är en förenklad beräkning som ger en ungefärlig promillehalt. Den tar inte hänsyn till alla individuella faktorer och kan därför aldrig ersätta medicinska tester eller professionell bedömning. Använd kalkylatorn som en vägledning, inte som ett exakt svar.";

const faqQ4 =
  "Kan jag använda promillekalkylatorn för att veta om jag får köra bil?";
const faqA4 =
  "Nej. Du ska aldrig använda en promillekalkylator för att avgöra om du får köra bil eller inte. Även om promillekalkylatorn visar en låg promillehalt kan du fortfarande vara påverkad. Kör aldrig bil om du har druckit alkohol eller känner dig det minsta osäker.";

const faqQ5 =
  "Vad ska jag göra om jag misstänker alkoholförgiftning trots låg promillehalt?";
const faqA5 =
  "Vid misstanke om alkoholförgiftning eller allvarlig påverkan ska du alltid kontakta sjukvården eller ringa 112, oavsett vad promillekalkylatorn visar. En uppskattad promillehalt kan aldrig ersätta medicinsk hjälp, och symtom som medvetslöshet, kräkningar eller andningssvårigheter ska alltid tas på största allvar.";

const promilleFaqSchema = {
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

const promilleCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Promillekalkylator",
  description:
    "En promillekalkylator där du kan räkna ut en uppskattad promillehalt och alkoholpromille baserat på kön, vikt, tid och antal drycker.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/promillekalkylator",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function PromillekalkylatorPage() {
  return (
    <ToolLayout
      title="Promillekalkylator"
      description="Räkna ut en uppskattad promillehalt baserat på hur mycket du har druckit, din vikt, ditt kön och hur lång tid som har gått. Den här promillekalkylatorn visar ungefär när alkoholpromillen är som högst och hur den sjunker över tid."
      category="halsa"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="promille-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(promilleFaqSchema),
          }}
        />

        {/* Calculator / SoftwareApplication-schema */}
        <Script
          id="promille-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(promilleCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Verktyget */}
          <section aria-labelledby="promillekalkylator-verktyg-rubrik">
            <h2
              id="promillekalkylator-verktyg-rubrik"
              className="sr-only"
            >
              Promillekalkylator – beräkning
            </h2>
            <PromilleTool />
          </section>

          {/* Hur fungerar promillekalkylatorn? */}
          <section aria-labelledby="promillekalkylator-hur-fungerar">
            <h2
              id="promillekalkylator-hur-fungerar"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar promillekalkylatorn?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Den här promillekalkylatorn hjälper dig att räkna ut en
                uppskattad promillehalt genom att kombinera information om
                kön, vikt, antal drycker och hur lång tid du har druckit.
                Verktyget använder en förenklad version av Widmarks formel
                för att räkna ut alkoholpromille baserat på hur mycket alkohol
                du fått i dig i gram.
              </p>
              <p>
                För att räkna ut promille omvandlas först öl, vin och sprit till
                gram ren alkohol. Därefter delas alkoholen med en
                fördelningsfaktor som skiljer sig mellan män och kvinnor samt
                din kroppsvikt. På så sätt får du en uppskattning av både
                högsta promillehalt och ungefär hur promillen sjunker över
                tid. Tänk på att verkliga värden alltid kan skilja sig från
                beräkningen.
              </p>
              <p>
                Promillekalkylatorn visar alltså en grov uppskattning av din
                alkoholpromille – inte ett exakt mätvärde. Använd den som ett
                verktyg för att få en känsla för hur länge alkoholen kan
                sitta i kroppen, inte som ett facit.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="promillekalkylator-exempel-rubrik">
            <h2
              id="promillekalkylator-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så kan promillehalten se ut i praktiken
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig en person som väger 80 kg, är man och har druckit
                fyra 33 cl öl (4,5 %) under tre timmar. Promillekalkylatorn
                uppskattar då den högsta promillehalten till runt 0,8 ‰ kort
                efter att alkoholen har intagits och innan kroppen hunnit bryta
                ner så mycket.
              </p>
              <p>
                Eftersom kroppen bryter ner alkohol med ungefär 0,1–0,2
                promille per timme, sjunker promillehalten successivt. Efter
                några timmar kan den uppskattade promillen hamna runt
                0,3–0,4 ‰. Det är fortfarande över gränsen för rattfylleri,
                vilket visar hur försiktig man måste vara när man tolkar
                värdena.
              </p>
              <p>
                Exemplet visar att två personer med samma vikt och samma
                alkoholintag ändå kan få olika promillehalt i verkligheten.
                Promillekalkylatorn kan därför aldrig ersätta medicinsk
                testning eller professionell rådgivning, men den kan ge en
                tydlig fingervisning.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="promillekalkylator-begransningar-rubrik">
            <h2
              id="promillekalkylator-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Verktyget är en förenklad modell och kan inte ta hänsyn till
                alla faktorer som påverkar din promillehalt. Den tar till
                exempel inte hänsyn till leverfunktion, sjukdomar, genetik,
                hur snabbt du har druckit, hur mycket du har ätit eller
                eventuella läkemedel. Den verkliga alkoholpromillen kan därför
                vara både högre och lägre än vad kalkylatorn visar.
              </p>
              <p>
                I Sverige är den lagliga gränsen för rattfylleri 0,2 promille,
                och grovt rattfylleri från 1,0 promille. Även om
                promillekalkylatorn visar ett värde under 0,2 ‰ kan du ändå
                vara påverkad. Resultatet är en grov uppskattning och är
                inte medicinsk rådgivning.
              </p>
              <p className="font-semibold">
                Kör aldrig bil om du har druckit alkohol, oavsett vad
                promillekalkylatorn visar. Vid minsta tvekan är det alltid
                bättre att låta bilen stå.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="promillekalkylator-faq-rubrik">
            <h2
              id="promillekalkylator-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om promillekalkylatorn
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
          <section aria-labelledby="promillekalkylator-relaterade-rubrik">
            <h2
              id="promillekalkylator-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Vill du få bättre koll på din hälsa kan du även testa vår{" "}
              <a
                href="/bmi-raknare"
                className="text-blue-800 underline hover:text-blue-900"
              >
                BMI-räknare
              </a>{" "}
              och{" "}
              <a
                href="/kaloriforbrukning" // uppdatera till korrekt slug när MET-kalkylatorn är på plats
                className="text-blue-800 underline hover:text-blue-900"
              >
                kaloriförbränningskalkylator
              </a>{" "}
              för att se hur aktivitet och vikt hänger ihop. För ekonomiska
              beslut kring boende kan du också använda vår{" "}
              <a
                href="/bolanekalkylator"
                className="text-blue-800 underline hover:text-blue-900"
              >
                bolånekalkylator
              </a>{" "}
              och fler{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-800 underline hover:text-blue-900"
              >
                kalkylatorer inom ekonomi
              </a>{" "}
              och{" "}
              <a
                href="/verktyg/halsa"
                className="text-blue-800 underline hover:text-blue-900"
              >
                andra verktyg för hälsa
              </a>
              .
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
