import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import RotTool from "@/components/tools/RotTool";

// FAQ-schema för Google (måste spegla FAQ-texten på sidan)
const rotFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Gäller ROT-avdraget på material och resor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Nej, ROT-avdraget gäller bara arbetskostnaden. Material, resor och andra kostnader ingår inte i skattereduktionen."
      }
    },
    {
      "@type": "Question",
      "name": "Hur stort är maxbeloppet för ROT-avdraget?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "I den här kalkylatorn används ett maxbelopp på 50 000 kr per person och år. Kontrollera alltid aktuella nivåer hos Skatteverket."
      }
    }
  ]
};

export default function RotKalkylatorPage() {
  return (
    <ToolLayout
      title="ROT-avdrag kalkylator"
      description="Räkna ut ROT-avdrag, total kostnad och vad kunden betalar efter avdrag. Anpassad för svenska ROT-regler."
    >
      <>
        {/* FAQ-schema för rich results i Google */}
        <Script
          id="rot-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rotFaqSchema) }}
        />

        <div className="space-y-10">
          {/* Själva verktyget */}
          <section aria-labelledby="rot-verktyg-rubrik">
            <h2 id="rot-verktyg-rubrik" className="sr-only">
              ROT-avdrag kalkylator – beräkning
            </h2>
            <RotTool />
          </section>

          {/* Förklaring */}
          <section aria-labelledby="rot-hur-fungerar-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="rot-hur-fungerar-rubrik">
              Hur fungerar ROT-avdraget?
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              ROT-avdraget ger privatpersoner möjlighet att få skattereduktion på
              arbetskostnaden vid reparation, om- och tillbyggnad av bostad.
              Avdraget gäller enbart arbetskostnad – inte material, resor eller övriga
              kostnader.
            </p>
            <p className="text-sm text-slate-700">
              Med denna kalkylator kan du räkna ut hur stort avdraget blir och vilket
              belopp som återstår att betala efter ROT. Resultatet är vägledande och
              du bör alltid kontrollera aktuella regler hos Skatteverket.
            </p>
          </section>

          {/* Exempel */}
          <section aria-labelledby="rot-exempel-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="rot-exempel-rubrik">
              Exempel
            </h2>
            <p className="text-sm text-slate-700">
              Om arbetskostnaden är 100&nbsp;000 kr och avdragsprocenten är 30&nbsp;%, blir
              ROT-avdraget 30&nbsp;000 kr. Kunden betalar då 70&nbsp;000 kr för arbetet, utöver
              material och övriga kostnader.
            </p>
          </section>

          {/* FAQ för just ROT */}
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
                  Nej, ROT-avdraget gäller bara arbetskostnaden. Material, resor och andra
                  kostnader ingår inte i skattereduktionen.
                </p>
              </article>

              <article aria-labelledby="rot-faq-2">
                <h3 className="font-semibold mb-1" id="rot-faq-2">
                  Hur stort är maxbeloppet för ROT-avdraget?
                </h3>
                <p>
                  I den här kalkylatorn används ett maxbelopp på 50&nbsp;000 kr per person och
                  år. Kontrollera alltid aktuella nivåer hos Skatteverket.
                </p>
              </article>
            </div>
          </section>

          {/* Relaterade verktyg – fylls på med riktiga länkar när vi har fler */}
          <section aria-labelledby="rot-relaterade-rubrik">
            <h2 className="text-xl font-semibold mb-2" id="rot-relaterade-rubrik">
              Relaterade verktyg
            </h2>
            <p className="text-sm text-slate-700">
              Snart hittar du fler kalkylatorer här, till exempel för moms,
              RUT-avdrag och andra vanliga beräkningar.
            </p>
          </section>
        </div>
      </>
    </ToolLayout>
  );
}
