import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Omvero – Smarta kalkylatorer online",
    template: "%s | Omvero – Smarta kalkylatorer online",
  },
  description:
    "Omvero erbjuder smarta, snabba och gratis kalkylatorer online för vardag, hälsa och ekonomi. Mobilanpassade och enkla att använda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://omvero.se" />

        {/* Favicons & Icons – Google Lighthouse Optimized */}
        <link
          rel="icon"
          href="/branding/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/branding/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/branding/favicon-48x48.ico"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          href="/branding/apple-touch-icon.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="/branding/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/branding/omvero-icon-512.png"
        />

        {/* PWA manifest */}
        <link rel="manifest" href="/branding/site.webmanifest" />

        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9VGD9WJJ1H"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9VGD9WJJ1H', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Structured Data – WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Omvero – Smarta kalkylatorer online",
              url: "https://omvero.se",
              potentialAction: {
                "@type": "SearchAction",
                // Om/när du har sökfunktion kan den ligga på /verktyg
                target: "https://omvero.se/verktyg?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data – Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Hem",
                  item: "https://omvero.se",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Verktyg",
                  item: "https://omvero.se/verktyg",
                },
              ],
            }),
          }}
        />

        {/* Structured Data – Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Omvero",
              alternateName: "Omvero – Smarta kalkylatorer online",
              url: "https://omvero.se",
              logo: "https://omvero.se/branding/omvero-logo-full.svg",
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className="min-h-screen flex flex-col">
          {/* HEADER */}
          <header className="border-b border-[var(--border-subtle)] bg-white">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-5">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/branding/omvero-logo-full.svg"
                  alt="Omvero logotyp"
                  className="h-9 w-auto"
                />
                <span className="sr-only">Omvero</span>
              </Link>

              <nav className="flex gap-4 text-sm text-slate-600">
                <Link href="/" className="hover:text-slate-900">
                  Hem
                </Link>
                <Link href="/verktyg" className="hover:text-slate-900">
                  Verktyg
                </Link>
              </nav>
            </div>
          </header>

          {/* INNEHÅLL */}
          <main className="flex-1 max-w-5xl mx-auto px-4 py-10 md:py-12">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="border-t border-[var(--border-subtle)] bg-white">
            <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-wrap justify-between gap-2">
              <span>© Omvero.</span>
              <span>
                Beräkningar är förenklade och vägledande – kontrollera alltid
                resultat och aktuella regler innan du fattar beslut.
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
