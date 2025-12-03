// app/rot-kalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import RotTool from "@/components/tools/RotTool";

// SEO-metadata för ROT-kalkylatorn
export const metadata: Metadata = {
  title: "ROT-avdrag kalkylator – räkna ut ROT och kundens slutpris",
  description:
    "Räkna ut ROT-avdrag, total kostnad och vad kunden betalar efter avdrag. Anpassad för svenska ROT-regler och arbetskostnad.",
  alternates: {
    canonical: "https://omvero.se/rot-kalkylator",
  },
};

// FAQ-schema (måste spegla FAQ-texten längre ned på sidan)
const rotFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gäller ROT-avdraget på material och resor?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nej, ROT-avdraget gäller bara arbetskostnaden. Material, resor, maskinhyra och andra kostnader ingår normalt inte i skattereduktionen.",
      },
    },
    {
      "@type": "Question",
      name: "Hur stort är ROT-avdraget?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "I vanliga fall är ROT-avdraget 30 % av arbetskostnaden upp till ett visst maxbelopp per person och år. Kontrollera alltid aktuella procentsatser och regler hos Skatteverket.",
      },
    },
    {
      "@type": "Question",
      name: "Hur mycket ROT-avdrag kan jag få per år?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Som tumregel används ofta ett maxbelopp på 50 000 kr i ROT-avdrag per person och år, men nivåer och regler kan ändras. Se alltid Skatteverkets information för senaste belopp.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jag använda den här ROT-kalkylatorn för offerter till kunder?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja, kalkylatorn kan ge ett snabbt underlag för offerter och prisexempel, men resultatet är bara en förenklad beräkning. Du ansvarar alltid själv för att kontrollera aktuella regler, belopp och att kunden uppfyller villkoren för ROT.",
      },
    },
  ],
};

// Calculator-schema för själva verktyget
const rotCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "Calculator",
  name: "ROT-avdrag kalkylator",
  description:
    "Online-kalkylator som beräknar ROT-avdrag, arbetskostnad och kundens slutpris enligt svenska ROT-regler.",
  url: "https://omvero.se/rot-kalkylator",
  applicationCategory: "BusinessApplication",
  isAccessibleForFree: true,
  inLanguage: "sv-SE",
  publisher: {
    "@type": "Organization",
    name: "Omvero",
    url: "https://omvero.se",
  },
};

