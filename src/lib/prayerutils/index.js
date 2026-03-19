import month1 from "./1.json";
import month2 from "./2.json";
import month3 from "./3.json";
import month4 from "./4.json";
import month5 from "./5.json";
import month6 from "./6.json";
import month7 from "./7.json";
import month8 from "./8.json";
import month9 from "./9.json";
import month10 from "./10.json";
import month11 from "./11.json";
import month12 from "./12.json";

export const monthToJsonFile = [
  { month: "1", file: month1 },
  { month: "2", file: month2 },
  { month: "3", file: month3 },
  { month: "4", file: month4 },
  { month: "5", file: month5 },
  { month: "6", file: month6 },
  { month: "7", file: month7 },
  { month: "8", file: month8 },
  { month: "9", file: month9 },
  { month: "10", file: month10 },
  { month: "11", file: month11 },
  { month: "12", file: month12 },
];

/**
 * Thank you chatGPT! I dont have time for ts anymore!! Normalize a prayer-time row for stricter clients (New APP).
 * - Ensures `Dat` is a number (1-31) when possible.
 * - Keeps time fields as strings ("HH:mm").
 * @param {{ [x: string]: any }} row
 */
export function normalizePrayerTimesRow(row) {
  const datNum = Number(row.Dat);
  return {
    ...row,
    Dat: Number.isFinite(datNum) ? datNum : row.Dat,
  };
}

/**
 * @param {any[]} rows
 */
export function normalizePrayerTimesMonth(rows) {
  return rows.map(normalizePrayerTimesRow);
}

/**
 * @param {{ [x: string]: any; }} prayerTimes
 */
export function getNextPrayerTime(timeObject) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentFormattedTime = `${currentHour
    .toString()
    .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;

  const prayerKeys = ["Fajr", "Shuruk", "Dhohr", "Asr", "Maghrib", "Isha"];
  const todaysPrayers = prayerKeys
    .map((key) => ({ key, time: timeObject[key] }))
    .filter((entry) => typeof entry.time === "string");

  for (let i = 0; i < todaysPrayers.length; i++) {
    if (todaysPrayers[i].time >= currentFormattedTime) {
      return todaysPrayers[i];
    }
  }

  // If there is no prayer time left today, return tomorrow's first prayer slot.
  return { key: "Fajr", time: todaysPrayers[0]?.time || "00:00" };
}

/**
 * @param {any[]} monthToJson
 * @param {any} month
 * @param {any} day
 */

export function getSpecificDayPrayerTimes(monthToJson, month, day) {
  const monthPrayerTimes = monthToJson.find(
    (element) => element.month === month
  );

  if (!monthPrayerTimes) {
    throw new Error("Invalid month");
  }

  const dayPrayerTimes = monthPrayerTimes.file.find(
    (element) => String(element.Dat) === String(day)
  );

  if (!dayPrayerTimes) {
    throw new Error("Prayer times not found for the specified day");
  }

  return dayPrayerTimes;
}

/**
 * @param {any[]} monthToJson
 * @param {any} month
 */

export function getMonthPrayerTime(monthToJson, month) {
  const monthPrayerTimes = monthToJson.find(
    (element) => element.month === month
  );

  if (!monthPrayerTimes) {
    throw new Error("Prayer times not found for the specified month");
  }

  return monthPrayerTimes.file;
}

/**
 * @param {{ getDate: () => any; getMonth: () => number; }} date
 */
export function dateToDayAndMonth(date) {
  return { day: date.getDate(), month: date.getMonth() + 1 };
}
