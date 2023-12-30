<script>
import { size, textSize, isLarger } from "$lib/stores";
import { browser } from '$app/environment'; 
  export const ssr = false;
  export const csr = false;

  let textSizeValue = 100
  let isLargerValue = false
  let isInStandalone = true

  textSize.subscribe((value) => {
		textSizeValue = value;
	});
  isLarger.subscribe((value) => {
		isLargerValue = value;
	});
  
  if (browser) {
      $: isLarger.set(Boolean(localStorage.getItem("isTextChecked")))

      const isInStandaloneMode = () =>
     (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');
     
     if (isInStandaloneMode()) {
       isInStandalone = true
      }
  }
</script>
{#if isInStandalone}
  <div class="wrapper" class:text-150={isLargerValue} style="--text-size: {textSizeValue}%">
    <slot />
    <br>
    <br>
    <br>
    <br>
    <nav class="tertiary-container green4">
      <div class="max" />
      <a data-sveltekit-preload-data="viewport" class="button square round green8" class:large={isLargerValue} href="/app">
        <i>home</i>
      </a>
      <a data-sveltekit-preload-data="viewport" class="button square round green8" class:large={isLargerValue} href="/app/bonetider">
        <i>mosque</i>
      </a>
      <a data-sveltekit-preload-data="viewport" class="button square round green8" class:large={isLargerValue} href="/app/nyheter">
        <i>newspaper</i>
      </a>
      <a data-sveltekit-preload-data="viewport" class="button square round green8" class:large={isLargerValue} href="/app/mer">
        <i>more_vert</i>
      </a>
      <div class="max" />
    </nav>
  </div>
  {:else}
  <div class="wrapper green3 noInstall">
    <h3>Instruktioner för att ladda ned</h3>
  <div class="bold">
      <div>
          1. Klicka på ikonen <iconify-icon icon="material-symbols:ios-share"></iconify-icon>
      </div>
      <div>
        2.  Skrolla ner och tryck
      </div>
      <div>
          3. Lägg till på Hem-Skärmen <iconify-icon icon="ic:baseline-add-to-home-screen"></iconify-icon>
      </div>
      <iframe src="https://www.youtube.com/embed/eVkQOHFSTig?modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&color=white&disablekb=1" width="400" height="400" title="Hur man laddar ner på Iphone" frameborder="0" allowfullscreen></iframe>  
  </div>
  </div>
{/if}

  <style>
  :root {
    --text-size: 100%
  }

  .respon {
    width:-webkit-fill-available;
    width:-moz-available;
    width:stretch
  }
  nav {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    left: 0;
    right: 0;
    padding: 0 20px;
  }
  .drop-up-menu {
  position: absolute; /* Position the menu absolutely */
  transform: translateY(-80%) translateX(-25%); /* Move the menu up */
  z-index: 1; /* Ensure it appears above other elements */
}

/* Add hover styles for the menu items */
.drop-up-menu a:hover {
  background-color: #f0f0f0;
}
.text-150 {
  font-size: var(--text-size)
}
.noInstall {
  height: 100vh;
  width: 100vw;
  justify-content: center;
  text-align: center;
  display: block;
  font-size: large;
}
.noInstall h3 {
  text-align: center;
  display: block;
}
</style>
