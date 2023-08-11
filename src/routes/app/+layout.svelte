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
    <a class="transparent square round extra" href="/app">
      <i>home</i>
    </a>
    <a class="transparent square round extra" href="/app/bonetider">
      <i>mosque</i>
    </a>
    <a class="transparent square round extra" href="/app/nyheter">
      <i>newspaper</i>
    </a>
    <a class="transparent square round extra" href="/app/donera">
      <i>volunteer_activism</i>
    </a>
    <a class="transparent square round extra" href="/app/kontakt">
      <i>phone</i>
    </a>
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
</style>
