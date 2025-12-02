"use client";

import { useState } from "react";

type PriceMode = "inklusive" | "exklusive";
type Direction = "forward" | "backward";

export default function RotTool() {
  const [deductionPercent, setDeductionPercent] = useState<30 | 50>(30);
  const [direction, setDirection] = useState<Direction>("forward");
  const [priceMode, setPriceMode] = useState<PriceMode>("inklusive");

  const [workCost, setWorkCost] = useState("");
  const [materialCost, setMaterialCost] = useState("");
  const [otherCost, setOtherCost] = useState("");

  const maxDeduction = 50000;

  const work = parseFloat(workCost) || 0;
  const material = parseFloat(materialCost) || 0;
  const other = parseFloat(otherCost) || 0;

  const totalBefore = work + material + other;

  const rawDeduction = work * (deductionPercent / 100);
  const deduction = Math.min(rawDeduction, maxDeduction);

  const totalAfter = totalBefore - deduction;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* VÄNSTER – INSTÄLLNINGAR & INPUTS */}
      <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6 space-y-6">
        {/* Avdragsprocent */}
        <section>
          <h3 className="font-semibold mb-2 text-slate-900">Avdragsprocent</h3>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setDeductionPercent(30)}
              className={`flex-1 rounded-full border px-3 py-2 text-sm transition ${
                deductionPercent === 30
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              30 %
              <span className="block text-xs opacity-80">
                Gäller idag (standard ROT)
              </span>
            </button>
            <button
              type="button"
              onClick={() => setDeductionPercent(50)}
              className={`flex-1 rounded-full border px-3 py-2 text-sm transition ${
                deductionPercent === 50
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              50 %
              <span className="block text-xs opacity-80">
                Alternativt avdrag
              </span>
            </button>
          </div>
        </section>

        {/* Beräkningsriktning */}
        <section>
          <h3 className="font-semibold mb-2 text-slate-900">Beräkningsriktning</h3>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setDirection("forward")}
              className={`flex-1 rounded-full border px-3 py-2 text-sm transition ${
                direction === "forward"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              Framåt
              <span className="block text-xs opacity-80">
                Från kostnader till slutpris
              </span>
            </button>
            <button
              type="button"
              onClick={() => setDirection("backward")}
              className={`flex-1 rounded-full border px-3 py-2 text-sm transition ${
                direction === "backward"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              Bakåt
              <span className="block text-xs opacity-80">
                Från slutpris till kostnader
              </span>
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Just nu beräknar verktyget alltid från kostnader till slutpris
            (framåt). Bakåt-läget är bara en visuell inställning.
          </p>
        </section>

        {/* Prisnivå */}
        <section>
          <h3 className="font-semibold mb-2 text-slate-900">Priserna är</h3>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPriceMode("inklusive")}
              className={`flex-1 rounded-full border px-3 py-2 text-sm transition ${
                priceMode === "inklusive"
                  ? "bg-slate-100 text-slate-900 border-slate-400"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              Inklusive moms
            </button>
            <button
              type="button"
              onClick={() => setPriceMode("exklusive")}
              className={`flex-1 rounded-full border px-3 py-2 text-sm transition ${
                priceMode === "exklusive"
                  ? "bg-slate-100 text-slate-900 border-slate-400"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              Exklusive moms
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            För enkelhetens skull beräknas ROT på arbetskostnaden som du anger,
            oavsett om den är inkl. eller exkl. moms.
          </p>
        </section>

        {/* Kostnadsinputs */}
        <section className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-slate-800">
              Arbetskostnad (SEK)
            </label>
            <input
              type="number"
              value={workCost}
              onChange={(e) => setWorkCost(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ange arbetskostnad"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-slate-800">
              Materialkostnad (SEK)
            </label>
            <input
              type="number"
              value={materialCost}
              onChange={(e) => setMaterialCost(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ange materialkostnad"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-slate-800">
              Övriga kostnader (SEK)
            </label>
            <input
              type="number"
              value={otherCost}
              onChange={(e) => setOtherCost(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ange övriga kostnader"
            />
          </div>
        </section>
      </div>

      {/* HÖGER – RESULTAT */}
      <div className="rounded-xl bg-blue-50 border border-blue-200 shadow-sm p-6 space-y-4">
        <div className="flex justify-between gap-4 text-sm">
          <div>
            <p className="text-slate-600">Avdragsprocent</p>
            <p className="text-xl font-semibold text-slate-900">
              {deductionPercent} %
            </p>
          </div>
          <div className="text-right">
            <p className="text-slate-600">Maximalt avdrag</p>
            <p className="text-xl font-semibold text-slate-900">
              {maxDeduction.toLocaleString("sv-SE")} kr
            </p>
          </div>
        </div>

        <hr className="border-blue-200" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-700">Total kostnad före avdrag</span>
            <span className="font-medium text-slate-900">
              {totalBefore.toLocaleString("sv-SE")} kr
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-700">ROT-avdrag</span>
            <span className="font-medium text-emerald-700">
              - {deduction.toLocaleString("sv-SE")} kr
            </span>
          </div>
        </div>

        <hr className="border-blue-200" />

        <div className="flex justify-between items-baseline">
          <div>
            <p className="text-sm text-slate-600">Slutpris efter ROT</p>
            <p className="text-2xl font-bold text-slate-900">
              {totalAfter > 0
                ? `${totalAfter.toLocaleString("sv-SE")} kr`
                : "0 kr"}
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-4">
          Beräkningen är förenklad och ska ses som en vägledning. Kontrollera
          alltid exakta regler och belopp hos Skatteverket.
        </p>
      </div>
    </div>
  );
}
