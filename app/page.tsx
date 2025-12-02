// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Smarta kalkylatorer och verktyg online",
  description:
    "Gratis kalkylatorer och verktyg för vardag, hälsa och ekonomi. Räkna ut BMI, kaloribehov, ROT-avdrag och mycket mer direkt i webbläsaren.",
  alternates: {
    canonical: "https://omvero.se",
  },
};

export default function HomePage() {
  const featuredTools = tools.filter((t) => t.showOnHome);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Smarta verktyg direkt i webbläsaren
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Här hittar du praktiska kalkylatorer och verktyg för vardag, hälsa och
          ekonomi. Helt gratis att använda.
        </p>
      </section>

      {featuredTools.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Utvalda verktyg</h2>
            <Link href="/alla-verktyg" className="text-sm underline">
              Visa alla verktyg
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="border rounded-lg p-4 hover:bg-slate-50 transition block"
              >
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="text-sm text-slate-600 mt-1">
                  {tool.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Alla verktyg</h2>
        <p className="text-sm text-slate-600">
          Vi bygger löpande ut sidan med fler verktyg.
        </p>
        <Link href="/alla-verktyg" className="inline-flex text-sm underline">
          Gå till alla verktyg
        </Link>
      </section>
    </main>
  );
}
