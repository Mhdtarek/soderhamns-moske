<script>
import { size, textSize, isLarger } from "$lib/stores";
import { browser } from '$app/environment'; 

  let sizeValue = ""
  let textSizeValue = 100
  let isLargerValue = false

  size.subscribe((value) => {
		sizeValue = value;
	});
  textSize.subscribe((value) => {
		textSizeValue = value;
	});
  isLarger.subscribe((value) => {
		isLargerValue = value;
	});

  export let PrayerTimes = {}
</script>
<article class="card green5" style="overflow: scroll; --text-size: {textSizeValue}%">
  Datum: {PrayerTimes.Dat}
  <table class="border large-space center-align" style="overflow-x: scroll;">
    <thead>
      <tr>
        <th class:larger={isLargerValue}>Bön</th>
        <th class:larger={isLargerValue}>Tid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class:larger={isLargerValue}>Fajr</th>
        <th class:larger={isLargerValue}>{PrayerTimes.Fajr}</th>
      </tr>
      <tr>
        <th class:larger={isLargerValue}>Shuruk</th>
        <th class:larger={isLargerValue}>{PrayerTimes.Shuruk}</th>
      </tr>
      <tr>
        <th class:larger={isLargerValue}>Dhohr</th>
        <th class:larger={isLargerValue}>{PrayerTimes.Dhohr}</th>
      </tr>
      <tr>
        <th class:larger={isLargerValue}>Asr</th>
        <th class:larger={isLargerValue}>{PrayerTimes.Asr}</th>
      </tr>
      <tr>
        <th class:larger={isLargerValue}>Maghrib</th>
        <th class:larger={isLargerValue}>{PrayerTimes.Maghrib}</th>
      </tr>
      <tr>
        <th class:larger={isLargerValue}>Isha</th>
        <th class:larger={isLargerValue}>{PrayerTimes.Isha}</th>
      </tr>
    </tbody>
  </table>
</article>

<style>
  :root {
    --text-size: 100%;
  }
  article {
    margin-top: 10px;
  }

  .larger {
    font-size: var(--text-size)
  }
</style>