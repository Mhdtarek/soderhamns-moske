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
export function getNextPrayerTime(prayerData) {
  const now = new Date();
  const today = now.getDate();
  const times = Object.entries(prayerData).filter(
    ([key, value]) => key !== "Dat"
  );
  const todayTimes = times.map(([key, value]) => {
    const [hour, minute] = value.split(":");
    return new Date(now.getFullYear(), now.getMonth(), today, hour, minute);
  });
  const nextPrayerTime = todayTimes.find((time) => time > now);
  if (nextPrayerTime) {
    return nextPrayerTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else {
    const tomorrowTimes = times.map(([key, value]) => {
      const [hour, minute] = value.split(":");
      return new Date(
        now.getFullYear(),
        now.getMonth(),
        today + 1,
        hour,
        minute
      );
    });
    return tomorrowTimes[0];
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
