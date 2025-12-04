// components/tools/MomsTool.tsx
"use client";

import { useMemo, useState } from "react";

type PriceMode = "inkl" | "exkl";

export default function MomsTool() {
  const [mode, setMode] = useState<PriceMode>("inkl");
  const [priceInput, setPriceInput] = useState<string>("");
  const [vatRate, setVatRate] = useState<string>("25");

  const parsedPrice = useMemo(
    () => parseFloat(priceInput.replace(/\s+/g, "").replace(",", ".")) || 0,
    [priceInput]
  );

  const parsedVatRate = useMemo(
    () => parseFloat(vatRate.replace(",", ".")) || 0,
    [vatRate]
  );

  const { priceExcl, vatAmount, priceIncl } = useMemo(() => {
    const vat = parsedVatRate / 100;

    if (parsedPrice <= 0 || vat <= 0) {
      return {
        priceExcl: 0,
        vatAmount: 0,
        priceIncl: 0,
      };
    }

    let excl = parsedPrice;
    let incl = parsedPrice;
    let moms = 0;

    if (mode === "inkl") {
      // priset är inklusive moms → räkna fram exklusive
      excl = parsedPrice / (1 + vat);
      moms = parsedPrice - excl;
      incl = parsedPrice;
    } else {
      // priset är exklusive moms → lägg på moms
      excl = parsedPrice;
      moms = parsedPrice * vat;
      incl = parsedPrice + moms;
    }

    return {
      priceExcl: excl,
      vatAmount: moms,
      priceIncl: incl,
    };
  }, [mode, parsedPrice, parsedVatRate]);

  const hasValidInput = parsedPrice > 0 && parsedVatRate > 0;

  const formatSek = (value: number) =>
    value.toLocaleString("sv-SE", {
      style: "currency",
      currency: "SEK",
      maximumFractionDigits: 0,
    });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Input-kolumn */}
      <div className="space-y-4">
        <div>
          <span className="block text-sm mb-1 text-slate-800">
            Vad vill du räkna på?
          </span>
          <div className="flex flex-col gap-2 text-sm text-slate-800 sm:flex-row">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="moms-mode"
                value="inkl"
                checked={mode === "inkl"}
                onChange={() => setMode("inkl")}
                className="h-4 w-4 border-slate-300 text-blue-700 focus:ring-blue-500"
              />
              <span>Pris inklusive moms</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="moms-mode"
                value="exkl"
                checked={mode === "exkl"}
                onChange={() => setMode("exkl")}
                className="h-4 w-4 border-slate-300 text-blue-700 focus:ring-blue-500"
              />
              <span>Pris exklusive moms</span>
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="moms-price"
            className="block text-sm mb-1 text-slate-800"
          >
            Pris ({mode === "inkl" ? "inklusive moms" : "exklusive moms"})
          </label>
          <input
            id="moms-price"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
            placeholder="Till exempel 1 250"
            min={0}
          />
        </div>

        <div>
          <label
            htmlFor="moms-rate"
            className="block text-sm mb-1 text-slate-800"
          >
            Momssats (%)
          </label>
          <select
            id="moms-rate"
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={vatRate}
            onChange={(e) => setVatRate(e.target.value)}
          >
            <option value="25">25 % (standardmoms)</option>
            <option value="12">12 % (t.ex. livsmedel och restaurang)</option>
            <option value="6">6 % (t.ex. kultur och böcker)</option>
          </select>
          <p className="mt-1 text-xs text-slate-500">
            Välj den momssats som gäller för varan eller tjänsten enligt svenska
            regler.
          </p>
        </div>
      </div>

      {/* Resultat-kolumn */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Resultat för pris och moms
        </h3>

        {!hasValidInput ? (
          <p className="text-sm text-slate-700">
            Fyll i pris och momssats för att se pris exklusive moms, själva
            momsbeloppet och pris inklusive moms. Du kan växla mellan att
            utgå från pris med eller utan moms.
          </p>
        ) : (
          <>
            <dl className="space-y-2 text-sm text-slate-800">
              <div className="flex items-center justify-between gap-4">
                <dt>Pris exklusive moms</dt>
                <dd className="font-medium">{formatSek(priceExcl)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Momsbelopp</dt>
                <dd className="font-medium text-emerald-700">
                  {formatSek(vatAmount)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-2 mt-2">
                <dt className="font-semibold">Pris inklusive moms</dt>
                <dd className="text-lg font-bold text-slate-900">
                  {formatSek(priceIncl)}
                </dd>
              </div>
            </dl>

            <p className="mt-3 text-xs text-slate-500">
              Beräkningarna är förenklade och tar inte hänsyn till särskilda
              undantag eller branschspecifika regler. Kontrollera alltid mot
              Skatteverkets aktuella information vid osäkerhet.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
