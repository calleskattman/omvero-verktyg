// app/valutakonverterare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Valutakonverterare – växla och räkna om mellan olika valutor",
  description:
    "Använd vår valutakonverterare för att räkna om belopp mellan olika valutor. Se hur mycket en valuta motsvarar i en annan och få en tydligare bild av kostnader vid köp, resor och handel.",
  alternates: {
    canonical: "https://omvero.se/valutakonverterare",
  },
};

const faqQ1 = "Vad är en valutakonverterare?";
const faqA1 =
  "En valutakonverterare är ett verktyg där du kan räkna om ett belopp från en valuta till en annan. Du anger vilket belopp du vill växla, väljer från-valuta och till-valuta, och får direkt se hur mycket beloppet motsvarar i den andra valutan. Det är användbart vid resor, onlineköp, handel eller när du jämför priser mellan länder.";

const faqQ2 = "Hur fungerar en valutakonverterare i praktiken?";
const faqA2 =
  "En valutakonverterare använder en växelkurs för att räkna om ett belopp mellan två valutor. I sin enklaste form multipliceras eller divideras beloppet med aktuell växelkurs. Om kursen till exempel är 11,50 kronor per euro multiplicerar du antalet euro med 11,50 för att få beloppet i svenska kronor. Verktyget automatiserar detta så du slipper räkna själv.";

const faqQ3 = "Använder valutakonverteraren realtidskurser?";
const faqA3 =
  "Det beror på hur valutakonverteraren är uppbyggd. Vissa verktyg använder realtidskurser från banker eller valutamarknaden, medan andra uppdateras några gånger per dag eller använder avrundade kurser. För exakta omräkningar, till exempel vid större affärer, är det alltid bra att kontrollera aktuell kurs hos bank eller betaltjänst.";

const faqQ4 =
  "Varför skiljer sig växelkursen ibland från vad banken tar betalt?";
const faqA4 =
  "Skillnaden beror ofta på att banker och kortutgivare lägger på ett påslag utöver den rena växelkursen, till exempel som ett valutapåslag på kortköp utomlands. En valutakonverterare visar vanligtvis en grundläggande kurs utan dessa påslag. Därför kan den faktiska kostnaden bli något högre än vad en enkel valutaomvandlare visar.";

const faqQ5 =
  "Kan jag använda valutakonverteraren för att planera reskassan?";
const faqA5 =
  "Ja, en valutakonverterare är ett bra stöd när du planerar reskassan. Du kan uppskatta hur mycket mat, hotell, transporter eller aktiviteter kostar i svenska kronor innan du reser. Tänk dock på att priser och växelkurs kan ändras, och att avgifter kan tillkomma vid kortbetalning eller kontantuttag.";

