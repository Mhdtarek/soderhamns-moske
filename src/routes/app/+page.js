import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ fetch }) {
  const [todayPrayerTimes, newestNews] = await Promise.all([
    fetch(`/api/getTodayPrayerTimes`),
    fetch(`/api/getNewestNewsPost`),
  ]);

  return {
    todayPrayerTimes: todayPrayerTimes.json(),
    newsPost: newestNews.json(),
  };
}
