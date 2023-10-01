import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ fetch }) {
  const res = await fetch(`/api/getTodayPrayerTimes`);
  const data = await res.json();

  return { prayerTimes: data };
}
