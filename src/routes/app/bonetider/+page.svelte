<script>
  import { onMount } from "svelte";
import { forEachChild } from "typescript";
  let yesterdayPrayerTimes = {}
  let todayPrayerTimes = {}
  let tommorowPrayerTimes = {}
  /**
* @type {any[]}
*/
  let monthlyPrayerTimes = []
  let monthsPrayerTimesImage = ""
  onMount(async () => {
    fetch("/api/getTodayPrayerTimes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        todayPrayerTimes = data;
      })
      .catch(function (error) {
        console.log(error);
      });
    fetch("/api/getTommorowPrayerTimes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tommorowPrayerTimes = data;
      })
      .catch(function (error) {
        console.log(error);
      });
    fetch("/api/getYesterdayPrayerTimes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        yesterdayPrayerTimes = data;
      })  
      .catch(function (error) { 
        console.log(error); 
      }); 
    fetch("/api/getYesterdayPrayerTimes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        yesterdayPrayerTimes = data;
      })  
      .catch(function (error) { 
        console.log(error); 
      }); 
    fetch("/api/getMonthsPrayerTime")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        monthlyPrayerTimes = data;
      })  
      .catch(function (error) { 
        console.log(error); 
      }); 
    fetch("/api/getMonthsPrayerImage")
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        console.log(data)
        monthsPrayerTimesImage = data
      })  
      .catch(function (error) { 
        console.log(error); 
      }); 
  }); 
  function downloadImage() {
    const link = document.createElement("a");
    link.href = monthsPrayerTimesImage;
    link.download = "image.png";
    link.click();
  }
</script>
<main class="responsive">
  <article class="no-padding border primary-container">
    <img class="responsive medium" src="/prayermosque.png"><!----><!---->
    <div class="absolute bottom left right padding bottom-shadow white-text">
      <nav>
        <h5 style="text-align: center; display: block;">Bönetider</h5>
        <div class="max"></div>
        <a href="/app/kontakt" class="circle transparent">
          <i>phone</i>
        </a>
      </nav>
    </div>
  </article>
  <div class="tabs center-align min">
    <a data-ui="#page1">Bönetider igår</a>
    <a data-ui="#page2" class="active">Bönetider idag</a>
    <a data-ui="#page3">Bönetider imorgon</a>
  </div>
  
  <div class="page" id="page1">
    <article class="card green5" style="overflow: scroll;">
      Datum: {yesterdayPrayerTimes.Dat}  
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
            <th>{yesterdayPrayerTimes.Fajr}</th>
          </tr>
          <tr>
            <th>Dhohr</th>
            <th>{yesterdayPrayerTimes.Dhohr}</th>
          </tr>
          <tr>
            <th>Asr</th>
            <th>{yesterdayPrayerTimes.Asr}</th>
          </tr>
          <tr>
            <th>Magrib</th>
            <th>{yesterdayPrayerTimes.Magrib}</th>
          </tr>
          <tr>
            <th>Isha</th>
            <th>{yesterdayPrayerTimes.Isha}</th>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
  <div class="page active" id="page2">
    <article class="card green5" style="overflow: scroll;">
      Datum: {todayPrayerTimes.Dat}
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
            <th>{todayPrayerTimes.Fajr}</th>
          </tr>
          <tr>
            <th>Dhohr</th>
            <th>{todayPrayerTimes.Dhohr}</th>
          </tr>
          <tr>
            <th>Asr</th>
            <th>{todayPrayerTimes.Asr}</th>
          </tr>
          <tr>
            <th>Magrib</th>
            <th>{todayPrayerTimes.Magrib}</th>
          </tr>
          <tr>
            <th>Isha</th>
            <th>{todayPrayerTimes.Isha}</th>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
  <div class="page" id="page3">
    <article class="card green5" style="overflow: scroll;">
      Datum: {tommorowPrayerTimes.Dat}
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
            <th>{tommorowPrayerTimes.Fajr}</th>
          </tr>
          <tr>
            <th>Dhohr</th>
            <th>{tommorowPrayerTimes.Dhohr}</th>
          </tr>
          <tr>
            <th>Asr</th>
            <th>{tommorowPrayerTimes.Asr}</th>
          </tr>
          <tr>
            <th>Magrib</th>
            <th>{tommorowPrayerTimes.Magrib}</th>
          </tr>
          <tr>
            <th>Isha</th>
            <th>{tommorowPrayerTimes.Isha}</th>
          </tr>
        </tbody>
      </table>
    </article>
  </div>

  <h4 style="text-align: center; display: block; margin-top: 20px; ">Månadens bönetider</h4>
  <article class="card green5" style="overflow: scroll;">
    <table class="border large-space" style="overflow-x: scroll;">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Fajr</th>
          <th>Dhohr</th>
          <th>Asr</th>
          <th>Magrib</th>
          <th>Isha</th>
        </tr>
      </thead>
      <tbody>
        {#each monthlyPrayerTimes as dailyPrayerTimes}
          <tr>
            <th>
              {dailyPrayerTimes.Dat}
            </th>
            <th>
              {dailyPrayerTimes.Fajr}
            </th>
            <th>
              {dailyPrayerTimes.Dhohr}
            </th>
            <th>
              {dailyPrayerTimes.Asr}
            </th>
            <th>
              {dailyPrayerTimes.Magrib}
            </th>
            <th>
              {dailyPrayerTimes.Isha}
            </th>
          </tr>
        {/each}
      </tbody>
    </table>
  </article>
</main>
