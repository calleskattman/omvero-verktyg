// app/bolanekalkylator/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";
import { BolanekalkylatorTool } from "@/components/tools/BolanekalkylatorTool";

export const metadata: Metadata = {
  title: "Bolånekalkylator – räkna ut din bolånekostnad",
  description:
    "Räkna ut din månadskostnad för bolån. Jämför ränta, lånebelopp och amorteringstid och få en tydlig bild av vad ditt bolån kostar per månad – med annuitetsberäkning.",
  alternates: {
    canonical: "https://omvero.se/bolanekalkylator",
  },
};

// FAQ-schema
const loanFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hur räknar man ut månadskostnaden för bolån?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Månadskostnaden räknas ut baserat på lånebelopp, ränta och amorteringstid. Kalkylatorn använder annuitetsformeln – samma modell som banker använder.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken ränta ska jag använda i bolånekalkylatorn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du kan använda din aktuella ränta eller testa olika nivåer. Verktyget fungerar med både rörlig och bunden ränta.",
      },
    },
    {
      "@type": "Question",
      name: "Påverkar amorteringen min månadskostnad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Amorteringen är en del av månadskostnaden och påverkar totalbeloppet du betalar varje månad.",
      },
    },
  ],
};

export default function BolanekalkylatorPage() {
  return (
    <ToolLayout
      title="Bolånekalkylator"
      category="ekonomi"
      description="Räkna ut månadskostnaden för ditt bolån baserat på ränta, amorteringstid och lånebelopp."
    >
      {/* SEO-intro */}
      <div className="prose prose-slate max-w-none mb-8">
        <p>
          Med vår bolånekalkylator kan du snabbt räkna ut din totala
          månadskostnad för bolån, baserat på lånebelopp, ränta och
          amorteringstid. Verktyget använder annuitetsmodellen – samma metod
          som banker använder – för att visa en realistisk månadskostnad.
        </p>

        <p>
          Kalkylatorn hjälper dig att jämföra olika räntor och
          amorteringsnivåer, så att du enkelt kan se hur små förändringar
          påverkar din ekonomi. Perfekt inför bostadsköp, omförhandling av bolån
          eller när du vill få bättre koll på din privatekonomi.
        </p>

        <h2>Vad visar bolånekalkylatorn?</h2>
        <ul>
          <li>Månadskostnad inklusive ränta och amortering</li>
          <li>Kostnad baserat på vald ränta (rörlig eller bunden)</li>
          <li>Effekten av olika amorteringstider</li>
          <li>Hur mycket du betalar totalt varje månad</li>
        </ul>

        <p>
          Fyll i dina uppgifter nedan och få en tydlig kostnadsbild direkt –
          snabbt, enkelt och helt gratis.
        </p>
      </div>

      {/* JSON-LD FAQ Schema */}
      <Script
        id="loan-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(loanFaq),
        }}
      />

      {/* Själva kalkylatorn */}
      <BolanekalkylatorTool />
    </ToolLayout>
  );
}
