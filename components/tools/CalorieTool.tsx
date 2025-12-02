"use client";

import { useState } from "react";

type Gender = "male" | "female" | "";

type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "veryActive"
  | "";

export default function CalorieTool() {
  const [gender, setGender] = useState<Gender>("");
  const [age, setAge] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("");

  const ageNum = parseFloat(age) || 0;
  const weight = parseFloat(weightKg) || 0;
  const height = parseFloat(heightCm) || 0;

  // Basalomsättning (BMR) – Mifflin-St Jeor
  let bmr = 0;
  if (gender && ageNum > 0 && weight > 0 && height > 0) {
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * ageNum + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * ageNum - 161;
    }
  }

  // Aktivitetsfaktorer
  const activityFactors: Record<ActivityLevel, number> = {
    sedentary: 1.2, // stillasittande
    light: 1.375, // lätt aktiv
    moderate: 1.55, // medelaktiv
    active: 1.725, // mycket aktiv
    veryActive: 1.9, // elit/hard träningsnivå
    "": 0,
  };

  const activityFactor = activity ? activityFactors[activity] : 0;

  const tdee = bmr > 0 && activityFactor > 0 ? bmr * activityFactor : 0;
  const bmrRounded = bmr > 0 ? Math.round(bmr) : 0;
  const tdeeRounded = tdee > 0 ? Math.round(tdee) : 0;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* VÄNSTER – INPUTS */}
      <div className="rounded-xl bg-white border border-[var(--border-subtle)] shadow-sm p-6 space-y-6">
        <section aria-labelledby="calorie-input-rubrik">
          <h2 id="calorie-input-rubrik" className="text-lg font-semibold mb-2">
            Fyll i dina uppgifter
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Kalkylatorn uppskattar ditt dagliga kaloribehov (TDEE) utifrån kön,
            ålder, längd, vikt och aktivitetsnivå.
          </p>

          <div className="space-y-4">
            {/* Kön + ålder */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="calorie-gender"
                  className="block text-sm mb-1 text-slate-800"
                >
                  Kön
                </label>
                <select
                  id="calorie-gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as Gender)}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Välj kön</option>
                  <option value="male">Man</option>
                  <option value="female">Kvinna</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="calorie-age"
                  className="block text-sm mb-1 text-slate-800"
                >
                  Ålder (år)
                </label>
                <input
                  id="calorie-age"
                  type="number"
                  min="0"
                  step="1"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Till exempel 30"
                />
              </div>
            </div>

            {/* Längd + vikt */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="calorie-height"
                  className="block text-sm mb-1 text-slate-800"
                >
                  Längd (cm)
                </label>
                <input
                  id="calorie-height"
                  type="number"
                  min="0"
                  step="0.5"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Till exempel 180"
                />
              </div>

              <div>
                <label
                  htmlFor="calorie-weight"
                  className="block text-sm mb-1 text-slate-800"
                >
                  Vikt (kg)
                </label>
                <input
                  id="calorie-weight"
                  type="number"
                  min="0"
                  step="0.1"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Till exempel 75"
                />
              </div>
            </div>

            {/* Aktivitetsnivå */}
            <div>
              <label
                htmlFor="calorie-activity"
                className="block text-sm mb-1 text-slate-800"
              >
                Aktivitetsnivå
              </label>
              <select
                id="calorie-activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value as ActivityLevel)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Välj aktivitetsnivå</option>
                <option value="sedentary">
                  Stillasittande – lite eller ingen träning
                </option>
                <option value="light">
                  Lätt aktiv – lätt träning 1–3 dagar/vecka
                </option>
                <option value="moderate">
                  Medelaktiv – träning 3–5 dagar/vecka
                </option>
                <option value="active">
                  Mycket aktiv – hård träning 6–7 dagar/vecka
                </option>
                <option value="veryActive">
                  Extremt aktiv – mycket hård träning eller fysiskt arbete
                </option>
              </select>
            </div>
          </div>
        </section>
      </div>

      {/* HÖGER – RESULTAT */}
      <div className="rounded-xl bg-[var(--muted-bg)] border border-[var(--border-subtle)] shadow-sm p-6 space-y-4">
        <section aria-labelledby="calorie-resultat-rubrik">
          <h2 id="calorie-resultat-rubrik" className="text-lg font-semibold mb-2">
            Uppskattat kaloribehov
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm text-slate-600">Basalomsättning (BMR)</p>
                <p className="text-2xl font-bold text-slate-900">
                  {bmrRounded > 0 ? `${bmrRounded} kcal/dag` : "–"}
                </p>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm text-slate-600">
                  Totalt dagligt kaloribehov (TDEE)
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {tdeeRounded > 0 ? `${tdeeRounded} kcal/dag` : "–"}
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 mt-3">
            Beräkningen är en förenklad uppskattning baserad på den vanliga
            Mifflin–St&nbsp;Jeor-formeln och generella aktivitetsnivåer. Resultatet är
            inte medicinsk rådgivning.
          </p>

          <p className="text-xs text-slate-600 mt-2">
            Vid frågor om vikt, kost eller hälsa bör du kontakta vården eller en
            legitimerad dietist för en individuell bedömning.
          </p>
        </section>
      </div>
    </div>
  );
}
