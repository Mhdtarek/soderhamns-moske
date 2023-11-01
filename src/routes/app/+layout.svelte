<script>
import { size, textSize, isLarger } from "$lib/stores";
import { browser } from '$app/environment'; 
  export const ssr = false;
  export const csr = false;

  let textSizeValue = 100
  let isLargerValue = false

  textSize.subscribe((value) => {
		textSizeValue = value;
	});
  isLarger.subscribe((value) => {
		isLargerValue = value;
	});
  
  if (browser) {
      $: isLarger.set(Boolean(localStorage.getItem("isTextChecked")))
  }
</script>

<div class="wrapper" class:text-150={isLargerValue} style="--text-size: {textSizeValue}%">
  <slot />
  <br>
  <br>
  <br>
  <br>
  <nav class="tertiary-container green3">
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
    <button class="button square round green8" class:large={isLargerValue}>
      <i>arrow_drop_up</i>
      <menu class="no-wrap drop-up-menu dark">
        <a data-sveltekit-preload-data="viewport" href="/app/donera" class="row">
          <i>volunteer_activism</i>
          <span>Donera</span>
        </a>
        <a data-sveltekit-preload-data="viewport" href="/app/kontakt" class="row">
          <i>phone</i>
          <span>Kontakta</span>
        </a>
        <a data-sveltekit-preload-data="viewport" href="/app/installningar" class="row">
          <i>settings</i>
          <span>Inställningar</span>
        </a>
      </menu>
    </button>
    <div class="max" />
  </nav>
</div>

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
table {

}
</style>
