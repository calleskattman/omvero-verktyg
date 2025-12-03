// app/verktyg/ekonomi/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Ekonomiska verktyg – ROT, moms och kostnadskalkyler | Omvero",
  description:
    "Samling av ekonomiska verktyg på Omvero. Räkna ut ROT-avdrag, jämför kostnader och få ett bättre beslutsunderlag för din privatekonomi och dina projekt.",
  alternates: {
    canonical: "https://omvero.se/verktyg/ekonomi",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vilka ekonomiska kalkylatorer finns på Omvero?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "På Omvero hittar du bland annat en ROT-kalkylator och fler ekonomiverktyg som hjälper dig att räkna på kostnader, skatter och avdrag. Nya verktyg läggs till löpande.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jag använda verktygen inför offert eller budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja, många använder våra verktyg som ett första steg för att få en känsla för kostnadsnivåer. Resultaten är dock förenklade beräkningar och ska inte ses som juridiskt bindande eller som fullständig rådgivning.",
      },
    },
    {
      "@type": "Question",
      name: "Kostar det något att använda de ekonomiska verktygen?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nej, alla verktyg på Omvero är gratis att använda. Du kan göra hur många beräkningar du vill utan att skapa konto.",
      },
    },
  ],
};

export default function EconomyToolsPage() {
  const economyTools = tools.filter((t) => t.category === "ekonomi");

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <Script
        id="economy-tools-faq-schema"
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
          &nbsp;/&nbsp; <span>Ekonomi</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Verktyg för ekonomi och kostnader
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Här samlar vi kalkylatorer som hjälper dig att räkna på kostnader,
          skatter och avdrag. Tanken är att ge ett tydligt och lättbegripligt
          beslutsunderlag – oavsett om du planerar en renovering, driver
          företag eller bara vill få bättre koll på ekonomin.
        </p>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Du fyller i dina värden och får snabbt en beräkning som visar vad
          du betalar, vad som är avdragsgillt och hur mycket som faktiskt
          hamnar på fakturan eller i plånboken.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Verktyg inom ekonomi</h2>
        {economyTools.length === 0 ? (
          <p className="text-sm text-slate-600">
            Vi håller på att bygga upp våra ekonomiska verktyg. ROT-kalkylatorn
            blir ett av de första, och fler kalkylatorer för t.ex. moms och
            jämförelser är på väg.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {economyTools.map((tool) => (
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
        <h2 className="text-lg font-semibold">Vanliga frågor om ekonomiverktyg</h2>
        <div className="space-y-2 text-sm text-slate-700">
          <div>
            <h3 className="font-medium">
              Vilka typer av beräkningar kan jag göra?
            </h3>
            <p>
              Fokus ligger på praktiska vardagsberäkningar – som ROT-avdrag,
              kostnad efter skattereduktion och andra ekonomiska frågor där
              det är skönt att slippa räkna för hand.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Är det här någon form av ekonomisk rådgivning?
            </h3>
            <p>
              Nej, verktygen är endast till för förenklade beräkningar. De
              ska ses som ett hjälpmedel, inte som personlig rådgivning eller
              garanti. För viktiga beslut bör du alltid stämma av med
              exempelvis Skatteverket, en revisor eller annan expert.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Får jag använda resultaten i offerter till kunder?
            </h3>
            <p>
              Du kan absolut använda dem som underlag, men du ansvarar själv
              för att dubbelkolla att siffror och regler stämmer för just din
              situation och senaste regelverk.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
