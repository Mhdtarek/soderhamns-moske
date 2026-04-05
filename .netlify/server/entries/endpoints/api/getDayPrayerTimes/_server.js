import { e as error, j as json } from "../../../../chunks/index.js";
import { g as getSpecificDayPrayerTimes, m as monthToJsonFile, n as normalizePrayerTimesRow } from "../../../../chunks/index3.js";
function GET({ url, params }) {
  const day = url.searchParams.get("day");
  const month = url.searchParams.get("month");
  if (!month && !day)
    throw error(400, "No month & day found");
  if (!day)
    throw error(400, "No day found");
  if (!month)
    throw error(400, "No month found");
  try {
    let dayPrayerTimes = getSpecificDayPrayerTimes(monthToJsonFile, month, day);
    return json(normalizePrayerTimesRow(dayPrayerTimes));
  } catch (err) {
    throw error(400, err.message);
  }
}
export {
  GET
};
