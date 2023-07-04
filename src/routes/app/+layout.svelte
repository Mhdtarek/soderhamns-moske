<div class="wrapper">
  <slot />
  <nav class="tertiary-container green4">
    <a class="transparent square round extra" href="/app">
      <i>home</i>
    </a>

    <div class="max" />
    <a class="transparent square round extra" href="/app/bonetider">
      <i>mosque</i>
    </a>
    <a class="transparent square round extra" href="/app/nyheter">
      <i>newspaper</i>
    </a>
    <a class="transparent square round extra" href="/app/donera">
      <i>mic</i>
    </a>
  </nav>
</div>

<style>
  .wrapper {
    height: 100vh;
    position: relative;
  }
  nav {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 7vh;
    left: 0;
    right: 0;
    padding: 0 20px;
  }
</style>
