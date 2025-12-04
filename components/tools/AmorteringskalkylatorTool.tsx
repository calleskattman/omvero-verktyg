"use client";

import { useState } from "react";

function formatCurrency(value: number): string {
  if (!isFinite(value) || value <= 0) return "0 kr";
  return (
    value.toLocaleString("sv-SE", {
      maximumFractionDigits: 0,
    }) + " kr"
  );
}

function formatDuration(months: number): string {
  if (!isFinite(months) || months <= 0) return "–";
  const years = Math.floor(months / 12);
  const restMonths = months % 12;

  if (years === 0) {
    return `${restMonths} månader`;
  }

  if (restMonths === 0) {
    return `${years} år`;
  }

  return `${years} år och ${restMonths} månader`;
}

type YearSnapshot = {
  year: number;
  avgMonthlyPayment: number;
  avgMonthlyInterest: number;
  endBalance: number;
};

export default function AmorteringskalkylatorTool() {
  const [loanAmount, setLoanAmount] = useState<string>("250000");
  const [interestRate, setInterestRate] = useState<string>("6");
  const [monthlyPayment, setMonthlyPayment] = useState<string>("3000");

  const principal = Number(loanAmount.replace(/\s/g, "")) || 0;
  const annualInterest = Number(interestRate) || 0;
  const paymentPerMonth = Number(monthlyPayment.replace(/\s/g, "")) || 0;

  const monthlyRate = annualInterest > 0 ? annualInterest / 100 / 12 : 0;

  const hasValidInput = principal > 0 && paymentPerMonth > 0 && annualInterest >= 0;

  let totalInterestPaid = 0;
  let totalPaid = 0;
  let payoffMonths = 0;
  let endBalance = principal;
  let neverRepaid = false;
  const yearSnapshots: YearSnapshot[] = [];

  if (hasValidInput) {
    let balance = principal;
    const maxMonths = 100 * 12; // säkerhetsgräns

    // Om räntan är > 0 och betalningen är mindre än första månadsräntan
    // kommer lånet aldrig att minska.
    if (monthlyRate > 0 && paymentPerMonth <= balance * monthlyRate + 1e-6) {
      neverRepaid = true;
      endBalance = balance;
    } else {
      let currentYearPayment = 0;
      let currentYearInterest = 0;

      for (let month = 1; month <= maxMonths && balance > 0; month++) {
        const interestThisMonth = balance * monthlyRate;
        let amortThisMonth = paymentPerMonth - interestThisMonth;

        if (amortThisMonth < 0) {
          amortThisMonth = 0;
        }

        // Sista månaden kan vi behöva justera betalningen lite så att saldot går till 0.
        if (amortThisMonth > balance) {
          amortThisMonth = balance;
        }

        const paymentThisMonth = interestThisMonth + amortThisMonth;

        totalInterestPaid += interestThisMonth;
        totalPaid += paymentThisMonth;
        balance -= amortThisMonth;

        payoffMonths = month;

        currentYearPayment += paymentThisMonth;
        currentYearInterest += interestThisMonth;

        const isYearEnd = month % 12 === 0 || balance <= 0;

        if (isYearEnd) {
          const yearNumber = Math.ceil(month / 12);
          const monthsInYear = month % 12 === 0 ? 12 : month % 12 || 12;

          yearSnapshots.push({
            year: yearNumber,
            avgMonthlyPayment: currentYearPayment / monthsInYear,
            avgMonthlyInterest: currentYearInterest / monthsInYear,
            endBalance: balance,
          });

          currentYearPayment = 0;
          currentYearInterest = 0;
        }
      }

      endBalance = balance;

      // Om vi nådde maxperioden utan att lånet är betalt, markera som "aldrig återbetalt".
      if (endBalance > 1) {
        neverRepaid = true;
      }
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Inputkolumn */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="loanAmount"
            className="block text-sm mb-1 text-slate-800"
          >
            Lånebelopp (kr)
          </label>
          <input
            id="loanAmount"
            type="number"
            min={0}
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Ange det aktuella lånebeloppet du vill amortera ned, exempelvis ett
            privatlån eller ett bolån.
          </p>
        </div>

        <div>
          <label
            htmlFor="interestRate"
            className="block text-sm mb-1 text-slate-800"
          >
            Ränta (% per år)
          </label>
          <input
            id="interestRate"
            type="number"
            min={0}
            step="0.01"
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Använd den nominella årsräntan för lånet, till exempel 6.
          </p>
        </div>

        <div>
          <label
            htmlFor="monthlyPayment"
            className="block text-sm mb-1 text-slate-800"
          >
            Månadsbetalning (kr)
          </label>
          <input
            id="monthlyPayment"
            type="number"
            min={0}
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Ange hur mycket du planerar att betala per månad. Kalkylatorn
            beräknar hur lång tid det tar innan lånet är återbetalt.
          </p>
        </div>

        <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-600">
            Kalkylen utgår från att räntan är oförändrad över tiden och att du
            betalar samma belopp varje månad tills lånet är återbetalt. Resultatet
            är förenklat och tar inte hänsyn till avgifter eller ändrade
            lånevillkor.
          </p>
        </div>
      </div>

      {/* Resultatkolumn */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 md:p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Sammanfattning av din amortering
        </h3>

        {!hasValidInput ? (
          <p className="text-sm text-slate-600">
            Fyll i lånebelopp, ränta och månadsbetalning för att se ungefär hur
            lång tid det tar att betala av lånet, samt hur mycket du betalar i
            ränta totalt.
          </p>
        ) : neverRepaid ? (
          <>
            <p className="text-sm text-slate-700">
              Med de värden du har angett räcker inte månadsbetalningen för att
              lånet ska bli helt återbetalt.
            </p>
            <p className="text-sm text-slate-600">
              Höj månadsbeloppet eller sänk räntan för att amorteringen ska
              överstiga den månatliga räntekostnaden. Annars riskerar skulden att
              ligga kvar eller till och med öka över tid.
            </p>
          </>
        ) : (
          <>
            <div>
              <p className="text-sm text-slate-600">
                Beräknad återbetalningstid
              </p>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                {formatDuration(payoffMonths)}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Så lång tid tar det ungefär att betala av hela lånet med den
                månadsbetalning du har angett, givet oförändrad ränta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-slate-600">Total räntekostnad</p>
                <p className="font-semibold text-slate-900">
                  {formatCurrency(totalInterestPaid)}
                </p>
                <p className="text-xs text-slate-500">
                  Summan av all ränta du betalar under hela perioden tills
                  skulden är noll.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-600">Totalt betalat</p>
                <p className="font-semibold text-slate-900">
                  {formatCurrency(totalPaid)}
                </p>
                <p className="text-xs text-slate-500">
                  Inkluderar både amortering och ränta fram till att lånet är
                  återbetalt.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-3 space-y-1 text-xs text-slate-600">
              <p>
                Lånebelopp:{" "}
                <span className="font-medium">
                  {formatCurrency(principal)}
                </span>
              </p>
              <p>
                Ränta:{" "}
                <span className="font-medium">
                  {annualInterest.toLocaleString("sv-SE", {
                    maximumFractionDigits: 2,
                  })}
                  {" % per år"}
                </span>
              </p>
              <p>
                Månadsbetalning:{" "}
                <span className="font-medium">
                  {formatCurrency(paymentPerMonth)}
                </span>
              </p>
            </div>

            {yearSnapshots.length > 0 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs font-medium text-slate-700">
                  Utveckling över tid (avrundade genomsnitt per månad)
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="py-1 pr-4 text-left font-medium text-slate-700">
                          År
                        </th>
                        <th className="py-1 pr-4 text-left font-medium text-slate-700">
                          Genomsnittlig månadskostnad
                        </th>
                        <th className="py-1 pr-4 text-left font-medium text-slate-700">
                          Varav ränta/månad
                        </th>
                        <th className="py-1 text-left font-medium text-slate-700">
                          Skuld vid årets slut
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearSnapshots.slice(0, 6).map((row) => (
                        <tr
                          key={row.year}
                          className="border-b border-slate-100 last:border-0"
                        >
                          <td className="py-1 pr-4 text-slate-700">
                            År {row.year}
                          </td>
                          <td className="py-1 pr-4 text-slate-700">
                            {formatCurrency(row.avgMonthlyPayment)}
                          </td>
                          <td className="py-1 pr-4 text-slate-700">
                            {formatCurrency(row.avgMonthlyInterest)}
                          </td>
                          <td className="py-1 text-slate-700">
                            {formatCurrency(row.endBalance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="rounded-md border border-amber-100 bg-amber-50 p-3">
              <p className="text-xs text-amber-900">
                Resultaten är förenklade och ska ses som en vägledning. Verklig
                återbetalningstid påverkas av ränteförändringar, amorteringskrav,
                avgifter och andra villkor i ditt låneavtal. Kontakta din bank
                eller en oberoende rådgivare för personlig rådgivning.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
