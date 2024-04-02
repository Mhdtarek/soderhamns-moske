import { json, error } from "@sveltejs/kit";
import {
  monthToJsonFile,
  getSpecificDayPrayerTimes,
  dateToDayAndMonth,
} from "$lib/prayerutils";

// Function to get the last day of the previous month
function getLastDayOfPreviousMonth(year, month) {
  return new Date(year, month - 1, 0).getDate();
}

// @ts-ignore
export function GET({ url, params }) {
  // @ts-ignore
  const today = dateToDayAndMonth(new Date());
  let month = today.month.toString();
  let day = today.day - 1;
  const dayString = day.toString();

  // Check if today is the first day of the month
  if (day === 0) {
    // Get the last day of the previous month
    const lastDayOfPrevMonth = getLastDayOfPreviousMonth(
      today.year,
      today.month
    );
    // Set month to the previous month
    month = (today.month - 1).toString();
    // Set day to the last day of the previous month
    day = lastDayOfPrevMonth;
  }

  try {
    let dayPrayerTimes = getSpecificDayPrayerTimes(
      monthToJsonFile,
      month,
      day.toString()
    );
    return json({ ...dayPrayerTimes, month: month });
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
    // Handle the error or provide an appropriate fallback
  }
}
