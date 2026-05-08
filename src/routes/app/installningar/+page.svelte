<script>
  import { isLarger, appTheme, SHOW_LARGER_TEXT_SETTING } from "$lib/stores";
  import { browser } from "$app/environment";

  let isTextChecked = false;

  if (browser && SHOW_LARGER_TEXT_SETTING) {
    const storedValue = localStorage.getItem("isTextChecked");
    if (storedValue !== null) isTextChecked = storedValue === "true";
  }

  $: if (SHOW_LARGER_TEXT_SETTING && browser) {
    if (isTextChecked) {
      localStorage.setItem("isTextChecked", "true");
    } else {
      localStorage.removeItem("isTextChecked");
    }
  }

  $: if (SHOW_LARGER_TEXT_SETTING) {
    isLarger.set(isTextChecked);
  }

  /** @param {Event & { currentTarget: HTMLInputElement }} e */
  function onThemeChange(e) {
    appTheme.set(e.currentTarget.checked ? "dark" : "light");
  }
</script>

<svelte:head>
  <title>APP | INSTÄLLNINGAR</title>
</svelte:head>

<main class="app-page app-settings">
  <h1>Inställningar</h1>
  {#if SHOW_LARGER_TEXT_SETTING}
    <div class="app-setting-row">
      <div class="copy">
        <h2>Större text</h2>
        <p>Större text i tabeller och viktiga rubriker.</p>
      </div>
      <label class="switch" aria-label="Större text">
        <input type="checkbox" bind:checked={isTextChecked} />
        <span></span>
      </label>
    </div>
  {/if}
  <div class="app-setting-row">
    <div class="copy">
      <h2>Mörkt läge</h2>
      <p>Mörk bakgrund och ljus text.</p>
    </div>
    <label class="switch" aria-label="Mörkt läge">
      <input
        type="checkbox"
        checked={$appTheme === "dark"}
        on:change={onThemeChange}
      />
      <span></span>
    </label>
  </div>
  {#if SHOW_LARGER_TEXT_SETTING && isTextChecked}
    <p class="settings-on" role="status">Större text är på.</p>
  {/if}
</main>

<style>
  .app-settings {
    padding-top: 1.25rem;
  }

  h1 {
    text-align: center;
    margin: 0 0 1.25rem;
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.125rem;
    margin: 0 0 0.35rem;
  }

  .copy p {
    margin: 0;
    font-size: 1rem;
    color: var(--app-text-muted, #3d5247);
    line-height: 1.45;
  }

  .settings-on {
    margin: 1rem 0 0;
    text-align: center;
    font-weight: 600;
    color: var(--app-accent, #1b6b4a);
    font-size: 1.05rem;
  }
</style>
