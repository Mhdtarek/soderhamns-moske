import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ fetch }) {
  const todayPrayerTimes = await fetch(`/api/getTodayPrayerTimes`);
  const newestNews = await fetch(`/api/getNewestNewsPost`);

  return {
    todayPrayerTimes: todayPrayerTimes.json(),
    newsPost: newestNews.json(),
  };
}
