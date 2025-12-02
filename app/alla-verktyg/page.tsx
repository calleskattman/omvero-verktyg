// app/alla-verktyg/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata: Metadata = {
  title: "Alla verktyg",
  description:
    "Översikt över alla kalkylatorer och verktyg på Omvero – Verktygsportalen. Hitta snabbt rätt verktyg för hälsa, ekonomi och vardag.",
  alternates: {
    canonical: "https://omvero.se/alla-verktyg",
  },
};

const categoryLabels: Record<string, string> = {
  halsa: "Hälsa",
  ekonomi: "Ekonomi",
  ovrigt: "Övrigt",
};

export default function AllaVerktygPage() {
  const categories = ["halsa", "ekonomi", "ovrigt"] as const;

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">
          <Link href="/">Hem</Link> &nbsp;/&nbsp; <span>Alla verktyg</span>
        </p>
        <h1 className="text-2xl font-bold">Alla verktyg</h1>
        <p className="text-sm text-slate-600">
          Här hittar du en översikt över alla verktyg på sidan.
        </p>
      </header>

      <section className="space-y-6">
        {categories.map((cat) => {
          const list = tools.filter((t) => t.category === cat);
          if (list.length === 0) return null;

          return (
            <div key={cat} className="space-y-3">
              <h2 className="text-lg font-semibold">
                {categoryLabels[cat] ?? cat}
              </h2>
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
