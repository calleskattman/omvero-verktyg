// app/api/exchange-rates/route.ts
import { NextResponse } from "next/server";
import { currencyCodes } from "@/config/currencies";

// Tidigare: const SUPPORTED_CURRENCIES = ["SEK", "EUR", ...] as const;
const SUPPORTED_CURRENCIES = currencyCodes;

// ...resten av filen kan vara som vi satte den senast (open.er-api.com-varianten)


// Gratis, nyckellöst API med EUR som bas
const EXTERNAL_API_URL = "https://open.er-api.com/v6/latest/EUR";

// Cachea svaret från externa API:t i 24 timmar (86400 sekunder)
const REVALIDATE_SECONDS = 86400;

type ExternalRatesResponse = {
  result: string;
  base_code: string;
  time_last_update_utc: string;
  rates: Record<string, number>;
};

export async function GET() {
  try {
    const res = await fetch(EXTERNAL_API_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      throw new Error(`External API responded with ${res.status}`);
    }

    const data = (await res.json()) as Partial<ExternalRatesResponse>;

    if (!data || data.result !== "success" || !data.rates) {
      throw new Error("Invalid response structure from exchange API");
    }

    const filteredRates: Record<string, number> = {};

    SUPPORTED_CURRENCIES.forEach((code) => {
      if (code === "EUR") {
        filteredRates[code] = 1;
      } else {
        const value = data.rates![code];
        if (typeof value === "number" && Number.isFinite(value)) {
          filteredRates[code] = value;
        }
      }
    });

    return NextResponse.json({
      base: "EUR",
      date: data.time_last_update_utc ?? "",
      rates: filteredRates,
    });
  } catch (error) {
    console.error("Failed to fetch exchange rates", error);
    return NextResponse.json(
      {
        error: "Det gick inte att hämta aktuella växelkurser.",
      },
      { status: 500 }
    );
  }
}
