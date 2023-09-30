<script>
  import { onMount } from "svelte";
  import PrayerTimes from "../../../components/PrayerTimes.svelte";

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
    <PrayerTimes PrayerTimes={yesterdayPrayerTimes} />
  </div>
  <div class="page active" id="page2">
    <PrayerTimes PrayerTimes={todayPrayerTimes} />
  </div>
  <div class="page" id="page3">
    <PrayerTimes PrayerTimes={tommorowPrayerTimes} />
  </div>

  <h4 style="text-align: center; display: block; margin-top: 20px; ">Månadens bönetider</h4>
  <article class="card green5" style="overflow: scroll;">
    <table class="border large-space" style="overflow-x: scroll; --text-size: {textSizeValue}%">
      <thead>
        <tr>
          <th class:larger={isLargerValue}>Datum</th>
          <th class:larger={isLargerValue}>Fajr</th>
          <th class:larger={isLargerValue}>Shuruk</th>
          <th class:larger={isLargerValue}>Dhohr</th>
          <th class:larger={isLargerValue}>Asr</th>
          <th class:larger={isLargerValue}>Maghrib</th>
          <th class:larger={isLargerValue}>Isha</th>
        </tr>
      </thead>
      <tbody>
        {#each monthlyPrayerTimes as dailyPrayerTimes}
          <tr>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Dat}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Fajr}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Shuruk}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Dhohr}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Asr}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Maghrib}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Isha}
            </th>
          </tr>
        {/each}
      </tbody>
    </table>
  </article>
</main>
<style>
  .tabs>a.active {
    color: rgb(56, 142, 60);
    border-bottom: 0.125rem solid rgb(56, 142, 60)
  }
  .larger {
    font-size: var(--text-size)
  }
</style>