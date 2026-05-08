import { json, error } from "@sveltejs/kit";
import { enrichPrayerTimesCalendar } from "$lib/hijriDate";
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
    return json(
      enrichPrayerTimesCalendar(
        normalizePrayerTimesRow(dayPrayerTimes),
        today.year,
        today.month,
        today.day
      )
    );
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
    // Handle the error or provide an appropriate fallback
  }
}
