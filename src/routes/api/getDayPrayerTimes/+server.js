import { json, error } from "@sveltejs/kit";
import { monthToJsonFile, getSpecificDayPrayerTimes } from "$lib/prayerutils";
// @ts-ignore
export function GET({ url, params }) {
  const day = url.searchParams.get("day");
  const month = url.searchParams.get("month");

  if (!month && !day) throw error(400, "No month & day found");
  if (!day) throw error(400, "No day found");
  if (!month) throw error(400, "No month found");

  try {
    let dayPrayerTimes = getSpecificDayPrayerTimes(monthToJsonFile, month, day);
    return json(dayPrayerTimes);
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
    // Handle the error or provide an appropriate fallback
  }
}
