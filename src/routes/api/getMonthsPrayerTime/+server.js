import { json, error } from "@sveltejs/kit";
import {
  monthToJsonFile,
  getMonthPrayerTime,
  dateToDayAndMonth,
} from "$lib/prayerutils";
// @ts-ignore
var getMonth = function (idx) {
  var objDate = new Date();
  objDate.setDate(1);
  objDate.setMonth(idx - 1);

  var locale = "sv-SE",
    month = objDate.toLocaleString(locale, { month: "long" });

  return month;
};
export function GET({ url, params }) {
  const today = dateToDayAndMonth(new Date());
  const month = today.month.toString();
  const Mo = getMonth(month);
  try {
    let monthPrayerTimes = getMonthPrayerTime(monthToJsonFile, month);
    return json(monthPrayerTimes);
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
  }
}
