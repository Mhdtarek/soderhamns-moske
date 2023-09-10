<script>
  export let PrayerTimes = {}
</script>
<article class="card green5" style="overflow: scroll;">
  Datum: {PrayerTimes.Dat}
  <table class="border large-space" style="overflow-x: scroll;">
    <thead>
      <tr>
        <th>Bön</th>
        <th>Tid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Fajr</th>
        <th>{PrayerTimes.Fajr}</th>
      </tr>
      <tr>
        <th>Shuruk</th>
        <th>{PrayerTimes.Shuruk}</th>
      </tr>
      <tr>
        <th>Dhohr</th>
        <th>{PrayerTimes.Dhohr}</th>
      </tr>
      <tr>
        <th>Asr</th>
        <th>{PrayerTimes.Asr}</th>
      </tr>
      <tr>
        <th>Maghrib</th>
        <th>{PrayerTimes.Maghrib}</th>
      </tr>
      <tr>
        <th>Isha</th>
        <th>{PrayerTimes.Isha}</th>
      </tr>
    </tbody>
  </table>
</article>

<style>
  article {
    margin-top: 10px;
  }
</style>