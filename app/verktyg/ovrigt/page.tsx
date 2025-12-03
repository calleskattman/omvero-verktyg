// app/verktyg/ovrigt/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Övriga verktyg – smarta hjälpmedel för vardagen | Omvero",
  description:
    "Här hamnar verktyg som inte riktigt passar in i hälsa, ekonomi eller konvertering – men som ändå förenklar din vardag.",
  alternates: {
    canonical: "https://omvero.se/verktyg/ovrigt",
  },
};

export default function OtherToolsPage() {
  const otherTools = tools.filter((t) => t.category === "ovrigt");

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-3">
        <p className="text-xs text-slate-500">
          <Link href="/">Hem</Link> &nbsp;/&nbsp;
          <Link href="/verktyg" className="underline">
            Verktyg
          </Link>{" "}
          &nbsp;/&nbsp; <span>Övrigt</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">Övriga verktyg</h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Alla verktyg passar inte perfekt i en tydlig kategori. Här samlar vi
          sådant som ändå är användbart – små hjälpmedel som sparar tid,
          minskar manuellt pill och gör vardagen lite smidigare.
        </p>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          I takt med att Omvero växer kan delar av innehållet flyttas till nya
          kategorier, men den här sidan kommer alltid vara hem för de mer
          udda men praktiska verktygen.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Tillgängliga verktyg</h2>
        {otherTools.length === 0 ? (
          <p className="text-sm text-slate-600">
            Just nu finns det inga verktyg i kategorin ”Övrigt”. Nya funktioner
            kommer att dyka upp här allt eftersom vi bygger ut Omvero.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {otherTools.map((tool) => (
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
