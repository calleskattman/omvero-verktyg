// app/rut-kalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import RutTool from "@/components/tools/RutTool";


export const metadata: Metadata = {
  title: "RUT-kalkylator – räkna ut RUT-avdrag",
  description:
    "Räkna ut RUT-avdraget för hushållsnära tjänster och se vad du betalar efter skattereduktion. RUT-kalkylatorn gör det enkelt att beräkna kostnaden för städning, barnpassning, trädgårdsarbete och andra tjänster.",
  alternates: {
    canonical: "https://omvero.se/rut-kalkylator",
  },
};

const faqQ1 = "Vad är en RUT-kalkylator?";
const faqA1 =
  "En RUT-kalkylator hjälper dig att räkna ut hur mycket skattereduktion du kan få för hushållsnära tjänster enligt RUT-avdraget. Genom att ange arbetskostnad, typ av tjänst och om ni är en eller två personer som delar på avdraget kan du se både RUT-avdragets storlek och vad du betalar efter avdrag.";

const faqQ2 = "Hur fungerar RUT-avdraget i Sverige?";
const faqA2 =
  "RUT-avdraget är en skattereduktion för hushållsnära tjänster som till exempel städning, barnpassning, tvätt, flyttstädning och trädgårdsarbete. Du får normalt dra av 50 procent av arbetskostnaden upp till ett visst maxbelopp per år. Företaget som utför tjänsten gör avdraget direkt på fakturan och ansöker sedan om utbetalning från Skatteverket.";

const faqQ3 = "Hur mycket kan jag få i RUT-avdrag per år?";
const faqA3 =
  "Hur mycket RUT-avdrag du kan få per år beror på din ålder och vilka andra skattereduktioner du använder, till exempel ROT-avdrag. Taket för RUT-avdraget är högre för personer över en viss ålder. En RUT-kalkylator kan hjälpa dig att uppskatta avdraget, men för exakta regler behöver du alltid kontrollera aktuella belopp hos Skatteverket.";

const faqQ4 =
  "Hur räknar jag ut vad jag betalar efter RUT-avdrag?";
const faqA4 =
  "För att räkna ut vad du betalar efter RUT-avdrag tar du arbetskostnaden inklusive moms och multiplicerar den med den del som återstår efter avdraget, ofta 50 procent. En RUT-kalkylator gör detta automatiskt och visar både priset före avdrag, storleken på RUT-avdraget och slutpriset på fakturan.";

const faqQ5 =
  "Tar RUT-kalkylatorn hänsyn till maxbelopp och tidigare RUT-avdrag?";
const faqA5 =
  "En enkel RUT-kalkylator visar normalt hur stort avdraget blir på en enskild tjänst utifrån arbetskostnaden. Den tar ofta inte hänsyn till hur mycket RUT-avdrag du redan utnyttjat under året eller hur andra avdrag påverkar ditt maxbelopp. För fullständig kontroll bör du logga in hos Skatteverket och kontrollera hur mycket RUT-utrymme du har kvar.";

