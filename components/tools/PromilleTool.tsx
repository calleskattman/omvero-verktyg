// components/tools/PromilleTool.tsx
"use client";

import { useMemo, useState } from "react";

type Gender = "man" | "kvinna";

const inputClassName =
  "w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

export default function PromilleTool() {
  const [gender, setGender] = useState<Gender>("man");
  const [weight, setWeight] = useState<string>("");
  const [hoursSinceStart, setHoursSinceStart] = useState<string>("");

  const [beer33cl, setBeer33cl] = useState<string>("0"); // 33 cl, 4.5 %
  const [beer50cl, setBeer50cl] = useState<string>("0"); // 50 cl, 5.2 %
  const [wineGlasses, setWineGlasses] = useState<string>("0"); // 15 cl, 12 %
  const [shots, setShots] = useState<string>("0"); // 4 cl, 40 %

  const {
    totalGramsAlcohol,
    initialBac,
    currentBac,
    timeToZeroHours,
    bacCategory,
  } = useMemo(() => {
    const w = parseFloat(weight.replace(",", ".")) || 0;
    const h = parseFloat(hoursSinceStart.replace(",", ".")) || 0;

    const nBeer33 = parseFloat(beer33cl.replace(",", ".")) || 0;
    const nBeer50 = parseFloat(beer50cl.replace(",", ".")) || 0;
    const nWine = parseFloat(wineGlasses.replace(",", ".")) || 0;
    const nShots = parseFloat(shots.replace(",", ".")) || 0;

    // Alkoholinnehåll per dryck (ungefärliga värden i gram)
    // gram = volym (L) * alkoholhalt * 0.789 * 1000
    const gramsBeer33 = 0.33 * 0.045 * 0.789 * 1000; // ≈ 11,7 g
    const gramsBeer50 = 0.5 * 0.052 * 0.789 * 1000; // ≈ 20,5 g
    const gramsWine = 0.15 * 0.12 * 0.789 * 1000; // ≈ 14,2 g
    const gramsShot = 0.04 * 0.4 * 0.789 * 1000; // ≈ 12,6 g

    const totalGrams =
      nBeer33 * gramsBeer33 +
      nBeer50 * gramsBeer50 +
      nWine * gramsWine +
      nShots * gramsShot;

    if (w <= 0 || totalGrams <= 0) {
      return {
        totalGramsAlcohol: 0,
        initialBac: 0,
        currentBac: 0,
        timeToZeroHours: 0,
        bacCategory: "",
      };
    }

    const r = gender === "man" ? 0.68 : 0.55; // fördelningsfaktor (Widmark)
    const initialBac = totalGrams / (r * w); // promille

    const eliminationPerHour = 0.15; // ‰ per timme (schablon)
    const reduction = h > 0 ? eliminationPerHour * h : 0;
    const currentBac = Math.max(0, initialBac - reduction);
    const timeToZero = currentBac > 0 ? currentBac / eliminationPerHour : 0;

    let bacCategory = "";
    if (currentBac === 0) {
      bacCategory = "Ingen mätbar alkoholpromille enligt schablonen.";
    } else if (currentBac < 0.2) {
      bacCategory =
        "Under gränsen för rattfylleri, men du är troligen fortfarande påverkad.";
    } else if (currentBac < 1.0) {
      bacCategory =
        "Över gränsen för rattfylleri – du är tydligt påverkad enligt promillekalkylatorn.";
    } else {
      bacCategory =
        "Mycket hög promillehalt – kraftigt påverkad och potentiellt farligt.";
    }

    return {
      totalGramsAlcohol: totalGrams,
      initialBac,
      currentBac,
      timeToZeroHours: timeToZero,
      bacCategory,
    };
  }, [gender, weight, hoursSinceStart, beer33cl, beer50cl, wineGlasses, shots]);

  const formattedCurrentBac =
    currentBac > 0 ? currentBac.toFixed(2).replace(".", ",") : "0,00";

  const formattedInitialBac =
    initialBac > 0 ? initialBac.toFixed(2).replace(".", ",") : "0,00";

  const formattedTimeToZero =
    timeToZeroHours > 0
      ? `${Math.floor(timeToZeroHours)} h ${
          Math.round((timeToZeroHours % 1) * 60)
        } min`
      : "—";

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Inputkolumn */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            Dina uppgifter
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="promille-gender"
                className="mb-1 block text-sm text-slate-800"
              >
                Kön
              </label>
              <select
                id="promille-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender)}
                className={inputClassName}
              >
                <option value="man">Man</option>
                <option value="kvinna">Kvinna</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="promille-weight"
                className="mb-1 block text-sm text-slate-800"
              >
                Vikt (kg)
              </label>
              <input
                id="promille-weight"
                type="number"
                inputMode="decimal"
                min={30}
                max={200}
                className={inputClassName}
                placeholder="Till exempel 80"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="promille-hours"
                className="mb-1 block text-sm text-slate-800"
              >
                Tid sedan du började dricka (timmar)
              </label>
              <input
                id="promille-hours"
                type="number"
                inputMode="decimal"
                min={0}
                step={0.5}
                className={inputClassName}
                placeholder="Till exempel 3"
                value={hoursSinceStart}
                onChange={(e) => setHoursSinceStart(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            Drycker du har druckit
          </h3>
          <p className="text-xs text-slate-600">
            Ange ungefär hur många av varje dryck du har druckit under perioden
            för att räkna ut promillehalt.
          </p>

          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr,0.7fr]">
              <div>
                <label
                  htmlFor="beer33"
                  className="mb-1 block text-sm text-slate-800"
                >
                  33 cl öl (4,5 %)
                </label>
                <p className="text-xs text-slate-500">
                  Till exempel “vanlig starköl” på flaska eller burk.
                </p>
              </div>
              <input
                id="beer33"
                type="number"
                min={0}
                className={inputClassName}
                value={beer33cl}
                onChange={(e) => setBeer33cl(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr,0.7fr]">
              <div>
                <label
                  htmlFor="beer50"
                  className="mb-1 block text-sm text-slate-800"
                >
                  50 cl starköl (5,2 %)
                </label>
                <p className="text-xs text-slate-500">
                  Till exempel stor stark på restaurang.
                </p>
              </div>
              <input
                id="beer50"
                type="number"
                min={0}
                className={inputClassName}
                value={beer50cl}
                onChange={(e) => setBeer50cl(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr,0.7fr]">
              <div>
                <label
                  htmlFor="wine"
                  className="mb-1 block text-sm text-slate-800"
                >
                  Glas vin 15 cl (12 %)
                </label>
                <p className="text-xs text-slate-500">
                  Rött, vitt eller rosé – ett normalt vinglas.
                </p>
              </div>
              <input
                id="wine"
                type="number"
                min={0}
                className={inputClassName}
                value={wineGlasses}
                onChange={(e) => setWineGlasses(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr,0.7fr]">
              <div>
                <label
                  htmlFor="shots"
                  className="mb-1 block text-sm text-slate-800"
                >
                  Shots 4 cl (40 %)
                </label>
                <p className="text-xs text-slate-500">
                  Till exempel sprit, likör eller drinkar med 4 cl sprit.
                </p>
              </div>
              <input
                id="shots"
                type="number"
                min={0}
                className={inputClassName}
                value={shots}
                onChange={(e) => setShots(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Resultatkolumn */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Uppskattad alkoholpromille just nu
        </h3>

        <p className="text-sm text-slate-600">
          Beräkningen bygger på Widmarks formel och en schablon för nedbrytning
          på 0,15 ‰ per timme. Resultatet är endast en uppskattning av din
          promillehalt och ska inte användas som underlag för att avgöra om du
          får köra bil.
        </p>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Nuvarande promillehalt (ungefärlig)
          </p>
          <p className="text-4xl font-bold text-slate-900">
            {formattedCurrentBac} ‰
          </p>
          {bacCategory && (
            <p className="text-sm text-slate-700">{bacCategory}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 text-sm text-slate-800 sm:grid-cols-2">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Högsta uppskattade promillehalt
            </p>
            <p className="text-base font-semibold">
              {formattedInitialBac} ‰
            </p>
            <p className="text-xs text-slate-500">
              Uppskattad högsta alkoholpromille innan kroppen började bryta ner
              alkoholen.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Tid tills alkoholpromillen når 0 ‰ (ungefärlig)
            </p>
            <p className="text-base font-semibold">{formattedTimeToZero}</p>
            <p className="text-xs text-slate-500">
              Baserat på en genomsnittlig nedbrytningstakt på 0,15 ‰ per timme.
            </p>
          </div>
        </div>

        {totalGramsAlcohol > 0 && (
          <p className="text-xs text-slate-500">
            Totalt uppskattat alkoholintag:{" "}
            {Math.round(totalGramsAlcohol).toLocaleString("sv-SE")} gram.
          </p>
        )}
      </div>
    </div>
  );
}
