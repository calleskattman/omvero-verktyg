"use client";

import { useEffect, useState } from "react";
import { currencies, CurrencyCode } from "@/config/currencies";

type ExchangeRatesResponse = {
  base: string;
  date: string;
  rates: Record<CurrencyCode, number>;
};

function parseNumber(value: string): number {
  if (!value) return 0;
  const normalized = value.replace(",", ".").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value: number): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("sv-SE", {
    maximumFractionDigits: 2,
  }).format(value);
}

export default function ValutakonverterareTool() {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("EUR");
  const [toCurrency, setToCurrency] = useState<CurrencyCode>("SEK");
  const [feePercent, setFeePercent] = useState<string>("0");

  const [ratesData, setRatesData] = useState<ExchangeRatesResponse | null>(null);
  const [ratesLoading, setRatesLoading] = useState<boolean>(true);
  const [ratesError, setRatesError] = useState<string | null>(null);
  const [reloadIndex, setReloadIndex] = useState(0);

  // Manuell override av växelkurs om API inte fungerar eller användaren vill justera
  const [manualRate, setManualRate] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    fetch("/api/exchange-rates")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch exchange rates");
        }
        return res.json();
      })
      .then((data: ExchangeRatesResponse) => {
        if (!isMounted) return;
        setRatesData(data);
        setRatesError(null);
      })
      .catch((error: unknown) => {
        console.error("Error loading exchange rates", error);
        if (!isMounted) return;
        setRatesData(null);
        setRatesError(
          "Det gick inte att hämta aktuella växelkurser just nu. Du kan ange en egen växelkurs manuellt."
        );
      })
      .finally(() => {
        if (!isMounted) return;
        setRatesLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [reloadIndex]);

  const amountNum = parseNumber(amount);
  const feePercentNum = parseNumber(feePercent);

  // Beräkna automatisk kurs baserat på ratesData (EUR-bas)
  let autoRate = 0;
  if (
    ratesData &&
    ratesData.rates[fromCurrency] &&
    ratesData.rates[toCurrency]
  ) {
    const fromRate = ratesData.rates[fromCurrency];
    const toRate = ratesData.rates[toCurrency];
    if (fromRate > 0 && toRate > 0) {
      autoRate = toRate / fromRate;
    }
  }

  const manualRateNum = parseNumber(manualRate);
  const usedRate =
    manualRate && manualRateNum > 0
      ? manualRateNum
      : autoRate > 0
      ? autoRate
      : 0;

  const hasValidInput = amountNum > 0 && usedRate > 0;

  const convertedBeforeFee =
    hasValidInput && usedRate > 0 ? amountNum * usedRate : 0;

  const feeAmount =
    convertedBeforeFee > 0 && feePercentNum > 0
      ? (convertedBeforeFee * feePercentNum) / 100
      : 0;

  const convertedAfterFee =
    convertedBeforeFee > 0 ? convertedBeforeFee - feeAmount : 0;

  const effectiveRate =
    amountNum > 0 && convertedAfterFee > 0
      ? convertedAfterFee / amountNum
      : 0;

  const reverseRate = usedRate > 0 ? 1 / usedRate : 0;

  const showManualRateInput = Boolean(ratesError);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Vänster: inputkolumn */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm mb-1 text-slate-800"
          >
            Belopp att växla
          </label>
          <input
            id="amount"
            type="number"
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Till exempel 100"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fromCurrency"
              className="block text-sm mb-1 text-slate-800"
            >
              Från valuta
            </label>
            <select
              id="fromCurrency"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              value={fromCurrency}
              onChange={(e) =>
                setFromCurrency(e.target.value as CurrencyCode)
              }
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="toCurrency"
              className="block text-sm mb-1 text-slate-800"
            >
              Till valuta
            </label>
            <select
              id="toCurrency"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value as CurrencyCode)}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="feePercent"
            className="block text-sm mb-1 text-slate-800"
          >
            Växlingsavgift (%)
          </label>
          <input
            id="feePercent"
            type="number"
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={feePercent}
            onChange={(e) => setFeePercent(e.target.value)}
            placeholder="Till exempel 1.5"
          />
          <p className="mt-1 text-xs text-slate-500">
            Om din bank inte tar någon avgift kan du ange 0&nbsp;%.
          </p>
        </div>

        {ratesLoading && (
          <p className="text-xs text-slate-500">
            Hämtar aktuella växelkurser&hellip;
          </p>
        )}

        {ratesError && (
          <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2">
            <p className="text-xs text-amber-900">{ratesError}</p>
          </div>
        )}

        {showManualRateInput && (
          <div>
            <label
              htmlFor="manualRate"
              className="block text-sm mb-1 text-slate-800"
            >
              Egen växelkurs (1 {fromCurrency} i {toCurrency})
            </label>
            <input
              id="manualRate"
              type="number"
              inputMode="decimal"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={manualRate}
              onChange={(e) => setManualRate(e.target.value)}
              placeholder="Till exempel 11.0"
            />
            <p className="mt-1 text-xs text-slate-500">
              Ange en egen växelkurs om du vill räkna med bankens exakta kurs.
            </p>
          </div>
        )}

        {!ratesLoading && ratesData && !ratesError && (
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs text-slate-500">
              Kurserna baseras på Europeiska centralbankens dagliga
              referenskurser (via exchangerate.host).
            </p>
            <button
              type="button"
              onClick={() => {
                // här är det helt okej att sätta state – detta är en event-handler, inte en effect
                setRatesLoading(true);
                setRatesError(null);
                setReloadIndex((x) => x + 1);
              }}
              className="whitespace-nowrap rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              Uppdatera kurser
            </button>
          </div>
        )}

        <p className="text-xs text-slate-500">
          Resultaten är förenklade och ska ses som en uppskattning. Kontrollera
          alltid exakta belopp och avgifter hos din bank eller växlingstjänst
          innan du genomför en växling.
        </p>
      </div>

      {/* Höger: resultatkolumn */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 md:p-6 space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">
          Resultat av valutakonverteringen
        </h3>

        {!hasValidInput ? (
          <p className="text-sm text-slate-600">
            Fyll i ett belopp och säkerställ att en växelkurs finns tillgänglig
            för att se resultatet.
          </p>
        ) : (
          <>
            <p className="text-sm text-slate-600">
              Du växlar{" "}
              <span className="font-medium">
                {formatNumber(amountNum)} {fromCurrency}
              </span>{" "}
              till <span className="font-medium">{toCurrency}</span> med en
              växelkurs på ungefär{" "}
              <span className="font-medium">
                1 {fromCurrency} = {formatNumber(usedRate)} {toCurrency}
              </span>{" "}
              och en avgift på{" "}
              <span className="font-medium">
                {formatNumber(feePercentNum)} %
              </span>
              .
            </p>

            <div className="mt-2 rounded-md bg-slate-50 border border-slate-200 px-4 py-3 space-y-1">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Beräknat belopp efter avgift
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {formatNumber(convertedAfterFee)} {toCurrency}
              </p>
              <p className="text-xs text-slate-600">
                Innan avgift:{" "}
                <span className="font-medium">
                  {formatNumber(convertedBeforeFee)} {toCurrency}
                </span>
                . Avgifter:{" "}
                <span className="font-medium">
                  {formatNumber(feeAmount)} {toCurrency}
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 mt-2">
              <div className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Effektiv växelkurs efter avgift
                </p>
                <p className="font-semibold">
                  1 {fromCurrency} ≈ {formatNumber(effectiveRate)}{" "}
                  {toCurrency}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Visar den faktiska kursen du får när växlingsavgiften är
                  borträknad.
                </p>
              </div>

              <div className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Omräknad baklänges
                </p>
                <p className="font-semibold">
                  1 {toCurrency} ≈ {formatNumber(reverseRate)}{" "}
                  {fromCurrency}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Hjälper dig att jämföra mot andra kurser i motsatt riktning.
                </p>
              </div>
            </div>

            {ratesData && !ratesError && (
              <p className="text-xs text-slate-500 mt-2">
                Senast uppdaterade växelkurser:{" "}
                <span className="font-medium">{ratesData.date}</span>.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