const rutFaqSchema = {
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

const rutCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RUT-kalkylator",
  description:
    "En RUT-kalkylator där du kan räkna ut skattereduktion för hushållsnära tjänster och se vad du betalar efter RUT-avdrag.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://omvero.se/rut-kalkylator",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function RutKalkylatorPage() {
  return (
    <ToolLayout
      title="RUT-kalkylator"
      description="Räkna ut RUT-avdraget för hushållsnära tjänster och se vad du betalar efter skattereduktion för till exempel städning, barnpassning och trädgårdsarbete."
      category="ekonomi"
    >
      <>
        {/* FAQ-schema */}
        <Script
          id="rut-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rutFaqSchema),
          }}
        />

        {/* SoftwareApplication-schema */}
        <Script
          id="rut-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rutCalculatorSchema),
          }}
        />

        <div className="space-y-10">
          {/* Kalkylator-sektion – placeholder tills verktyget är byggt */}
          <section aria-labelledby="rut-verktyg-rubrik">
            <h2 id="rut-verktyg-rubrik" className="sr-only">
              RUT-kalkylator – beräkning av RUT-avdrag
            </h2>

            <RutTool />
          </section>

          {/* Hur fungerar RUT-kalkylatorn? */}
          <section aria-labelledby="rut-hur-fungerar-rubrik">
            <h2
              id="rut-hur-fungerar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Hur fungerar en RUT-kalkylator?
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En RUT-kalkylator hjälper dig att räkna ut RUT-avdraget genom
                att utgå från arbetskostnaden för en hushållsnära tjänst.
                Kalkylatorn använder den aktuella procentsatsen för RUT-avdrag,
                vanligtvis 50 procent av arbetskostnaden, för att visa hur
                mycket du får i skattereduktion och vad slutpriset blir efter
                avdraget.
              </p>
              <p>
                Du fyller normalt i priset för arbetet inklusive moms, och
                anger om det är en eller två personer som ska utnyttja
                avdraget. RUT-kalkylatorn kan då visa hur RUT-avdraget fördelas
                och hur stor del som hamnar på fakturan. På så sätt blir det
                enklare att jämföra offerter och planera kostnaden för olika
                tjänster.
              </p>
              <p>
                Själva ansökan om RUT-avdrag görs av företaget som utför
                tjänsten. De gör avdraget direkt på fakturan och ansöker sedan
                om utbetalning från Skatteverket. Med en RUT-kalkylator får du
                ändå en tydlig uppskattning av hur mycket du tjänar på att
                använda RUT-avdraget.
              </p>
            </div>
          </section>

          {/* Exempel */}
          <section aria-labelledby="rut-exempel-rubrik">
            <h2
              id="rut-exempel-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Exempel: så påverkar RUT-avdraget din kostnad
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                Tänk dig att du beställer hemstädning för 2 000 kronor inklusive
                moms i arbetskostnad. Med RUT-avdrag på 50 procent blir
                skattereduktionen 1 000 kronor. RUT-kalkylatorn skulle i detta
                fall visa att du betalar 1 000 kronor på fakturan, medan
                resterande del av arbetskostnaden täcks av skattereduktionen.
              </p>
              <p>
                Om ni är två personer i hushållet som båda har utrymme kvar för
                RUT-avdrag kan avdraget delas mellan er. Ni kan till exempel
                stå på varsin del av fakturorna under året för att utnyttja
                avdraget så effektivt som möjligt. En RUT-kalkylator kan hjälpa
                till att illustrera hur fördelningen påverkar kostnaden.
              </p>
              <p>
                Exemplet visar hur stor skillnad RUT-avdraget kan göra på
                priset för hushållsnära tjänster. Det är dock viktigt att
                komma ihåg att det finns ett maxbelopp per år och att andra
                skattereduktioner, som ROT, kan påverka hur mycket utrymme du
                har kvar.
              </p>
            </div>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="rut-begransningar-rubrik">
            <h2
              id="rut-begransningar-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Begränsningar och saker att tänka på
            </h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>
                En RUT-kalkylator visar en förenklad bild av hur RUT-avdraget
                fungerar. Den tar normalt inte hänsyn till hur mycket RUT- och
                ROT-avdrag du redan har utnyttjat under året, eller hur din
                slutliga skatt blir i deklarationen. Om du inte har tillräcklig
                skatt att reducera kan du få lägre avdrag än vad kalkylen
                visar.
              </p>
              <p>
                Reglerna för RUT-avdrag uppdateras ibland, till exempel när det
                gäller vilka tjänster som omfattas, procentsatser och
                maxbelopp. Därför är det viktigt att alltid kontrollera aktuella
                regler hos Skatteverket om du vill vara helt säker på vad som
                gäller för just din situation.
              </p>
              <p className="font-semibold">
                Använd RUT-kalkylatorn som ett hjälpmedel för att förstå
                ungefär vad tjänsten kostar efter RUT-avdrag, men se den inte
                som en juridisk eller skattemässig garanti. Vid osäkerhet bör
                du alltid dubbelkolla med Skatteverket eller en rådgivare.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="rut-faq-rubrik">
            <h2
              id="rut-faq-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Vanliga frågor om RUT-kalkylatorn
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
          <section aria-labelledby="rut-relaterade-rubrik">
            <h2
              id="rut-relaterade-rubrik"
              className="text-xl font-semibold text-slate-900"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              För dig som vill räkna mer på tjänster i hemmet kan du också
              testa vår{" "}
              <a
                href="/rot-kalkylator"
                className="text-blue-700 hover:underline"
              >
                ROT-avdrag kalkylator
              </a>{" "}
              för renoveringsarbete. Vill du få bättre överblick över din
              privatekonomi kan du använda{" "}
              <a
                href="/bolanekalkylator"
                className="text-blue-700 hover:underline"
              >
                bolånekalkylatorn
              </a>{" "}
              och fler{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-blue-700 hover:underline"
              >
                ekonomiska verktyg
              </a>{" "}
              på Omvero, till exempel{" "}
              <a
                href="/momsraknare"
                className="text-blue-700 hover:underline"
              >
                momsräknare
              </a>{" "}
              när den är på plats.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
