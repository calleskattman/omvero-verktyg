// app/bolanekalkylator/page.tsx
import { Metadata } from "next";
import Script from "next/script";
import { ToolLayout } from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Bolånekalkylator – räkna ut din bolånekostnad",
  description:
    "Beräkna din månadskostnad för bolån snabbt och enkelt. Jämför räntor, lånebelopp och amortering och få en tydlig bild av vad ditt bolån kostar per månad.",
  alternates: {
    canonical: "https://omvero.se/bolanekalkylator",
  },
};

// FAQ-schema markup
const loanFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hur räknar man ut månadskostnaden för bolån?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Månadskostnaden räknas ut baserat på lånebelopp, ränta och amortering. Vår bolånekalkylator visar totalkostnaden per månad.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken ränta ska jag använda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du kan använda din aktuella ränta eller testa olika scenarier. Kalkylatorn fungerar för både rörlig och bunden ränta.",
      },
    },
    {
      "@type": "Question",
      name: "Påverkar amorteringen min månadskostnad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, amorteringen är en del av din totala månadskostnad. Ju högre amortering, desto högre blir den totala månadsbetalningen.",
      },
    },
  ],
};

export default function BolanekalkylatorPage() {
  return (
    <ToolLayout
      title="Bolånekalkylator"
      category="ekonomi"
      description="Räkna ut din månadskostnad för bolån och se hur ränta, amortering och lånebelopp påverkar din totala boendekostnad."
    >
      {/* JSON-LD FAQ Schema */}
      <Script
        id="loan-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(loanFaq),
        }}
      />

      {/* SJÄLVA KALKYLATORN – fullt fungerande */}
      <LoanCalculator />
    </ToolLayout>
  );
}

// =========================
//   KALKYLATOR-KOMPONENT
// =========================

"use client";
import { useState } from "react";

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [amortYears, setAmortYears] = useState("");

  const loan = parseFloat(loanAmount) || 0;
  const interest = (parseFloat(interestRate) || 0) / 100;
  const years = parseFloat(amortYears) || 0;

  const monthlyInterest = interest / 12;
  const totalMonths = years * 12;

  let monthlyPayment = 0;

  if (loan > 0 && interest > 0 && years > 0) {
    // Annuitetsformel
    monthlyPayment =
      loan *
      (monthlyInterest /
        (1 - Math.pow(1 + monthlyInterest, -totalMonths)));
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Lånebelopp (kr)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="input"
            placeholder="Exempel: 2 000 000"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Ränta (%)</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="input"
            placeholder="Exempel: 4.5"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Amorteringstid (år)</label>
          <input
            type="number"
            value={amortYears}
            onChange={(e) => setAmortYears(e.target.value)}
            className="input"
            placeholder="Exempel: 30"
          />
        </div>
      </div>

      {/* Resultat */}
      <div className="rounded-lg bg-blue-50 p-5 border border-blue-200 space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">
          Månadskostnad
        </h3>

        <p className="text-3xl font-bold text-slate-900">
          {monthlyPayment > 0
            ? `${Math.round(monthlyPayment).toLocaleString("sv-SE")} kr`
            : "—"}
        </p>

        <p className="text-sm text-slate-600">
          Detta inkluderar både ränta och amortering enligt annuitetsmodellen.
        </p>
      </div>
    </div>
  );
}
