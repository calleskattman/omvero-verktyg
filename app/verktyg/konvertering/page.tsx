// app/verktyg/konvertering/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Verktyg för konvertering – filer, format och enheter | Omvero",
  description:
    "Här samlar vi verktyg för konvertering på Omvero. Exempelvis filkonvertering, omvandling mellan enheter och andra smarta hjälpmedel för vardagen.",
  alternates: {
    canonical: "https://omvero.se/verktyg/konvertering",
  },
};

export default function ConversionToolsPage() {
  const conversionTools = tools.filter((t) => t.category === "konvertering");

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-3">
        <p className="text-xs text-slate-500">
          <Link href="/">Hem</Link> &nbsp;/&nbsp;
          <Link href="/verktyg" className="underline">
            Verktyg
          </Link>{" "}
          &nbsp;/&nbsp; <span>Konvertering</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Verktyg för konvertering
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          På den här sidan samlar vi verktyg som hjälper dig att konvertera
          mellan olika format, filer och enheter. Det kan handla om allt från
          dokumentkonvertering till omvandling av mått, vikter eller andra
          värden som dyker upp i vardagen.
        </p>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Tanken är att du ska slippa installera program eller leta efter
          osäkra webbsidor – här hittar du enkla och trygga konverteringsverktyg
          direkt i webbläsaren.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Tillgängliga verktyg</h2>
        {conversionTools.length === 0 ? (
          <p className="text-sm text-slate-600">
            Vi har ännu inte publicerat några konverteringsverktyg, men den
            här kategorin är planerad för framtida funktioner. Vi uppdaterar
            sidan så snart första verktyget är på plats.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {conversionTools.map((tool) => (
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
    </main>
  );
}
