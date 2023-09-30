import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ fetch }) {
  const res = await fetch(`/api/getTodayPrayerTimes`);
  const data = await res.json();
  const resNews = await fetch(`/api/getNewestNewsPost`);
  const newsData = await resNews.json();

  return { res: data, newsPost: newsData };
}
