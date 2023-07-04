import { json, error } from "@sveltejs/kit";
import {
  monthToJsonFile,
  getSpecificDayPrayerTimes,
  dateToDayAndMonth,
} from "$lib/prayerutils";
// @ts-ignore
export function GET({ url, params }) {
  // @ts-ignore
  const today = dateToDayAndMonth(new Date());
  const month = today.month.toString();
  const day = today.day - 1;
  const dayString = day.toString();

  try {
    let dayPrayerTimes = getSpecificDayPrayerTimes(
      monthToJsonFile,
      month,
      dayString
    );
    return json(dayPrayerTimes);
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
    // Handle the error or provide an appropriate fallback
  }
}
