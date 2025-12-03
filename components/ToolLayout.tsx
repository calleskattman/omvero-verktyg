// components/ToolLayout.tsx
import React from "react";
import Link from "next/link";
import type { ToolCategory } from "@/config/tools";

type ToolLayoutProps = {
  title: string;
  description?: string;
  category?: ToolCategory; // används för breadcrumbs
  children: React.ReactNode;
};

const categoryLabels: Record<ToolCategory, string> = {
  halsa: "Hälsa",
  ekonomi: "Ekonomi",
  konvertering: "Konvertering",
  ovrigt: "Övrigt",
};

export function ToolLayout({
  title,
  description,
  category,
  children,
}: ToolLayoutProps) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-3">
        {/* Brödsmulor */}
        <p className="text-xs text-slate-500">
          <Link href="/">Hem</Link>
          {category ? (
            <>
              {" "}
              &nbsp;/&nbsp;
              <Link href="/verktyg" className="underline">
                Verktyg
              </Link>
              {" "}
              &nbsp;/&nbsp;
              <Link
                href={`/verktyg/${category}`}
                className="underline"
              >
                {categoryLabels[category]}
              </Link>
              {" "}
              &nbsp;/&nbsp;
              <span className="text-slate-900">{title}</span>
            </>
          ) : (
            <>
              {" "}
              &nbsp;/&nbsp;
              <span className="text-slate-900">{title}</span>
            </>
          )}
        </p>

        {/* Titel + intro */}
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        {description && (
          <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </header>

      {/* Själva verktyget */}
      <section className="border rounded-lg p-4 md:p-6 bg-white shadow-sm">
        {children}
      </section>

      {/* Liten disclaimer */}
      <section className="text-xs text-slate-500">
        <p>
          Beräkningar är förenklade och vägledande – kontrollera alltid resultat och aktuella
          regler innan du fattar beslut.
        </p>
      </section>
    </main>
  );
}
