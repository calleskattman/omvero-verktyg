// components/tools/BolanekalkylatorTool.tsx
"use client";

import { useState } from "react";

export function BolanekalkylatorTool() {
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
    <div className="grid gap-6 md:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Lånebelopp (kr)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="input"
            placeholder="Exempel: 2 000 000"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Ränta (%)</label>
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
          <label className="mb-1 block text-sm">Amorteringstid (år)</label>
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
      <div className="space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-5">
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
