import month7 from "./7.json";
import month8 from "./8.json";
import month9 from "./9.json";
import month10 from "./10.json";
import month11 from "./11.json";
import month12 from "./12.json";

export const monthToJsonFile = [
  { month: "7", file: month7 },
  { month: "8", file: month8 },
  { month: "9", file: month9 },
  { month: "10", file: month10 },
  { month: "11", file: month11 },
  { month: "12", file: month12 },
];

/**
 * @param {{ [x: string]: any; }} prayerTimes
 */
export function getNextPrayerTime(obj) {
  let now = new Date();
  let times = Object.entries(obj).map(([key, time]) => {
    let [hours, minutes] = time.split(":");
    let date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );
    return { key, date };
  });

  times.sort((a, b) => a.date - b.date);

  let nextTimeObj = times.find((timeObj) => timeObj.date >= now);

  if (nextTimeObj) {
    let hours = nextTimeObj.date.getHours().toString().padStart(2, "0");
    let minutes = nextTimeObj.date.getMinutes().toString().padStart(2, "0");
    return { prayer: nextTimeObj.key, time: `${hours}:${minutes}` };
  } else {
    // If there's no next time, you can handle it accordingly, e.g., return null.
    return obj.fajr;
  }
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
    (element) => element.Dat === day
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
