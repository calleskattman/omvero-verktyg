"use client";

import { useState } from "react";

function parseInput(value: string): number | null {
  if (!value.trim()) return null;
  const normalized = value.replace(",", ".").trim();
  const parsed = Number(normalized);
  if (Number.isNaN(parsed)) return null;
  return parsed;
}

function formatNumber(value: number, fractionDigits = 2): string {
  return new Intl.NumberFormat("sv-SE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export default function KmMilesTool() {
  const [kilometers, setKilometers] = useState<string>("");
  const [miles, setMiles] = useState<string>("");

  const kmValue = parseInput(kilometers);
  const milesFromKm = kmValue != null ? kmValue * 0.621371 : null;

  const milesValue = parseInput(miles);
  const kmFromMiles = milesValue != null ? milesValue * 1.60934 : null;

  const hasAnyInput = kmValue != null || milesValue != null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Inputkolumn */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="kilometers"
            className="block text-sm mb-1 text-slate-800"
          >
            Kilometer
          </label>
          <input
            id="kilometers"
            type="number"
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Till exempel 10"
            value={kilometers}
            onChange={(event) => setKilometers(event.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Skriv in ett avstånd i kilometer för att se motsvarande sträcka i
            miles.
          </p>
        </div>

        <div>
          <label htmlFor="miles" className="block text-sm mb-1 text-slate-800">
            Miles (valfritt)
          </label>
          <input
            id="miles"
            type="number"
            inputMode="decimal"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Till exempel 5"
            value={miles}
            onChange={(event) => setMiles(event.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Om du fyller i miles får du även omvandlingen tillbaka till
            kilometer.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          Omvandlingsfaktorer som används:
          <br />
          1 kilometer ≈ 0,621371 miles
          <br />
          1 mile ≈ 1,60934 kilometer
        </p>
      </div>

      {/* Resultatkolumn */}
      <div className="rounded-lg border bg-white p-4 md:p-6 space-y-4">
        <h2 className="text-base font-semibold text-slate-900">Resultat</h2>

        {!hasAnyInput && (
          <p className="text-sm text-slate-600">
            Fyll i ett värde i kilometer eller miles i fälten till vänster för
            att se omräkningen här.
          </p>
        )}

        {kmValue != null && (
          <div className="space-y-1">
            <p className="text-sm text-slate-600">
              Kilometer till miles (huvudomvandling):
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {formatNumber(kmValue)} km ≈{" "}
              {milesFromKm != null ? `${formatNumber(milesFromKm, 3)} miles` : "—"}
            </p>
          </div>
        )}

        {milesValue != null && (
          <div className="space-y-1">
            <p className="text-sm text-slate-600">
              Miles till kilometer (omvänd omvandling):
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {formatNumber(milesValue)} miles ≈{" "}
              {kmFromMiles != null ? `${formatNumber(kmFromMiles, 3)} km` : "—"}
            </p>
          </div>
        )}

        {hasAnyInput && (
          <div className="pt-2 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Värdena är avrundade för att vara lättare att läsa. För mer exakta
              beräkningar kan du använda fler decimaler i dina inmatningar eller
              tolka resultaten som ungefärliga.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
