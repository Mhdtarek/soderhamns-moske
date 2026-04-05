import { j as json, e as error } from "../../../../chunks/index.js";
import { e as enrichPrayerTimesCalendar } from "../../../../chunks/hijriDate.js";
import { d as dateToDayAndMonth, g as getSpecificDayPrayerTimes, m as monthToJsonFile, n as normalizePrayerTimesRow } from "../../../../chunks/index3.js";
function GET({ url, params }) {
  const today = dateToDayAndMonth(/* @__PURE__ */ new Date());
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
    throw error(400, err.message);
  }
}
export {
  GET
};
