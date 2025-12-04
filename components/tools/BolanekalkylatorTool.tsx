"use client";

import { useMemo, useState } from "react";

type YearSnapshot = {
  year: number;
  avgMonthlyPayment: number;
  avgMonthlyInterest: number;
  endBalance: number;
};

function formatCurrency(value: number): string {
  if (!isFinite(value) || value <= 0) return "0 kr";
  return (
    value.toLocaleString("sv-SE", {
      maximumFractionDigits: 0,
    }) + " kr"
  );
}

export function BolanekalkylatorTool() {
  const [loanAmount, setLoanAmount] = useState<string>("2500000");
  const [interestRate, setInterestRate] = useState<string>("4");
  const [amortizationRate, setAmortizationRate] = useState<string>("2");
  const [analysisYears, setAnalysisYears] = useState<string>("30");

  const {
    principal,
    annualInterest,
    amortPct,
    years,
    months,
    monthlyRate,
    monthlyAmortisation,
  } = useMemo(() => {
    const principalParsed = Number(loanAmount.replace(/\s/g, "")) || 0;
    const annualInterestParsed =
      Number(interestRate.replace(",", ".")) || 0;
    const amortPctParsed =
      Number(amortizationRate.replace(",", ".")) || 0;
    const yearsParsed = Number(analysisYears.replace(",", ".")) || 0;

    const monthsParsed = yearsParsed > 0 ? yearsParsed * 12 : 0;
    const monthlyRateParsed =
      annualInterestParsed > 0 ? annualInterestParsed / 100 / 12 : 0;

    const yearlyAmort =
      principalParsed > 0 && amortPctParsed > 0
        ? (principalParsed * amortPctParsed) / 100
        : 0;
    const monthlyAmort =
      yearlyAmort > 0 ? yearlyAmort / 12 : 0;

    return {
      principal: principalParsed,
      annualInterest: annualInterestParsed,
      amortPct: amortPctParsed,
      years: yearsParsed,
      months: monthsParsed,
      monthlyRate: monthlyRateParsed,
      monthlyAmortisation: monthlyAmort,
    };
  }, [loanAmount, interestRate, amortizationRate, analysisYears]);

  const {
    hasValidInput,
    firstMonthPayment,
    totalInterestPaid,
    totalPaid,
    endBalance,
    yearSnapshots,
  } = useMemo(() => {
    const hasValid =
      principal > 0 && months > 0 && annualInterest >= 0;

    if (!hasValid) {
      return {
        hasValidInput: false,
        firstMonthPayment: 0,
        totalInterestPaid: 0,
        totalPaid: 0,
        endBalance: principal,
        yearSnapshots: [] as YearSnapshot[],
      };
    }

    let balance = principal;
    let firstPayment = 0;
    let totalInterest = 0;
    let total = 0;
    const snapshots: YearSnapshot[] = [];

    let currentYearPayment = 0;
    let currentYearInterest = 0;

    for (let month = 1; month <= months && balance > 0; month++) {
      const interestThisMonth = balance * monthlyRate;

      // Om amorteringsprocenten är 0 räknar vi det som ett ränte-endast lån.
      const amortThisMonth =
        monthlyAmortisation > 0
          ? Math.min(monthlyAmortisation, balance)
          : 0;

      const paymentThisMonth = interestThisMonth + amortThisMonth;

      if (month === 1) {
        firstPayment = paymentThisMonth;
      }

      totalInterest += interestThisMonth;
      total += paymentThisMonth;
      balance -= amortThisMonth;

      currentYearPayment += paymentThisMonth;
      currentYearInterest += interestThisMonth;

      const isYearEnd =
        month % 12 === 0 || balance <= 0 || month === months;

      if (isYearEnd) {
        const yearNumber = Math.ceil(month / 12);
        const monthsInYear =
          month % 12 === 0 ? 12 : month % 12 || 12;

        snapshots.push({
          year: yearNumber,
          avgMonthlyPayment: currentYearPayment / monthsInYear,
          avgMonthlyInterest: currentYearInterest / monthsInYear,
          endBalance: balance,
        });

        currentYearPayment = 0;
        currentYearInterest = 0;
      }
    }

    return {
      hasValidInput: true,
      firstMonthPayment: firstPayment,
      totalInterestPaid: totalInterest,
      totalPaid: total,
      endBalance: balance,
      yearSnapshots: snapshots,
    };
  }, [
    principal,
    months,
    annualInterest,
    monthlyRate,
    monthlyAmortisation,
  ]);

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
            Ange det totala bolånebeloppet du planerar att ta, efter eventuell
            kontantinsats.
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
            Använd den nominella årsräntan för ditt bolån, till exempel 4.
          </p>
        </div>

        <div>
          <label
            htmlFor="amortizationRate"
            className="block text-sm mb-1 text-slate-800"
          >
            Amortering (% av lånebelopp per år)
          </label>
          <input
            id="amortizationRate"
            type="number"
            min={0}
            step="0.1"
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={amortizationRate}
            onChange={(e) => setAmortizationRate(e.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Standardkrav är ofta 1–3&nbsp;% per år beroende på belåningsgrad.
            Välj 0&nbsp;% om du vill räkna på ett lån utan amortering.
          </p>
        </div>

        <div>
          <label
            htmlFor="analysisYears"
            className="block text-sm mb-1 text-slate-800"
          >
            Beräkningsperiod (år)
          </label>
          <input
            id="analysisYears"
            type="number"
            min={1}
            step={1}
            inputMode="numeric"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={analysisYears}
            onChange={(e) => setAnalysisYears(e.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Hur många år framåt du vill se kostnadsbilden. Vanligt är att räkna
            på 10–30 år.
          </p>
        </div>

        <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-600">
            Kalkylen använder{" "}
            <span className="font-medium">rak amortering</span>, där du betalar
            samma amorteringsbelopp varje månad och räntan minskar när skulden
            blir lägre. Resultaten är förenklade och tar inte hänsyn till
            framtida ränteförändringar, amorteringskrav eller individuella
            bankvillkor.
          </p>
        </div>
      </div>

      {/* Resultatkolumn */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 md:p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Sammanfattning av ditt bolån
        </h3>

        {!hasValidInput ? (
          <p className="text-sm text-slate-600">
            Fyll i lånebelopp, ränta, amortering och beräkningsperiod för att
            se månadskostnad, total räntekostnad och kvarvarande skuld.
          </p>
        ) : (
          <>
            <div>
              <p className="text-sm text-slate-600">
                Beräknad månadskostnad första månaden
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {formatCurrency(firstMonthPayment)}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Detta är din ungefärliga första månads kostnad, inklusive både
                ränta och amortering med de villkor du har angett.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-slate-600">
                  Total räntekostnad under perioden
                </p>
                <p className="font-semibold text-slate-900">
                  {formatCurrency(totalInterestPaid)}
                </p>
                <p className="text-xs text-slate-500">
                  Summan av alla räntebetalningar under{" "}
                  {years.toLocaleString("sv-SE")} år, givet oförändrad ränta.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-600">
                  Total betalning under perioden
                </p>
                <p className="font-semibold text-slate-900">
                  {formatCurrency(totalPaid)}
                </p>
                <p className="text-xs text-slate-500">
                  Inkluderar både amortering och ränta under den valda
                  beräkningsperioden.
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
                Amortering:{" "}
                <span className="font-medium">
                  {amortPct.toLocaleString("sv-SE", {
                    maximumFractionDigits: 2,
                  })}
                  {" % av lånebelopp per år"}
                </span>
              </p>
              <p>
                Kvarvarande skuld efter {years} år:{" "}
                <span className="font-medium">
                  {formatCurrency(Math.max(endBalance, 0))}
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
                Kom ihåg att detta är en förenklad kalkyl. Verklig
                månadskostnad påverkas av ränteförändringar, amorteringskrav,
                avgifter och andra villkor från banken. Kontakta din bank eller
                en oberoende rådgivare för personlig rådgivning innan du fattar
                beslut.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
