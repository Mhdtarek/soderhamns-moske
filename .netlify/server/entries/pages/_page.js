import "../../chunks/index.js";
async function load({ fetch }) {
  const res = await fetch(`/api/getTodayPrayerTimes`);
  const data = await res.json();
  return { prayerTimes: data };
}
export {
  load
};
