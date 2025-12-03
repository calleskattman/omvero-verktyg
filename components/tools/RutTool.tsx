// components/tools/RutTool.tsx
"use client";

import { useMemo, useState } from "react";

export default function RutTool() {
  const [workCost, setWorkCost] = useState<string>("");
  const [rutPercent, setRutPercent] = useState<string>("50");

  const parsedWorkCost = useMemo(
    () => parseFloat(workCost.replace(/\s+/g, "").replace(",", ".")) || 0,
    [workCost]
  );

  const parsedRutPercent = useMemo(
    () => parseFloat(rutPercent.replace(",", ".")) || 0,
    [rutPercent]
  );

  const { rutAmount, totalBefore, totalAfter } = useMemo(() => {
    if (parsedWorkCost <= 0 || parsedRutPercent <= 0) {
      return {
        rutAmount: 0,
        totalBefore: parsedWorkCost,
        totalAfter: parsedWorkCost,
      };
    }

    const rut = Math.max(
      0,
      Math.min(parsedWorkCost, (parsedWorkCost * parsedRutPercent) / 100)
    );
    const after = Math.max(0, parsedWorkCost - rut);

    return {
      rutAmount: rut,
      totalBefore: parsedWorkCost,
      totalAfter: after,
    };
  }, [parsedWorkCost, parsedRutPercent]);

  const hasValidInput = parsedWorkCost > 0 && parsedRutPercent > 0;

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
          <label
            htmlFor="rut-work-cost"
            className="block text-sm mb-1 text-slate-800"
          >
            Arbetskostnad (SEK, inklusive moms)
          </label>
          <input
            id="rut-work-cost"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={workCost}
            onChange={(e) => setWorkCost(e.target.value)}
            placeholder="Till exempel 12 000"
            min={0}
          />
          <p className="mt-1 text-xs text-slate-500">
            Ange den del av fakturan som avser arbete som är RUT-berättigat.
          </p>
        </div>

        <div>
          <label
            htmlFor="rut-percent"
            className="block text-sm mb-1 text-slate-800"
          >
            RUT-avdrag (%){" "}
            <span className="text-slate-500">(vanligtvis 50&nbsp;%)</span>
          </label>
          <input
            id="rut-percent"
            type="number"
            inputMode="decimal"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={rutPercent}
            onChange={(e) => setRutPercent(e.target.value)}
            placeholder="Till exempel 50"
            min={0}
            max={100}
          />
          <p className="mt-1 text-xs text-slate-500">
            Du kan justera procentsatsen om reglerna ändras för en viss typ av
            RUT-tjänst.
          </p>
        </div>
      </div>

      {/* Resultat-kolumn */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Sammanställning av RUT-avdrag
        </h3>

        {!hasValidInput ? (
          <p className="text-sm text-slate-700">
            Fyll i arbetskostnad och procentsats för RUT-avdrag för att se
            hur mycket kunden betalar efter avdrag och vilket belopp som
            preliminärt dras som RUT.
          </p>
        ) : (
          <>
            <dl className="space-y-2 text-sm text-slate-800">
              <div className="flex items-center justify-between gap-4">
                <dt>Totalt arbete före RUT</dt>
                <dd className="font-medium">
                  {formatSek(totalBefore)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Beräknat RUT-avdrag</dt>
                <dd className="font-medium text-emerald-700">
                  − {formatSek(rutAmount)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-2 mt-2">
                <dt className="font-semibold">Att betala efter RUT</dt>
                <dd className="text-lg font-bold text-slate-900">
                  {formatSek(totalAfter)}
                </dd>
              </div>
            </dl>

            <p className="mt-3 text-xs text-slate-500">
              Beräkningen är förenklad och tar inte hänsyn till årsgränser,
              hur mycket RUT-avdrag kunden redan har använt eller andra regler
              hos Skatteverket. Kontrollera alltid aktuella regler och
              kundens kvarvarande utrymme innan fakturering.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
