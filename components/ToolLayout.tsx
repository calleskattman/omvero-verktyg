import type { ReactNode } from "react";

type ToolLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <article
      aria-labelledby="tool-heading"
      className="w-full"
    >
      <header className="mb-6">
        {/* Brödsmulor för SEO och tillgänglighet */}
        <nav
          aria-label="Brödsmulor"
          className="mb-2 text-xs text-slate-500"
        >
          <a href="/" className="hover:text-slate-700">
            Hem
          </a>
          <span className="mx-1">/</span>
          <span>{title}</span>
        </nav>

        <h1
          id="tool-heading"
          className="text-3xl font-semibold tracking-tight mb-2"
        >
          {title}
        </h1>

        {description && (
          <p className="text-base text-slate-600 max-w-2xl">
            {description}
          </p>
        )}
      </header>

      {/* Huvudinnehåll för verktyget + förklarande sektioner */}
      <section aria-label={`${title} – innehåll`} className="mb-12">
        {children}
      </section>
    </article>
  );
}
