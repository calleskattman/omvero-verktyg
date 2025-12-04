// config/currencies.ts

export const currencies = [
    { code: "USD", label: "USD – Amerikansk dollar" },
    { code: "DKK", label: "DKK – Dansk krona" },
    { code: "EUR", label: "EUR – Euro" },
    { code: "NOK", label: "NOK – Norsk krona" },
    { code: "GBP", label: "GBP – Pund sterling" },
    { code: "CHF", label: "CHF – Schweizisk franc" },
    { code: "SEK", label: "SEK – Svensk krona" },
  
    { code: "AUD", label: "AUD – Australisk dollar" },
    { code: "BRL", label: "BRL – Brasilianisk real" },
    { code: "BGN", label: "BGN – Bulgarisk lev" },
    { code: "HKD", label: "HKD – Hongkong dollar" },
    { code: "INR", label: "INR – Indisk rupie" },
    { code: "IDR", label: "IDR – Indonesisk rupiah" },
    { code: "ISK", label: "ISK – Isländsk krona" },
    { code: "ILS", label: "ILS – Israelsk shekel" },
    { code: "JPY", label: "JPY – Japansk yen" },
    { code: "CAD", label: "CAD – Kanadensisk dollar" },
    { code: "CNY", label: "CNY – Kinesisk yuan Renminbi" },
    { code: "MYR", label: "MYR – Malaysisk ringgit" },
    { code: "MAD", label: "MAD – Marockansk dirham" },
    { code: "MXN", label: "MXN – Mexikansk peso" },
    { code: "NZD", label: "NZD – Nyzeeländsk dollar" },
  
    { code: "PHP", label: "PHP – Filippinsk peso" },
    { code: "PLN", label: "PLN – Polsk zloty" },
    { code: "RON", label: "RON – Rumänsk leu" },
    { code: "RUB", label: "RUB – Rysk rubel" },
    { code: "SAR", label: "SAR – Saudisk riyal" },
    { code: "SGD", label: "SGD – Singapore-dollar" },
    { code: "ZAR", label: "ZAR – Sydafrikansk rand" },
    { code: "KRW", label: "KRW – Sydkoreansk won" },
    { code: "THB", label: "THB – Thailändsk baht" },
    { code: "CZK", label: "CZK – Tjeckisk koruna" },
    { code: "TRY", label: "TRY – Turkisk lira" },
    { code: "HUF", label: "HUF – Ungersk forint" },
  ] as const;
  
  export type CurrencyCode = (typeof currencies)[number]["code"];
  
  export const currencyCodes = currencies.map((c) => c.code) as CurrencyCode[];
  