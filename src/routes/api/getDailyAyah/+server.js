// @ts-nocheck
import { error, json } from "@sveltejs/kit";
import { getDailyAyahRef } from "$lib/dailyAyah";

const QURAN_API = "https://api.alquran.cloud/v1";

export async function GET({ fetch: kitFetch }) {
  const { surah, ayah, dateKey } = getDailyAyahRef();

  const url = `${QURAN_API}/ayah/${surah}:${ayah}/editions/quran-uthmani,sv.bernstrom`;
  let res;
  try {
    res = await kitFetch(url, { headers: { Accept: "application/json" } });
  } catch {
    throw error(502, "Kunde inte nå Koran-API");
  }

  if (!res.ok) throw error(502, "Koran-API svarade med fel");

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
      translatorNote: "Knut Bernström",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=1800, s-maxage=3600",
      },
    }
  );
}
