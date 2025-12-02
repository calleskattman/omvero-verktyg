"use client";

import { useState } from "react";

export default function BmiTool() {
  const [weightKg, setWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");

  const weight = parseFloat(weightKg) || 0;
  const height = parseFloat(heightCm) || 0;
  const heightMeters = height > 0 ? height / 100 : 0;

  const bmi = heightMeters > 0 && weight > 0 ? weight / (heightMeters * heightMeters) : 0;
  const bmiRounded = bmi > 0 ? Number(bmi.toFixed(1)) : 0;

  let category = "";
  let categoryDescription = "";

  if (bmiRounded > 0) {
    if (bmiRounded < 18.5) {
      category = "Undervikt";
      categoryDescription =
        "Ett BMI under 18,5 kan tyda på undervikt. Kontakta vården om du är orolig för din vikt eller hälsa.";
    } else if (bmiRounded < 25) {
      category = "Normalvikt";
      categoryDescription =
        "Ett BMI mellan 18,5 och 24,9 räknas ofta som normalvikt, men individuella variationer förekommer.";
    } else if (bmiRounded < 30) {
      category = "Övervikt";
      categoryDescription =
        "Ett BMI mellan 25 och 29,9 räknas ofta som övervikt. Prata med vården om du vill få råd kring livsstil och hälsa.";
    } else {
      category = "Fetma";
      categoryDescription =
        "Ett BMI på 30 eller högre räknas som fetma. Kontakta vården om du vill ha stöd och medicinsk bedömning.";
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* VÄNSTER – INPUTS */}
      <div className="rounded-xl bg-white border border-[var(--border-subtle)] shadow-sm p-6 space-y-6">
        <section aria-labelledby="bmi-input-rubrik">
          <h2 id="bmi-input-rubrik" className="text-lg font-semibold mb-2">
            Fyll i längd och vikt
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Ange din kroppsvikt i kilo och din längd i centimeter. Kalkylatorn räknar ut ditt BMI automatiskt.
          </p>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="bmi-weight"
                className="block text-sm mb-1 text-slate-800"
              >
                Vikt (kg)
              </label>
              <input
                id="bmi-weight"
                type="number"
                min="0"
                step="0.1"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Till exempel 72"
              />
            </div>

            <div>
              <label
                htmlFor="bmi-height"
                className="block text-sm mb-1 text-slate-800"
              >
                Längd (cm)
              </label>
              <input
                id="bmi-height"
                type="number"
                min="0"
                step="0.5"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Till exempel 180"
              />
            </div>
          </div>
        </section>
      </div>

      {/* HÖGER – RESULTAT */}
      <div className="rounded-xl bg-[var(--muted-bg)] border border-[var(--border-subtle)] shadow-sm p-6 space-y-4">
        <section aria-labelledby="bmi-resultat-rubrik">
          <h2 id="bmi-resultat-rubrik" className="text-lg font-semibold mb-2">
            Ditt BMI-resultat
          </h2>

          <div className="flex items-baseline justify-between mb-3">
            <div>
              <p className="text-sm text-slate-600">BMI-värde</p>
              <p className="text-3xl font-bold text-slate-900">
                {bmiRounded > 0 ? bmiRounded : "–"}
              </p>
            </div>
            {category && (
              <div className="text-right">
                <p className="text-sm text-slate-600">Kategori</p>
                <p className="text-base font-semibold text-slate-900">
                  {category}
                </p>
              </div>
            )}
          </div>

          <p className="text-xs text-slate-600">
            BMI beräknas som vikt i kilo delat med längden i meter i kvadrat
            (kg/m²). Det är en enkel uppskattning och tar inte hänsyn till alla
            individuella faktorer som muskelmassa, ålder och kroppssammansättning.
          </p>

          {categoryDescription && (
            <p className="text-sm text-slate-700 mt-3">
              {categoryDescription}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
