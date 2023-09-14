<script>
  import { onMount } from "svelte";

  function getNextPrayerTime(obj) {
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

  export let prayerTimes = {}
  let nextTime = {}

  onMount(async () => {
    nextTime = getNextPrayerTime(prayerTimes);

    if (nextTime) {
    console.log(`The next time is ${JSON.stringify(nextTime)}`);
    } else {
    console.log('There are no times in the object after the current time');
    }
  });
</script>

<article class="green5">
  <h6>
    Nästa bönetid
  </h6>
  <h5>{nextTime.prayer} | {nextTime.time}</h5>
  <h7></h7>
</article>
<style>
h6, h7, h5, p {
  text-align: center;
  display: block;
}


</style>