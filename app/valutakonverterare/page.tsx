// app/valutakonverterare/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import ValutakonverterareTool from "@/components/tools/ValutakonverterareTool";

export const metadata: Metadata = {
  title: "Valutakonverterare – växla och räkna om mellan olika valutor",
  description:
    "Valutakonverterare med aktuella växelkurser. Räkna om belopp mellan över 30 valutor och se vad köp, resor och överföringar kostar i din egen valuta.",
  alternates: {
    canonical: "https://omvero.se/valutakonverterare",
  },
};

// FAQ-frågor och svar – används både i UI och schema
const faqQ1 = "Vad är en valutakonverterare?";
const faqA1 =
  "En valutakonverterare är ett verktyg där du kan räkna om ett belopp från en valuta till en annan. Du anger vilket belopp du vill växla, väljer från-valuta och till-valuta, och får direkt se hur mycket beloppet motsvarar i den andra valutan. Det är användbart vid resor, onlineköp, handel eller när du jämför priser mellan länder.";

const faqQ2 = "Hur fungerar en valutakonverterare i praktiken?";
const faqA2 =
  "En valutakonverterare använder en växelkurs för att räkna om ett belopp mellan två valutor. I sin enklaste form multipliceras eller divideras beloppet med aktuell växelkurs. Om kursen till exempel är 11,50 kronor per euro multiplicerar du antalet euro med 11,50 för att få beloppet i svenska kronor. Verktyget automatiserar detta så att du slipper räkna själv och alltid använder en uppdaterad kurs.";

const faqQ3 = "Hur ofta uppdateras valutakurserna i valutakonverteraren?";
const faqA3 =
  "Växelkurserna uppdateras automatiskt en gång per dag. Kurserna bygger på Europeiska centralbankens dagliga referenskurser och hämtas via en pålitlig tredjepartsleverantör. Det gör att du får en aktuell mittkurs att utgå från när du räknar om belopp mellan olika valutor.";

const faqQ4 = "Hur tillförlitliga är växelkurserna i valutakonverteraren?";
const faqA4 =
  "Växelkurserna baseras på Europeiska centralbankens referenskurser, vilket är en av de mest använda officiella källorna i Europa. De representerar ungefärliga mittkurser på valutamarknaden. Den faktiska kurs du får hos en bank, kortutgivare eller växlingstjänst kan ändå skilja sig något på grund av påslag och avgifter.";

const faqQ5 =
  "Varför skiljer sig växelkursen ibland från vad banken tar betalt?";
const faqA5 =
  "Skillnaden beror ofta på att banker och kortutgivare lägger på ett påslag utöver den rena växelkursen, till exempel som ett valutapåslag på kortköp utomlands eller vid kontantuttag. En valutakonverterare visar vanligtvis en grundläggande kurs utan dessa påslag. Därför kan den faktiska kostnaden bli något högre än vad en enkel valutaomvandlare visar.";

const faqQ6 =
  "Kan jag använda valutakonverteraren för att planera reskassan?";
const faqA6 =
  "Ja, en valutakonverterare är ett bra stöd när du planerar reskassan. Du kan uppskatta hur mycket mat, hotell, transporter eller aktiviteter kostar i svenska kronor innan du reser. Tänk dock på att priser och växelkurs kan ändras, och att avgifter kan tillkomma vid kortbetalning eller kontantuttag. Använd därför alltid en viss säkerhetsmarginal.";

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
    {
      "@type": "Question",
      name: faqQ6,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqA6,
      },
    },
  ],
};

const valutaCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Valutakonverterare",
  description:
    "Valutakonverterare med aktuella, dagligen uppdaterade växelkurser där du kan räkna om belopp mellan över 30 valutor och se vad saker kostar i din egen valuta.",
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
      description="Räkna om belopp mellan över 30 valutor med aktuella växelkurser. Se hur mycket du faktiskt betalar vid köp, resor och handel över landsgränser."
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
          {/* Verktyget */}
          <section aria-labelledby="valuta-verktyg-rubrik">
            <h2 id="valuta-verktyg-rubrik" className="sr-only">
              Valutakonverterare – valutaomvandling mellan olika valutor
            </h2>
            <ValutakonverterareTool />
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
                Den här valutakonverteraren stöder över 30 vanliga valutor, som
                till exempel SEK, EUR, USD, GBP, NOK, DKK, CHF, INR, CAD, AUD
                och CNY. Det gör att du snabbt kan jämföra vad ett pris eller en
                kostnad motsvarar i olika valutor – både när du växlar kronor
                till utländsk valuta och när du vill se vad ett utländskt pris
                blir i svenska kronor.
              </p>
              <p>
                En tydlig valutakonverterare gör det enkelt att byta håll på
                beräkningen, så att du både kan räkna från svenska kronor till
                utländsk valuta och tvärtom. Det gör verktyget flexibelt i
                vardagen, oavsett om du planerar resor, handlar online eller
                vill jämföra priser mellan länder.
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
                svenska kronor motsvarar i amerikanska dollar. Med
                valutakonverteraren anger du 1 000 SEK som belopp, väljer SEK
                som från-valuta och USD som till-valuta. Verktyget räknar då om
                beloppet baserat på aktuell växelkurs och visar en uppskattning
                av summan i dollar.
              </p>
              <p>
                På samma sätt kan du vända på det och skriva in ett pris i euro
                eller dollar från en utländsk webbutik för att se vad det
                motsvarar i svenska kronor. Det hjälper dig att avgöra om ett
                erbjudande verkligen är fördelaktigt jämfört med att handla i
                Sverige, särskilt när du tar höjd för frakt och eventuella
                avgifter.
              </p>
              <p>
                För företagare som handlar med kunder eller leverantörer i andra
                länder kan en valutakonverterare underlätta när offerter,
                prislistor eller fakturor ska översättas till olika valutor. En
                snabb omräkning ger bättre koll på marginaler och prissättning.
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
                Den här valutakonverteraren använder dagliga referenskurser från
                Europeiska centralbanken (ECB), hämtade via den kostnadsfria
                tjänsten open.er-api.com. Kurserna uppdateras automatiskt en
                gång per dag och motsvarar ungefärliga mittkurser på
                valutamarknaden.
              </p>
              <p>
                En valutakonverterare visar normalt en förenklad kurs utan att
                ta hänsyn till alla avgifter som kan tillkomma. Vid köp
                utomlands kan kortutgivare ta ut valutapåslag, och vid
                kontantuttag eller växling kan både fasta och rörliga avgifter
                tillkomma. Det gör att den verkliga kostnaden blir något högre
                än den rena valutaomräkningen.
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

              <article>
                <h3 className="font-semibold">{faqQ6}</h3>
                <p>{faqA6}</p>
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
              För fler smarta omvandlingar kan du använda vår{" "}
              <a
                href="/km-till-miles-kalkylator"
                className="text-blue-800 underline hover:text-blue-900"
              >
                km till miles-kalkylator
              </a>{" "}
              för att konvertera avstånd, eller utforska fler{" "}
              <a
                href="/verktyg/konvertering"
                className="text-blue-800 underline hover:text-blue-900"
              >
                verktyg för konvertering
              </a>{" "}
              på Omvero. Vill du samtidigt hålla koll på kostnader kan du även
              testa våra{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-800 underline hover:text-blue-900"
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
