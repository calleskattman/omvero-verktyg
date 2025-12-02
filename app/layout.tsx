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
    default: "Verktygsportalen – Kalkylatorer & verktyg online",
    template: "%s | Verktygsportalen",
  },
  description:
    "Enkla onlineverktyg och kalkylatorer för t.ex. ROT-avdrag, moms och andra beräkningar. Snabba, mobilanpassade och gratis att använda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
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
                  alt="Verktygsportalens logotyp"
                  className="h-9 w-auto"
                />
                <span className="sr-only">Verktygsportalen</span>
              </Link>

              <nav className="flex gap-4 text-sm text-slate-600">
                <Link href="/" className="hover:text-slate-900">
                  Hem
                </Link>
                <Link href="/alla-verktyg" className="hover:text-slate-900">
                  Alla verktyg
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
                Beräkningar är vägledande – kontrollera alltid aktuella regler
                hos myndighet eller Skatteverket.
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
