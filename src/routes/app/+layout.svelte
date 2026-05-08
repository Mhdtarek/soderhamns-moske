<script>
  import "$lib/app-theme.css";
  import { textSize, isLarger, appTheme, SHOW_LARGER_TEXT_SETTING } from "$lib/stores";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";

  let textSizeValue = 100;
  let isLargerValue = false;
  /** @type {'light' | 'dark'} */
  let theme = "light";
  const SKIP_STANDALONE_INSTALL_GATE = true;
  let isInStandalone = SKIP_STANDALONE_INSTALL_GATE;

  textSize.subscribe((value) => {
    textSizeValue = value;
  });
  isLarger.subscribe((value) => {
    isLargerValue = value;
  });
  appTheme.subscribe((value) => {
    theme = value;
  });

  function isInStandaloneMode() {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-ignore — iOS Safari
      window.navigator.standalone ||
      document.referrer.includes("android-app://")
    );
  }

  if (browser) {
    isInStandalone = SKIP_STANDALONE_INSTALL_GATE || isInStandaloneMode();
    if (!SHOW_LARGER_TEXT_SETTING) {
      localStorage.removeItem("isTextChecked");
      isLarger.set(false);
    } else {
      isLarger.set(Boolean(localStorage.getItem("isTextChecked")));
    }
    history.scrollRestoration = "manual";
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }

  $: pathname = $page.url.pathname;

  /** @param {string} p @param {string} path */
  function navActive(p, path) {
    if (p === "home") return path === "/app" || path === "/app/";
    if (p === "bonetider") return path.startsWith("/app/bonetider");
    if (p === "nyheter") return path.startsWith("/app/nyheter");
    if (p === "mer")
      return (
        path.startsWith("/app/mer") ||
        path.startsWith("/app/kontakt") ||
        path.startsWith("/app/donera") ||
        path.startsWith("/app/installningar")
      );
    return false;
  }

  afterNavigate(() => {
    if (!browser) return;
    const shell = document.querySelector(".app-shell.wrapper");
    if (shell instanceof HTMLElement) shell.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
</script>

<svelte:head>
  <!-- Warm cache + start download early: shared hero / donera images across /app routes -->
  <link rel="preload" as="image" href="/mosque.png" />
  <link rel="preload" as="image" href="/prayermosque.png" />
  <link rel="preload" as="image" href="/mosquenews.png" />
  <link rel="preload" as="image" href="/swish-QR-large.png" />
</svelte:head>

{#if isInStandalone}
  <div
    class="wrapper app-shell"
    class:text-150={isLargerValue}
    data-theme={theme}
    style="--text-size: {textSizeValue}%; --bottom-nav-height: 4.75rem;"
  >
    <slot />
    <nav class="app-bottom-nav" aria-label="Huvudnavigering">
      <a
        data-sveltekit-preload-data="viewport"
        class="app-nav-item"
        class:active={navActive("home", pathname)}
        href="/app"
        aria-current={navActive("home", pathname) ? "page" : undefined}
      >
        <i>home</i>
        <span>Hem</span>
      </a>
      <a
        data-sveltekit-preload-data="viewport"
        class="app-nav-item"
        class:active={navActive("bonetider", pathname)}
        href="/app/bonetider"
        aria-current={navActive("bonetider", pathname) ? "page" : undefined}
      >
        <i>mosque</i>
        <span>Bönetider</span>
      </a>
      <a
        data-sveltekit-preload-data="viewport"
        class="app-nav-item"
        class:active={navActive("nyheter", pathname)}
        href="/app/nyheter"
        aria-current={navActive("nyheter", pathname) ? "page" : undefined}
      >
        <i>newspaper</i>
        <span>Nyheter</span>
      </a>
      <a
        data-sveltekit-preload-data="viewport"
        class="app-nav-item"
        class:active={navActive("mer", pathname)}
        href="/app/mer"
        aria-current={navActive("mer", pathname) ? "page" : undefined}
      >
        <i>more_vert</i>
        <span>Mer</span>
      </a>
    </nav>
  </div>
{:else}
  <div class="wrapper app-shell app-install-gate green3 noInstall">
    <h3>Lägg till appen på hemskärmen</h3>
    <p class="app-install-lead">
      Då får du större text, tydligare knappar och en enklare vy anpassad för mobil.
    </p>
    <div class="bold steps">
      <div>
        1. Tryck på <iconify-icon icon="material-symbols:ios-share" aria-hidden="true"
        ></iconify-icon>
        (dela)
      </div>
      <div>2. Scrolla nedåt i menyn</div>
      <div>
        3. Välj <strong>Lägg till på hemskärmen</strong>
        <iconify-icon icon="ic:baseline-add-to-home-screen" aria-hidden="true"></iconify-icon>
      </div>
    </div>
    <iframe
      src="https://www.youtube.com/embed/eVkQOHFSTig?modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&color=white&disablekb=1"
      width="400"
      height="400"
      title="Hur man lägger till appen på iPhone"
      allowfullscreen
    ></iframe>
  </div>
{/if}

<style>
  :root {
    --text-size: 100%;
  }

  .wrapper {
    min-height: 100vh;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: calc(var(--bottom-nav-height, 4.75rem) + env(safe-area-inset-bottom, 0px));
  }

  .text-150 {
    font-size: var(--text-size);
  }

  .noInstall {
    justify-content: center;
    text-align: center;
    display: flex;
    font-size: large;
  }

  .noInstall h3 {
    text-align: center;
    display: block;
    margin-top: 0;
  }

  .app-install-lead {
    max-width: 26rem;
    margin: 0 auto 1rem;
    color: var(--app-text-muted, #3d5247);
    font-size: 1.05rem;
    line-height: 1.5;
  }

</style>
