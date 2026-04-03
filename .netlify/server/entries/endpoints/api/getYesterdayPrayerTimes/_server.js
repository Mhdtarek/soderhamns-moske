import { j as json, e as error } from "../../../../chunks/index.js";
import { e as enrichPrayerTimesCalendar } from "../../../../chunks/hijriDate.js";
import { d as dateToDayAndMonth, g as getSpecificDayPrayerTimes, m as monthToJsonFile, n as normalizePrayerTimesRow } from "../../../../chunks/index3.js";
function GET() {
  const t = dateToDayAndMonth(/* @__PURE__ */ new Date());
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
    throw error(400, err.message);
  }
}
export {
  GET
};
