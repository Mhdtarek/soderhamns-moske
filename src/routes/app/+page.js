// @ts-ignore
export async function load({ fetch }) {
  const [todayPrayerTimes, newestNews, dailyAyahRes] = await Promise.all([
    fetch(`/api/getTodayPrayerTimes`),
    fetch(`/api/getNewestNewsPost`),
    fetch(`/api/getDailyAyah`),
  ]);

  return {
    todayPrayerTimes: todayPrayerTimes.json(),
    newsPost: newestNews.json(),
    dailyAyah: dailyAyahRes.ok ? dailyAyahRes.json() : null,
  };
}
