import { json, error } from "@sveltejs/kit";
import { monthToJsonFile, getMonthPrayerTime } from "$lib/prayerutils";
// @ts-ignore
export function GET({ url, params }) {
  const month = url.searchParams.get("month");

  if (!month) throw error(400, "No month found");

  try {
    let dayPrayerTimes = getMonthPrayerTime(monthToJsonFile, month);
    return json(dayPrayerTimes);
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
  }
}
