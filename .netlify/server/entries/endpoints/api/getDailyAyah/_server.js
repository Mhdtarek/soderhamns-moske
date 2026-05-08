import { e as error, j as json } from "../../../../chunks/index.js";
const SURAH_AYAH_COUNTS = [
  7,
  286,
  200,
  176,
  120,
  165,
  206,
  75,
  129,
  109,
  123,
  111,
  43,
  52,
  99,
  128,
  111,
  110,
  98,
  135,
  112,
  78,
  118,
  64,
  77,
  227,
  93,
  88,
  69,
  60,
  34,
  30,
  73,
  54,
  45,
  83,
  182,
  88,
  75,
  85,
  54,
  53,
  89,
  59,
  37,
  35,
  38,
  29,
  18,
  45,
  60,
  49,
  62,
  55,
  78,
  96,
  29,
  22,
  24,
  13,
  14,
  11,
  11,
  18,
  12,
  12,
  30,
  52,
  52,
  44,
  28,
  28,
  20,
  56,
  40,
  31,
  50,
  40,
  46,
  42,
  29,
  19,
  36,
  25,
  22,
  17,
  19,
  26,
  30,
  20,
  15,
  21,
  11,
  8,
  8,
  19,
  5,
  8,
  8,
  11,
  11,
  8,
  3,
  9,
  5,
  4,
  7,
  3,
  6,
  3,
  5,
  4,
  5,
  6
];
const TOTAL_AYAH = 6236;
function hashDayKey(key) {
  let h = 5381;
  for (let i = 0; i < key.length; i++) {
    h = (h << 5) + h + key.charCodeAt(i);
    h = h | 0;
  }
  return Math.abs(h);
}
function getStockholmDateKey(date = /* @__PURE__ */ new Date()) {
  const parts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const y = parts.find((p) => p.type === "year")?.value ?? "";
  const m = parts.find((p) => p.type === "month")?.value ?? "";
  const d = parts.find((p) => p.type === "day")?.value ?? "";
  return `${y}-${m}-${d}`;
}
function globalAyahToSurahAyah(global) {
  let n = Math.max(1, Math.min(TOTAL_AYAH, global));
  for (let s = 0; s < SURAH_AYAH_COUNTS.length; s++) {
    const c = SURAH_AYAH_COUNTS[s];
    if (n <= c)
      return { surah: s + 1, ayah: n };
    n -= c;
  }
  return { surah: 114, ayah: SURAH_AYAH_COUNTS[113] };
}
function getDailyAyahRef(date = /* @__PURE__ */ new Date()) {
  const key = getStockholmDateKey(date);
  const global = hashDayKey(key) % TOTAL_AYAH + 1;
  return { ...globalAyahToSurahAyah(global), dateKey: key };
}
const QURAN_API = "https://api.alquran.cloud/v1";
async function GET({ fetch: kitFetch }) {
  const { surah, ayah, dateKey } = getDailyAyahRef();
  const url = `${QURAN_API}/ayah/${surah}:${ayah}/editions/quran-uthmani,sv.bernstrom`;
  let res;
  try {
    res = await kitFetch(url, { headers: { Accept: "application/json" } });
  } catch {
    throw error(502, "Kunde inte nå Koran-API");
  }
  if (!res.ok)
    throw error(502, "Koran-API svarade med fel");
  let body;
  try {
    body = await res.json();
  } catch {
    throw error(502, "Ogiltigt svar från Koran-API");
  }
  if (body.code !== 200 || !Array.isArray(body.data) || body.data.length < 2) {
    throw error(502, "Koran-API returnerade oväntat data");
  }
  const editions = body.data;
  const arabic = editions.find((e) => e?.edition?.identifier === "quran-uthmani") ?? editions[0];
  const swedish = editions.find((e) => e?.edition?.identifier === "sv.bernstrom") ?? editions[1];
  return json(
    {
      dateKey,
      surahNumber: arabic.surah.number,
      surahNameAr: arabic.surah.name,
      surahNameEn: arabic.surah.englishName,
      ayahInSurah: arabic.numberInSurah,
      arabicText: arabic.text,
      swedishText: swedish.text,
      translatorNote: "Knut Bernström"
    },
    {
      headers: {
        "Cache-Control": "public, max-age=1800, s-maxage=3600"
      }
    }
  );
}
export {
  GET
};
