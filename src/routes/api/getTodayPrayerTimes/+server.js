import { json, error } from "@sveltejs/kit";
import {
  monthToJsonFile,
  getSpecificDayPrayerTimes,
  dateToDayAndMonth,
  normalizePrayerTimesRow,
} from "$lib/prayerutils";
// @ts-ignore
export function GET({ url, params }) {
  // @ts-ignore
  const today = dateToDayAndMonth(new Date());
  const month = today.month.toString();
  const day = today.day.toString();

  try {
    let dayPrayerTimes = getSpecificDayPrayerTimes(monthToJsonFile, month, day);
    return json({ ...normalizePrayerTimesRow(dayPrayerTimes), month: Number(month) });
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
    // Handle the error or provide an appropriate fallback
  }
}