export default function RotKalkylatorPage() {
  return (
    <ToolLayout
      title="ROT-avdrag kalkylator"
      description="Räkna ut ROT-avdrag, total kostnad och vad kunden betalar efter avdrag. Anpassad för svenska ROT-regler."
    category="ekonomi"
    >
      <>
        {/* Structured data för Google */}
        <Script
          id="rot-calculator-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rotCalculatorSchema),
          }}
        />
        <Script
          id="rot-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rotFaqSchema),
          }}
        />

        <div className="space-y-10">
          {/* Själva verktyget */}
          <section aria-labelledby="rot-verktyg-rubrik">
            <h2 id="rot-verktyg-rubrik" className="sr-only">
              ROT-avdrag kalkylator – beräkning
            </h2>
            <RotTool />
          </section>

          {/* Hur fungerar... */}
          <section aria-labelledby="rot-hur-fungerar-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="rot-hur-fungerar-rubrik"
            >
              Hur fungerar ROT-kalkylatorn?
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              ROT-kalkylatorn hjälper dig att räkna ut hur mycket ROT-avdrag
              som kan bli aktuellt och vilket belopp kunden betalar efter
              avdrag. Du fyller i arbetskostnad, materialkostnad och eventuella
              övriga kostnader. Kalkylatorn beräknar då total kostnad före
              avdrag, ROT-avdraget och slutpriset efter ROT.
            </p>
            <p className="text-sm text-slate-700 mb-2">
              Beräkningen utgår från att ROT-avdraget bara gäller
              arbetskostnaden. Material, resor, maskinhyra och andra poster
              ingår inte i själva skattereduktionen, men kan fortfarande vara
              med i kundens totala pris.
            </p>
            <p className="text-sm text-slate-700">
              Observera att verktyget är förenklat och inte tar hänsyn till
              kundens individuella förutsättningar, tidigare ROT-avdrag under
              året eller exakt hur många personer som delar på avdraget.
              Kontrollera därför alltid detaljerna mot Skatteverkets aktuella
              regler.
            </p>
          </section>

          {/* Vilka arbeten kan ge ROT-avdrag */}
          <section aria-labelledby="rot-arbeten-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="rot-arbeten-rubrik">
              Exempel på arbeten som kan ge ROT-avdrag
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              ROT-avdraget är framför allt kopplat till renovering, ombyggnad
              och tillbyggnad av bostäder. Några vanliga exempel är:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>
                Renovering av kök och badrum, till exempel byte av ytskikt,
                montering av skåp eller installation av diskbänk.
              </li>
              <li>
                Måleri-, snickeri- och golvarbeten i bostaden, såsom tapetsering
                eller läggning av nytt golv.
              </li>
              <li>
                Vissa typer av el- och VVS-arbeten kopplade till bostadens
                installationer.
              </li>
              <li>
                Om- och tillbyggnad av småhus, till exempel uterum eller
                ombyggnad av befintliga boytor.
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              Exakt vilka arbeten som ger rätt till ROT styrs av Skatteverkets
              regler. Se alltid deras information för detaljerade listor och
              undantag.
            </p>
          </section>

          {/* Exempelberäkning */}
          <section aria-labelledby="rot-exempel-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="rot-exempel-rubrik">
              Exempel på ROT-beräkning
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Anta att du har ett uppdrag där arbetskostnaden är{" "}
              <strong>100&nbsp;000 kr</strong>, materialkostnaden{" "}
              <strong>40&nbsp;000 kr</strong> och övriga kostnader{" "}
              <strong>10&nbsp;000 kr</strong>. Den totala kostnaden före
              avdrag blir då:
            </p>
            <p className="text-sm text-slate-700 mb-2">
              <code>100&nbsp;000 + 40&nbsp;000 + 10&nbsp;000 = 150&nbsp;000 kr</code>
            </p>
            <p className="text-sm text-slate-700 mb-2">
              Om ROT-avdraget är 30 % av arbetskostnaden beräknas avdraget som:
            </p>
            <p className="text-sm text-slate-700 mb-2">
              <code>100&nbsp;000 × 0,30 = 30&nbsp;000 kr</code>
            </p>
            <p className="text-sm text-slate-700">
              Kunden betalar då{" "}
              <strong>150&nbsp;000 − 30&nbsp;000 = 120&nbsp;000 kr</strong>{" "}
              efter ROT-avdrag, förutsatt att maxbeloppet inte överskrids och
              att kunden har rätt till fullt avdrag.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Siffrorna är bara ett exempel. I verkligheten kan ROT-avdraget
              påverkas av hur många personer som delar på avdraget, tidigare
              utnyttjat ROT under året och andra individuella faktorer.
            </p>
          </section>

          {/* Begränsningar */}
          <section aria-labelledby="rot-begransningar-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="rot-begransningar-rubrik"
            >
              Begränsningar och saker att tänka på
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              ROT-avdraget är ett bra stöd för privatpersoner, men reglerna
              innehåller flera begränsningar. Bland annat behöver kunden äga
              bostaden, bo där helt eller delvis och ha tillräcklig skatt att
              räkna av avdraget mot.
            </p>
            <p className="text-sm text-slate-700 mb-2">
              Det finns också ett maxbelopp per person och år. I den här
              kalkylatorn används ett tak på{" "}
              <strong>50&nbsp;000 kr</strong> per person och år som riktmärke,
              men kontrollera alltid aktuella nivåer eftersom regler kan ändras
              över tid.
            </p>
            <p className="text-sm text-slate-700">
              Se därför resultatet från kalkylatorn som en vägledning och inte
              som ett slutgiltigt besked. Vid frågor kring en specifik affär
              eller kunds situation är det klokt att läsa på hos Skatteverket
              eller kontakta en rådgivare.
            </p>
          </section>

          {/* FAQ – måste matcha rotFaqSchema ovan */}
          <section aria-labelledby="rot-faq-rubrik">
            <h2 className="text-xl font-semibold mb-3" id="rot-faq-rubrik">
              Vanliga frågor om ROT-avdrag
            </h2>
            <div className="space-y-3 text-sm text-slate-700">
              <article aria-labelledby="rot-faq-1">
                <h3 className="font-semibold mb-1" id="rot-faq-1">
                  Gäller ROT-avdraget på material och resor?
                </h3>
                <p>
                  Nej, ROT-avdraget gäller bara arbetskostnaden. Material,
                  resor, maskinhyra och andra kostnader ingår normalt inte i
                  skattereduktionen.
                </p>
              </article>

              <article aria-labelledby="rot-faq-2">
                <h3 className="font-semibold mb-1" id="rot-faq-2">
                  Hur stort är ROT-avdraget?
                </h3>
                <p>
                  I vanliga fall är ROT-avdraget 30&nbsp;% av arbetskostnaden
                  upp till ett visst maxbelopp per person och år. Kontrollera
                  alltid aktuella procentsatser och regler hos Skatteverket.
                </p>
              </article>

              <article aria-labelledby="rot-faq-3">
                <h3 className="font-semibold mb-1" id="rot-faq-3">
                  Hur mycket ROT-avdrag kan jag få per år?
                </h3>
                <p>
                  Som tumregel används ofta ett maxbelopp på 50&nbsp;000 kr i
                  ROT-avdrag per person och år, men nivåer och regler kan
                  ändras. Se alltid Skatteverkets information för senaste
                  belopp.
                </p>
              </article>

              <article aria-labelledby="rot-faq-4">
                <h3 className="font-semibold mb-1" id="rot-faq-4">
                  Kan jag använda den här ROT-kalkylatorn för offerter till
                  kunder?
                </h3>
                <p>
                  Ja, kalkylatorn kan ge ett snabbt underlag för offerter och
                  prisexempel, men resultatet är bara en förenklad beräkning. Du
                  ansvarar alltid själv för att kontrollera aktuella regler,
                  belopp och att kunden uppfyller villkoren för ROT.
                </p>
              </article>
            </div>
          </section>

          {/* Relaterade verktyg */}
          <section aria-labelledby="rot-relaterade-rubrik">
            <h2
              className="text-xl font-semibold mb-2"
              id="rot-relaterade-rubrik"
            >
              Relaterade verktyg på Omvero
            </h2>
            <p className="text-sm text-slate-700 mb-1">
              Vill du göra fler beräkningar kopplade till privatekonomi och
              vardagsekonomi kan du även utforska våra andra verktyg inom
              kategorin ekonomi.
            </p>
            <p className="text-sm text-slate-700">
              Gå till sidan{" "}
              <a
                href="/verktyg/ekonomi"
                className="text-[var(--primary)] hover:underline"
              >
                verktyg inom ekonomi
              </a>{" "}
              för en samlad översikt. Nya kalkylatorer läggs till löpande.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
