"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

type Area = "SE1" | "SE2" | "SE3" | "SE4";

type ElprisEntry = {
  time_start: string;
  time_end: string;
  SEK_per_kWh?: number;
};

type FetchState = "idle" | "loading" | "success" | "error";

type ChartPoint = {
  time: string;
  valueOre: number;
};

export default function ElprisTool() {
  const [area, setArea] = useState<Area>("SE3");
  const [prices, setPrices] = useState<ElprisEntry[]>([]);
  const [state, setState] = useState<FetchState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [reloadIndex, setReloadIndex] = useState(0);
  const [dayType, setDayType] = useState<"today" | "tomorrow">("today");

  // ----------------------------------------------------------------------------
  // Hämta data (IDAG eller IMORGON)
  // ----------------------------------------------------------------------------

  useEffect(() => {
    const fetchPrices = async () => {
      setState("loading");
      setErrorMessage(null);

      try {
        const now = new Date();
        const target = new Date(now);

        if (dayType === "tomorrow") {
          target.setDate(target.getDate() + 1);
        }

        const year = target.getFullYear();
        const month = String(target.getMonth() + 1).padStart(2, "0");
        const day = String(target.getDate()).padStart(2, "0");

        const url = `https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_${area}.json`;

        const res = await fetch(url, { cache: "no-store" });

        if (!res.ok) {
          // Inga prisdata hittades (t.ex. imorgon innan Nord Pool släppt priserna)
          console.warn("Inga prisdata hittades för vald dag.");
          setPrices([]); // töm listan så grafen blir tom
          setState("error"); // använd den befintliga state-maskinen
  
          if (dayType === "tomorrow") {
            setErrorMessage("Elpriserna för imorgon är inte publicerade ännu.");
          } else {
            setErrorMessage("Kunde inte hämta elpriser.");
          }
  
          return; // avbryt funktionen utan att kasta fel
        }
  
        const data = (await res.json()) as ElprisEntry[];  

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("Inga prisdata hittades.");
        }

        setPrices(data);
        setState("success");
      } catch (err) {
        console.error(err);
        setPrices([]);
        setState("error");

        if (dayType === "tomorrow") {
          setErrorMessage("Elpriserna för imorgon är inte publicerade ännu.");
        } else {
          setErrorMessage("Kunde inte hämta elpriser.");
        }
      }
    };

    fetchPrices();
  }, [area, reloadIndex, dayType]);

  const entriesWithPrice = useMemo(
    () =>
      prices.filter(
        (entry) =>
          typeof entry.SEK_per_kWh === "number" &&
          entry.SEK_per_kWh != null &&
          !Number.isNaN(entry.SEK_per_kWh)
      ),
    [prices]
  );

  // ----------------------------------------------------------------------------
  // FORMATERING
  // ----------------------------------------------------------------------------

  const formatOrePerKWh = (value: number | undefined | null) => {
    if (typeof value !== "number") return "–";
    return `${(value * 100).toFixed(1)} öre/kWh`;
  };

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatTimeRange = (entry: ElprisEntry | null) => {
    if (!entry) return "–";
    return `${formatTime(new Date(entry.time_start))}–${formatTime(
      new Date(entry.time_end)
    )}`;
  };

  // ----------------------------------------------------------------------------
  // STATISTIK
  // ----------------------------------------------------------------------------

  const stats = useMemo(() => {
    if (!entriesWithPrice.length) {
      return { avg: 0, min: null, max: null, current: null };
    }

    const sum = entriesWithPrice.reduce(
      (acc, cur) => acc + (cur.SEK_per_kWh ?? 0),
      0
    );
    const avg = sum / entriesWithPrice.length;

    let min = entriesWithPrice[0];
    let max = entriesWithPrice[0];

    for (const entry of entriesWithPrice) {
      if ((entry.SEK_per_kWh ?? 0) < (min.SEK_per_kWh ?? 0)) min = entry;
      if ((entry.SEK_per_kWh ?? 0) > (max.SEK_per_kWh ?? 0)) max = entry;
    }

    // nuvarande timme endast när "idag"
    let current: ElprisEntry | null = null;
    if (dayType === "today") {
      const now = new Date();
      for (const entry of entriesWithPrice) {
        const s = new Date(entry.time_start);
        const e = new Date(entry.time_end);
        if (now >= s && now < e) current = entry;
      }
    }

    return { avg, min, max, current };
  }, [entriesWithPrice, dayType]);

  // ----------------------------------------------------------------------------
  // GRAF
  // ----------------------------------------------------------------------------

  const chartPoints: ChartPoint[] = useMemo(() => {
    return entriesWithPrice.map((entry) => ({
      time: formatTime(new Date(entry.time_start)),
      valueOre: (entry.SEK_per_kWh ?? 0) * 100,
    }));
  }, [entriesWithPrice]);

  const minMaxForDots = useMemo(() => {
    if (chartPoints.length === 0) return null;

    let min = chartPoints[0];
    let max = chartPoints[0];

    for (const p of chartPoints) {
      if (p.valueOre < min.valueOre) min = p;
      if (p.valueOre > max.valueOre) max = p;
    }

    return { min, max };
  }, [chartPoints]);

  const handleReload = () => setReloadIndex((n) => n + 1);

  // ----------------------------------------------------------------------------
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* VÄNSTER */}
      <div className="space-y-4">

        {/* Elområde */}
        <div>
          <label className="block text-sm mb-1 text-slate-800">Välj elområde</label>
          <select
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            value={area}
            onChange={(e) => setArea(e.target.value as Area)}
          >
            <option value="SE1">SE1 – Norra Sverige</option>
            <option value="SE2">SE2 – Norra Mellansverige</option>
            <option value="SE3">SE3 – Stockholm</option>
            <option value="SE4">SE4 – Södra Sverige</option>
          </select>
        </div>

        {/* IDAG / IMORGON */}
        <div className="flex gap-2">
          <button
            onClick={() => setDayType("today")}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              dayType === "today"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Idag
          </button>
          <button
            onClick={() => setDayType("tomorrow")}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              dayType === "tomorrow"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Imorgon
          </button>
        </div>

        <button
          onClick={handleReload}
          className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm"
        >
          Uppdatera priser
        </button>

      </div>

      {/* HÖGER */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">

        <h3 className="text-lg font-semibold text-slate-900">
          Dagens elpris i {area}
        </h3>

        {state === "error" && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}

        {state === "loading" && (
          <p className="text-sm">Hämtar elpriser…</p>
        )}

        {state === "success" && chartPoints.length > 0 && (
          <>
            <div>
              <p className="text-xs uppercase text-slate-500">Genomsnittligt spotpris</p>
              <p className="text-3xl font-bold text-slate-900">
                {formatOrePerKWh(stats.avg)}
              </p>
            </div>

            <dl className="text-sm text-slate-800 mt-4 space-y-1">
              {dayType === "today" && (
                <>
                  <div className="flex justify-between">
                    <dt>Nuvarande timpris</dt>
                    <dd>{formatOrePerKWh(stats.current?.SEK_per_kWh)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Tidsintervall</dt>
                    <dd>{formatTimeRange(stats.current)}</dd>
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <dt>Lägsta pris</dt>
                <dd>{formatOrePerKWh(stats.min?.SEK_per_kWh)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Högsta pris</dt>
                <dd>{formatOrePerKWh(stats.max?.SEK_per_kWh)}</dd>
              </div>
            </dl>

            {/* GRAF */}
            <div className="mt-4">
              <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">
                Elpris per timme
              </p>
              <div className="w-full rounded-md border bg-slate-50 px-2 py-3 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartPoints}
                    margin={{ top: 5, right: 10, left: 0, bottom: 15 }}
                  >
                    <XAxis
                      dataKey="time"
                      tick={{ fontSize: 9 }}
                      tickLine={false}
                      axisLine={{ stroke: "#e2e8f0" }}
                      interval="preserveStartEnd"
                      minTickGap={18}
                    />
                    <YAxis hide domain={["auto", "auto"]} />
                    <Tooltip
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      formatter={(v: any) => [
                        `${Number(v).toFixed(1)} öre/kWh`,
                        "Elpris",
                      ]}
                      labelFormatter={(label) => `Tid: ${label}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="valueOre"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 3 }}
                    />
                    {minMaxForDots && (
                      <>
                        <ReferenceDot
                          x={minMaxForDots.min.time}
                          y={minMaxForDots.min.valueOre}
                          r={3}
                          fill="#16a34a"
                          stroke="#fff"
                        />
                        <ReferenceDot
                          x={minMaxForDots.max.time}
                          y={minMaxForDots.max.valueOre}
                          r={3}
                          fill="#dc2626"
                          stroke="#fff"
                        />
                      </>
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-2 flex justify-between text-[11px]">
                <span>Billigast: <strong>{formatOrePerKWh(stats.min?.SEK_per_kWh)}</strong></span>
                <span>Dyrast: <strong>{formatOrePerKWh(stats.max?.SEK_per_kWh)}</strong></span>
                <span className="text-slate-500">1 punkt = 1 timme</span>
              </div>

            </div>
          </>
        )}
      </div>

    </div>
  );
}
