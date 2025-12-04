// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Omvero – Smarta kalkylatorer online",
  description:
    "Omvero samlar smarta, snabba och gratis kalkylatorer online för vardag, hälsa och ekonomi. Fungerar direkt i webbläsaren, utan konto.",
  alternates: {
    canonical: "https://omvero.se",
  },
};

export default function HomePage() {
  const featuredTools = tools.filter((t) => t.showOnHome);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* Hero / Intro */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Smarta kalkylatorer online
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Omvero samlar enkla, snabba och gratis kalkylatorer online för vardag,
          hälsa och ekonomi. Allt direkt i webbläsaren – utan konto eller
          krångel.
        </p>
        <p className="text-xs md:text-sm text-slate-500 max-w-2xl">
          Börja med någon av våra populära räknare nedan eller gå till{" "}
          <Link href="/alla-verktyg" className="underline">
            alla verktyg
          </Link>{" "}
          för en fullständig översikt.
        </p>
      </section>

      {/* Utvalda verktyg */}
      {featuredTools.length > 0 && (
        <section className="space-y-4" aria-labelledby="featured-tools-heading">
          <div className="flex items-center justify-between">
            <h2
              id="featured-tools-heading"
              className="text-xl font-semibold"
            >
              Populära kalkylatorer
            </h2>
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

      {/* Sektion: Om Omvero */}
      <section className="space-y-3" aria-labelledby="about-omvero-heading">
        <h2 id="about-omvero-heading" className="text-lg font-semibold">
          Vad är Omvero?
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Omvero är en samlingsplats för smarta kalkylatorer online. Fokus
          ligger på tydliga gränssnitt, begripliga resultat och verktyg som
          fungerar lika bra i mobilen som på datorn.
        </p>
        <p className="text-sm text-slate-600 max-w-2xl">
          Vi bygger löpande ut sidan med fler räknare – till exempel för
          energiförbrukning, privatekonomi och olika vardagsberäkningar. Alla
          verktyg är gratis att använda.
        </p>
      </section>

      {/* Länk till alla verktyg */}
      <section className="space-y-2" aria-labelledby="all-tools-heading">
        <h2 id="all-tools-heading" className="text-lg font-semibold">
          Alla verktyg på Omvero
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Här hittar du en samlad översikt över alla kalkylatorer på sajten,
          uppdelade efter kategori.
        </p>
        <Link
          href="/alla-verktyg"
          className="inline-flex text-sm underline font-medium"
        >
          Gå till alla verktyg
        </Link>
      </section>
    </main>
  );
}
