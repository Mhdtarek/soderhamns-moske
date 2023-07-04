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
export function getClosestPrayerTime(prayerTimes) {
  // Get the current date and time
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  // Convert the current time to minutes for comparison
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  // Initialize variables for the closest prayer time
  let closestPrayerTime = "";
  let closestPrayerName = "";
  let closestTimeDiff = Infinity;

  // Iterate through the prayer times and find the closest one
  for (const prayer in prayerTimes) {
    if (prayer !== "Dat") {
      const prayerName = prayer;
      const prayerTime = prayerTimes[prayer];
      const [prayerHour, prayerMinute] = prayerTime.split(":");
      const prayerTimeInMinutes =
        parseInt(prayerHour) * 60 + parseInt(prayerMinute);

      const timeDiff = Math.abs(prayerTimeInMinutes - currentTimeInMinutes);
      if (timeDiff < closestTimeDiff) {
        closestTimeDiff = timeDiff;
        closestPrayerTime = prayerTime;
        closestPrayerName = prayerName;
      }
    }
  }

  return {
    prayerTime: closestPrayerTime,
    prayerName: closestPrayerName,
  };
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
