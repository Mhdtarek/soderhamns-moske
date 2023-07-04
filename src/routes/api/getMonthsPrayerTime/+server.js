import { json, error } from "@sveltejs/kit";
import {
  monthToJsonFile,
  getMonthPrayerTime,
  dateToDayAndMonth,
} from "$lib/prayerutils";
// @ts-ignore
export function GET({ url, params }) {
  const today = dateToDayAndMonth(new Date());
  const month = today.month.toString();

  try {
    let dayPrayerTimes = getMonthPrayerTime(monthToJsonFile, month);
    return json(dayPrayerTimes);
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
  }
}
