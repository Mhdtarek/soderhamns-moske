import { e as error, j as json } from "../../../../chunks/index.js";
import { a as getMonthPrayerTime, m as monthToJsonFile, b as normalizePrayerTimesMonth } from "../../../../chunks/index3.js";
function GET({ url, params }) {
  const month = url.searchParams.get("month");
  if (!month)
    throw error(400, "No month found");
  try {
    let dayPrayerTimes = getMonthPrayerTime(monthToJsonFile, month);
    return json(normalizePrayerTimesMonth(dayPrayerTimes));
  } catch (err) {
    throw error(400, err.message);
  }
}
export {
  GET
};
