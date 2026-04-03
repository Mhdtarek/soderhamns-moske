import { j as json, e as error } from "../../../../chunks/index.js";
import { d as dateToDayAndMonth, a as getMonthPrayerTime, m as monthToJsonFile, b as normalizePrayerTimesMonth } from "../../../../chunks/index3.js";
var getMonth = function(idx) {
  var objDate = /* @__PURE__ */ new Date();
  objDate.setDate(1);
  objDate.setMonth(idx - 1);
  var locale = "sv-SE", month = objDate.toLocaleString(locale, { month: "long" });
  return month;
};
function GET({ url, params }) {
  const today = dateToDayAndMonth(/* @__PURE__ */ new Date());
  const month = today.month.toString();
  getMonth(month);
  try {
    let monthPrayerTimes = getMonthPrayerTime(monthToJsonFile, month);
    return json(normalizePrayerTimesMonth(monthPrayerTimes));
  } catch (err) {
    throw error(400, err.message);
  }
}
export {
  GET
};
