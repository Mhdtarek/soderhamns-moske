<svelte:head>
  
</svelte:head>
<div class="wrapper">
  <slot />
  <br>
  <br>
  <br>
  <br>
  <nav class="tertiary-container green3">
    <div class="max" />
    <a class="button square round green8" href="/app">
      <i>home</i>
    </a>
    <a class="button square round green8" href="/app/bonetider">
      <i>mosque</i>
    </a>
    <a class="button square round green8" href="/app/nyheter">
      <i>newspaper</i>
    </a>
    <button class="button square round green8">
      <i>arrow_drop_up</i>
      <menu class="no-wrap drop-up-menu dark">
        <a href="/app/donera" class="row">
          <i>volunteer_activism</i>
          <span>Donera</span>
        </a>
        <a href="/app/kontakt" class="row">
          <i>phone</i>
          <span>Kontakta</span>
        </a>
      </menu>
    </button>
    <div class="max" />
  </nav>
</div>

<style>
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

</style>
