// components/tools/RantaPaRantaTool.tsx
"use client";

import { useState, useMemo } from "react";

export default function RantaPaRantaTool() {
  const [startAmount, setStartAmount] = useState<string>("10000");
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>("1000");
  const [interestRate, setInterestRate] = useState<string>("7");
  const [years, setYears] = useState<string>("10");

  const {
    totalDeposited,
    futureValue,
    totalReturn,
    months,
    effectiveAnnualRate,
  } = useMemo(() => {
    const start = parseFloat(startAmount.replace(/\s+/g, "")) || 0;
    const deposit = parseFloat(monthlyDeposit.replace(/\s+/g, "")) || 0;
    const rate = (parseFloat(interestRate.replace(",", ".")) || 0) / 100;
    const yearsNumber = parseFloat(years.replace(",", ".")) || 0;

    const m = yearsNumber > 0 ? Math.round(yearsNumber * 12) : 0;
    const monthlyRate = rate > 0 ? rate / 12 : 0;

    let fv = start;
    if (m > 0 && monthlyRate > 0) {
      // Ränta-på-ränta på startbelopp
      fv = start * Math.pow(1 + monthlyRate, m);
      // Månadssparande med ränta-på-ränta (geometrisk serie)
      if (deposit > 0) {
        fv += deposit * ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate);
      }
    } else if (m > 0 && monthlyRate === 0) {
      // Ingen ränta – bara sparande
      fv = start + deposit * m;
    }

    const totalDepositedCalc = start + deposit * m;
    const totalReturnCalc = fv - totalDepositedCalc;

    const effectiveAnnualRateCalc =
      rate > 0 ? (Math.pow(1 + monthlyRate, 12) - 1) * 100 : 0;

    return {
      totalDeposited: totalDepositedCalc,
      futureValue: fv,
      totalReturn: totalReturnCalc,
      months: m,
      effectiveAnnualRate: effectiveAnnualRateCalc,
    };
  }, [startAmount, monthlyDeposit, interestRate, years]);

  const hasValidPeriod = months > 0;

  const formatCurrency = (value: number) =>
    value.toLocaleString("sv-SE", {
      maximumFractionDigits: 0,
    });

  const formatPercentOneDecimal = (value: number) =>
    value.toLocaleString("sv-SE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Inputkolumn */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="startAmount"
            className="block text-sm mb-1 text-slate-800"
          >
            Startbelopp (kr)
          </label>
          <input
            id="startAmount"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={startAmount}
            onChange={(e) => setStartAmount(e.target.value)}
            placeholder="Exempel: 10 000"
          />
        </div>

        <div>
          <label
            htmlFor="monthlyDeposit"
            className="block text-sm mb-1 text-slate-800"
          >
            Månadssparande (kr/månad)
          </label>
          <input
            id="monthlyDeposit"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
            placeholder="Exempel: 1 000"
          />
        </div>

        <div>
          <label
            htmlFor="interestRate"
            className="block text-sm mb-1 text-slate-800"
          >
            Förväntad avkastning (% per år)
          </label>
          <input
            id="interestRate"
            type="number"
            inputMode="decimal"
            step="0.1"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Exempel: 7"
          />
          <p className="mt-1 text-xs text-slate-500">
            Avkastningen anges som årlig nominell ränta före skatt och avgifter.
          </p>
        </div>

        <div>
          <label
            htmlFor="years"
            className="block text-sm mb-1 text-slate-800"
          >
            Sparhorisont (år)
          </label>
          <input
            id="years"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Exempel: 10"
          />
        </div>
      </div>

      {/* Resultatkolumn */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Resultat av ditt ränta-på-ränta-sparande
        </h3>

        {!hasValidPeriod ? (
          <p className="text-sm text-slate-700">
            Fyll i ett sparbelopp, en årlig avkastning och en sparhorisont i år
            för att se en uppskattning av hur ditt kapital kan utvecklas med
            ränta på ränta.
          </p>
        ) : (
          <>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Uppskattat slutvärde efter {years || "0"} år
              </p>
              <p className="mt-1 text-3xl font-bold text-slate-900">
                {formatCurrency(futureValue)} kr
              </p>
            </div>

            <dl className="mt-4 space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between gap-4">
                <dt>Totalt insatt kapital</dt>
                <dd className="font-medium">
                  {formatCurrency(totalDeposited)} kr
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Varav ränta-på-ränta</dt>
                <dd className="font-medium">
                  {formatCurrency(totalReturn)} kr
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Antal månader</dt>
                <dd className="font-medium">{months}</dd>
              </div>
            </dl>

            {effectiveAnnualRate > 0 && (
              <p className="mt-3 text-xs text-slate-500">
                Beräkningen utgår från månadsvis insättning och ränta som
                kapitaliseras varje månad. Den effektiva årsräntan motsvarar
                ungefär{" "}
                <span className="font-semibold">
                  {formatPercentOneDecimal(effectiveAnnualRate)} %
                </span>{" "}
                per år.
              </p>
            )}

            <p className="mt-3 text-xs text-slate-500">
              Observera att detta är en förenklad modell. Verklig avkastning
              beror bland annat på marknadsutveckling, avgifter och skatt.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
