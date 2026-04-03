import { json, error } from "@sveltejs/kit";
import { enrichPrayerTimesCalendar } from "$lib/hijriDate";
import {
  monthToJsonFile,
  getSpecificDayPrayerTimes,
  dateToDayAndMonth,
  normalizePrayerTimesRow,
} from "$lib/prayerutils";

// @ts-ignore
export function GET() {
  const t = dateToDayAndMonth(new Date());
  let y = t.year;
  let m = t.month;
  let d = t.day - 1;
  if (d < 1) {
    m -= 1;
    if (m < 1) {
      m = 12;
      y -= 1;
    }
    d = new Date(y, m, 0).getDate();
  }

  const monthStr = String(m);
  const dayStr = String(d);

  try {
    const dayPrayerTimes = getSpecificDayPrayerTimes(
      monthToJsonFile,
      monthStr,
      dayStr
    );
    return json(
      enrichPrayerTimesCalendar(normalizePrayerTimesRow(dayPrayerTimes), y, m, d)
    );
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
  }
}
