<script>
  import { getNextPrayerTime } from "$lib/prayerutils";
  export let prayerTimes;

  // Calculate the next prayer time based on the received prayerTimes prop
  let nextPrayerTime = getNextPrayerTime(prayerTimes);
</script>

<article class="green5">
  <h6>
    Nästa bönetid
  </h6>
  <p>{JSON.stringify(nextPrayerTime)}</p>
</article>
