// app/verktyg/halsa/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Hälsorelaterade verktyg – BMI, kaloribehov m.m. | Omvero",
  description:
    "Utforska hälsokalkylatorer på Omvero. Räkna ut BMI, uppskatta ditt dagliga kaloribehov och få bättre koll på din hälsa på ett enkelt sätt.",
  alternates: {
    canonical: "https://omvero.se/verktyg/halsa",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vilka hälsokalkylatorer finns på Omvero?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "På Omvero hittar du bland annat en BMI-räknare och en kaloriräknare. Vi lägger löpande till fler hälsorelaterade verktyg som hjälper dig att förstå din kropp och dina vanor.",
      },
    },
    {
      "@type": "Question",
      name: "Är resultaten från hälsokalkylatorerna medicinska råd?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nej. Verktygen är endast till för generell information och förenklade beräkningar. De ersätter aldrig medicinsk rådgivning. Vid frågor om din hälsa ska du alltid kontakta sjukvården.",
      },
    },
    {
      "@type": "Question",
      name: "Kostar det något att använda era hälsokalkylatorer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Alla verktyg på Omvero är gratis att använda direkt i webbläsaren. Du behöver inte skapa konto eller ladda ner någon app.",
      },
    },
  ],
};

export default function HealthToolsPage() {
  const healthTools = tools.filter((t) => t.category === "halsa");

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* FAQ-schema för Google */}
      <Script
        id="health-tools-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="space-y-3">
        <p className="text-xs text-slate-500">
          <Link href="/">Hem</Link> &nbsp;/&nbsp;
          <Link href="/verktyg" className="underline">
            Verktyg
          </Link>{" "}
          &nbsp;/&nbsp; <span>Hälsa</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Hälsorelaterade verktyg
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Här samlar vi verktyg som hjälper dig att få bättre koll på din
          hälsa. Du kan till exempel räkna ut ditt BMI, uppskatta ditt
          dagliga kaloribehov och på sikt fler typer av hälsoberäkningar.
          Tanken är inte att ersätta vård, utan att ge dig ett enkelt
          underlag för att förstå din vardag lite bättre.
        </p>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Alla verktyg är byggda för att vara lätta att använda även på
          mobilen. Du fyller i några få värden och får snabbt ett resultat
          som förklaras i klartext – inte bara en siffra.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Verktyg inom hälsa</h2>
        {healthTools.length === 0 ? (
          <p className="text-sm text-slate-600">
            Vi håller just nu på att lägga till våra första hälsokalkylatorer.
            Kom gärna tillbaka snart – nya verktyg publiceras löpande.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {healthTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="block rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition"
              >
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {tool.shortDescription}
                </p>
                <p className="mt-2 text-xs text-slate-500 underline">
                  Öppna verktyget
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Vanliga frågor om hälsokalkylatorer</h2>
        <div className="space-y-2 text-sm text-slate-700">
          <div>
            <h3 className="font-medium">
              Vilka hälsokalkylatorer finns på Omvero?
            </h3>
            <p>
              Just nu erbjuder vi bland annat en BMI-räknare och en
              kaloriräknare. Planen är att successivt lägga till fler verktyg
              som hjälper dig att förstå din hälsa, till exempel fler
              beräkningar kopplade till träning och vardagsvanor.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Är resultaten att betrakta som medicinska råd?
            </h3>
            <p>
              Nej, resultaten ska alltid ses som generella uppskattningar.
              De kan vara ett bra underlag, men ersätter aldrig bedömning
              från läkare eller annan vårdpersonal.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Behöver jag skapa konto för att använda verktygen?
            </h3>
            <p>
              Nej, alla hälsokalkylatorer på Omvero kan användas direkt utan
              inloggning och utan kostnad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
