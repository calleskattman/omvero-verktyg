// app/verktyg/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Alla verktyg – smarta kalkylatorer och onlineverktyg | Omvero",
  description:
    "Utforska alla verktyg på Omvero – praktiska kalkylatorer och onlineverktyg för hälsa, ekonomi och vardag. Helt gratis att använda direkt i webbläsaren.",
  alternates: {
    canonical: "https://omvero.se/verktyg",
  },
};

const categories = ["halsa", "ekonomi", "konvertering", "ovrigt"] as const;

const categoryLabels: Record<(typeof categories)[number], string> = {
  halsa: "Hälsa",
  ekonomi: "Ekonomi",
  konvertering: "Konvertering",
  ovrigt: "Övrigt",
};

const categoryIntro: Record<(typeof categories)[number], string> = {
  halsa:
    "Verktyg som hjälper dig att förstå din kropp, hälsa och vardagliga vanor – till exempel BMI och kaloribehov.",
  ekonomi:
    "Verktyg för privatekonomi, företagande och vardagsbeslut – från ROT-avdrag till moms och andra kostnadsberäkningar.",
  konvertering:
    "Verktyg som hjälper dig att konvertera mellan format, enheter eller filer – exempelvis dokument, mått och andra omvandlingar.",
  ovrigt:
    "Smarta små hjälpare som inte riktigt passar i hälsa eller ekonomi, men som ändå gör vardagen enklare.",
};

export default function ToolsOverviewPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* Brödsmulor */}
      <header className="space-y-3">
        <p className="text-xs text-slate-500">
          <Link href="/">Hem</Link> &nbsp;/&nbsp; <span>Verktyg</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Alla verktyg på Omvero
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Här samlar vi alla våra onlineverktyg på ett ställe. Fokus är att
          göra det enkelt att räkna, jämföra och fatta beslut inom hälsa,
          ekonomi och vardag – direkt i webbläsaren, utan inloggning och helt
          gratis.
        </p>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Vi bygger löpande ut Omvero med nya kalkylatorer, konverterare och
          andra små verktyg. Börja med att välja en kategori eller gå direkt
          till ett specifikt verktyg längre ned på sidan.
        </p>
      </header>

      {/* Kategorikort */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Utforska efter kategori</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/verktyg/${cat}`}
              className="block rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition"
            >
              <h3 className="font-semibold">{categoryLabels[cat]}</h3>
              <p className="mt-1 text-sm text-slate-600">{categoryIntro[cat]}</p>
              <p className="mt-2 text-xs text-slate-500 underline">
                Öppna {categoryLabels[cat].toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Lista med alla verktyg, grupperade */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Alla verktyg, kategori för kategori</h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Här kan du se samtliga verktyg som finns publicerade på Omvero just
          nu. Vi fyller på med fler allt eftersom de blir klara.
        </p>

        {categories.map((cat) => {
          const list = tools.filter((t) => t.category === cat);
          if (list.length === 0) return null;

          return (
            <div key={cat} className="space-y-2">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <span>{categoryLabels[cat]}</span>
                <Link
                  href={`/verktyg/${cat}`}
                  className="text-xs font-normal underline text-slate-600"
                >
                  Visa alla verktyg i {categoryLabels[cat].toLowerCase()}
                </Link>
              </h3>
              <ul className="space-y-1">
                {list.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/${tool.slug}`}
                      className="font-medium underline"
                    >
                      {tool.name}
                    </Link>
                    {" – "}
                    <span className="text-sm text-slate-600">
                      {tool.shortDescription}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </main>
  );
}
