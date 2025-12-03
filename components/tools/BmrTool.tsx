// components/tools/BmrTool.tsx
"use client";

import { useMemo, useState } from "react";

type SexOption = "man" | "kvinna";

export default function BmrTool() {
  const [sex, setSex] = useState<SexOption>("man");
  const [age, setAge] = useState<string>("30");
  const [weightKg, setWeightKg] = useState<string>("80");
  const [heightCm, setHeightCm] = useState<string>("180");

  const parsedAge = parseInt(age.replace(/\s+/g, ""), 10);
  const parsedWeight = parseFloat(weightKg.replace(/\s+/g, "").replace(",", "."));
  const parsedHeight = parseFloat(heightCm.replace(/\s+/g, "").replace(",", "."));

  const { bmr, maintenanceLow, maintenanceMedium, maintenanceHigh } = useMemo(() => {
    if (!parsedAge || !parsedWeight || !parsedHeight) {
      return {
        bmr: 0,
        maintenanceLow: 0,
        maintenanceMedium: 0,
        maintenanceHigh: 0,
      };
    }

    // Mifflin-St Jeor-formeln
    const base =
      10 * parsedWeight + 6.25 * parsedHeight - 5 * parsedAge + (sex === "man" ? 5 : -161);

    const roundedBmr = Math.round(base);

    // Enkla uppskattningar för energibehov per dag
    const low = Math.round(roundedBmr * 1.2); // stillasittande
    const medium = Math.round(roundedBmr * 1.45); // lätt till måttligt aktiv
    const high = Math.round(roundedBmr * 1.7); // mycket aktiv

    return {
      bmr: roundedBmr,
      maintenanceLow: low,
      maintenanceMedium: medium,
      maintenanceHigh: high,
    };
  }, [parsedAge, parsedWeight, parsedHeight, sex]);

  const hasValidInput = bmr > 0;

  const formatKcal = (value: number) =>
    value.toLocaleString("sv-SE", {
      maximumFractionDigits: 0,
    });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Input-kolumn */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="bmr-sex"
            className="block text-sm mb-1 text-slate-800"
          >
            Kön
          </label>
          <select
            id="bmr-sex"
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={sex}
            onChange={(e) => setSex(e.target.value as SexOption)}
          >
            <option value="man">Man</option>
            <option value="kvinna">Kvinna</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="bmr-age"
            className="block text-sm mb-1 text-slate-800"
          >
            Ålder (år)
          </label>
          <input
            id="bmr-age"
            type="number"
            inputMode="numeric"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Till exempel 30"
            min={10}
            max={100}
          />
        </div>

        <div>
          <label
            htmlFor="bmr-weight"
            className="block text-sm mb-1 text-slate-800"
          >
            Vikt (kg)
          </label>
          <input
            id="bmr-weight"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            placeholder="Till exempel 80"
            min={30}
            max={250}
          />
        </div>

        <div>
          <label
            htmlFor="bmr-height"
            className="block text-sm mb-1 text-slate-800"
          >
            Längd (cm)
          </label>
          <input
            id="bmr-height"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={heightCm}
            onChange={(e) => setHeightCm(e.target.value)}
            placeholder="Till exempel 180"
            min={120}
            max={230}
          />
        </div>
      </div>

      {/* Resultat-kolumn */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Uppskattad BMR (basalmetabolism)
        </h3>

        {!hasValidInput ? (
          <p className="text-sm text-slate-700">
            Fyll i kön, ålder, vikt och längd för att beräkna din uppskattade
            basalmetabolism (BMR) – den mängd energi kroppen gör av med i vila
            under ett dygn.
          </p>
        ) : (
          <>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Beräknad BMR
              </p>
              <p className="mt-1 text-3xl font-bold text-slate-900">
                {formatKcal(bmr)} kcal/dag
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-slate-900">
                Grov uppskattning av dagligt energibehov*
              </p>
              <dl className="mt-2 space-y-1 text-sm text-slate-700">
                <div className="flex items-center justify-between gap-4">
                  <dt>Stillasittande (lite eller ingen träning)</dt>
                  <dd className="font-medium">
                    {formatKcal(maintenanceLow)} kcal/dag
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt>Lätt–måttligt aktiv</dt>
                  <dd className="font-medium">
                    {formatKcal(maintenanceMedium)} kcal/dag
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt>Mycket aktiv</dt>
                  <dd className="font-medium">
                    {formatKcal(maintenanceHigh)} kcal/dag
                  </dd>
                </div>
              </dl>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              *Beräkningarna är ungefärliga och baseras på Mifflin-St Jeor-formeln
              för BMR samt enkla aktivitetsfaktorer. Använd resultaten som en
              grov vägledning – inte som medicinsk rådgivning.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