const valutaFaqSchema = {
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

const valutaCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Valutakonverterare",
  description:
    "En valutakonverterare där du kan räkna om belopp mellan olika valutor och få en tydligare bild av vad saker kostar i din egen valuta.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/valutakonverterare",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function ValutakonverterarePage() {
  return (
    <ToolLayout
      title="Valutakonverterare"
      description="Räkna om belopp mellan olika valutor och se hur mycket pengar du faktiskt betalar vid köp, resor och handel över landsgränser."
      category="konvertering"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="valuta-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(valutaFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="valuta-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(valutaCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator-sektion – placeholder tills verktyget är byggt */}
          <section aria-labelledby="valuta-verktyg-rubrik">
            <h2 id="valuta-verktyg-rubrik" className="sr-only">
              Valutakonverterare – valutaomvandling mellan olika valutor
            </h2>

            <div className="rounded-lg border border-slate-200 bg-white p-4 md:p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Valutakonverteraren kommer snart
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Snart kan du använda vår valutakonverterare för att räkna om
                belopp mellan olika valutor på ett enkelt sätt. Tanken är att
                du ska kunna välja från-valuta, till-valuta och belopp, och
                direkt se en uppskattning av vad pengarna motsvarar i den andra
                valutan.
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Verktyget kommer att vara användbart både inför resor, vid
                onlineköp i utländska webbutiker och när du jämför priser mellan
                olika marknader. Redan nu kan du läsa mer nedan om hur
                valutakonvertering fungerar och vad du bör tänka på.
              </p>
            </div>
          </section>

          {/* Hur fungerar valutakonverteraren? */}
          <section aria-labelledby="valuta-hur-fungerar-rubrik">
            <h2
              id="valuta-hur-fungerar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar en valutakonverterare?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En valutakonverterare använder växelkurser för att räkna om
                belopp mellan olika valutor. I grunden handlar det om enkel
                matematik: beloppet i från-valutan multipliceras eller
                divideras med växelkursen för att få beloppet i till-valutan.
                Genom att automatisera detta slipper du själv hålla reda på
                formler och uppdaterade kurser.
              </p>
              <p>
                Många valutakonverterare använder mittkurser eller ungefärliga
                marknadskurser som uppdateras regelbundet. Dessa kan skilja sig
                något från den kurs du faktiskt får hos bank eller kortutgivare,
                men ger en bra fingervisning om hur mycket ett visst belopp
                motsvarar i en annan valuta.
              </p>
              <p>
                En tydlig valutakonverterare gör det enkelt att byta håll på
                beräkningen, så att du både kan räkna från svenska kronor till
                utländsk valuta och tvärtom. Det gör verktyget flexibelt i
                vardagen, oavsett om du planerar resor eller jämför priser
                online.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="valuta-exempel-rubrik">
            <h2
              id="valuta-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så kan du använda valutakonverteraren
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig att du ska resa till USA och vill veta hur mycket 1 000
                svenska kronor motsvarar i amerikanska dollar. Med en
                valutakonverterare anger du 1 000 SEK som belopp, väljer SEK som
                från-valuta och USD som till-valuta. Verktyget räknar då om
                beloppet baserat på aktuell växelkurs och visar en uppskattning
                av summan i dollar.
              </p>
              <p>
                På samma sätt kan du vända på det och skriva in ett pris i
                euro eller dollar från en utländsk webbutik för att se vad det
                motsvarar i svenska kronor. Det hjälper dig att avgöra om ett
                erbjudande verkligen är fördelaktigt jämfört med att handla i
                Sverige, särskilt när du tar höjd för frakt och eventuella
                avgifter.
              </p>
              <p>
                För företagare som handlar med kunder eller leverantörer i andra
                länder kan en valutakonverterare underlätta när offerter,
                prislistor eller fakturor ska översättas till olika valutor.
                En snabb omräkning ger bättre koll på marginaler och
                prissättning.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="valuta-begransningar-rubrik">
            <h2
              id="valuta-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En valutakonverterare visar normalt en förenklad kurs utan att
                ta hänsyn till alla avgifter som kan tillkomma. Vid köp utomlands
                kan kortutgivare ta ut valutapåslag, och vid kontantuttag eller
                växling kan både fasta och rörliga avgifter tillkomma. Det gör
                att den verkliga kostnaden blir något högre än den rena
                valutaomräkningen.
              </p>
              <p>
                Växelkurser förändras också löpande under dagen. Det betyder att
                en beräkning du gör på morgonen inte nödvändigtvis stämmer exakt
                när du genomför ett köp senare på dagen. Vid större affärer kan
                även skillnaden mellan köp- och säljkurs påverka utfallet.
              </p>
              <p className="font-semibold">
                Använd valutakonverteraren som ett stöd för att få en rimlig
                uppskattning, men räkna alltid med viss marginal och kontrollera
                detaljerna hos din bank eller betaltjänst om du behöver exakta
                uppgifter.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="valuta-faq-rubrik">
            <h2
              id="valuta-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om valutakonverteraren
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
          <section aria-labelledby="valuta-relaterade-rubrik">
            <h2
              id="valuta-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              För fler smarta omvandlingar kan du framöver använda vår{" "}
              <a
                href="/km-till-miles-kalkylator"
                className="text-blue-600 hover:underline"
              >
                km till miles-kalkylator
              </a>{" "}
              för att konvertera avstånd, eller utforska fler{" "}
              <a
                href="/verktyg/konvertering"
                className="text-blue-600 hover:underline"
              >
                verktyg för konvertering
              </a>{" "}
              på Omvero. Vill du samtidigt hålla koll på kostnader kan du även
              testa våra{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-600 hover:underline"
              >
                ekonomiska kalkylatorer
              </a>{" "}
              för att få en bättre helhetsbild.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
