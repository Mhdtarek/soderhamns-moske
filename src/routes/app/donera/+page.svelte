<svelte:head>
  <title>APP | DONERA</title>
</svelte:head>

<main class="app-page app-donera">
  <h1>Donera</h1>
  <p class="donera-lead">Skanna QR-koden med Swish eller använd knappen nedan.</p>
  <figure class="donera-figure">
    <img src="/swish-QR-large.png" alt="Swish QR-kod för donation" width="500" height="500" />
  </figure>
  <a
    href="https://app.swish.nu/1/p/sw/?sw=1235019146&msg=&src=qr"
    target="_blank"
    rel="noopener noreferrer"
    class="button green10 donera-cta"
  >
    Öppna Swish
  </a>
</main>

<style>
  .app-donera {
    text-align: center;
  }

  h1 {
    margin: 0 0 0.5rem;
    font-size: 1.75rem;
  }

  .donera-lead {
    margin: 0 0 1rem;
    max-width: 22rem;
    margin-left: auto;
    margin-right: auto;
    color: var(--app-text-muted, #3d5247);
    font-size: 1.05rem;
    line-height: 1.5;
  }

  .donera-figure {
    margin: 0 auto 1.25rem;
    max-width: min(100%, 320px);
  }

  .donera-figure img {
    width: 100%;
    height: auto;
    border-radius: var(--app-radius-sm, 12px);
    border: 1px solid var(--app-border, rgba(20, 34, 26, 0.12));
    box-shadow: var(--app-shadow, 0 4px 24px rgba(20, 34, 26, 0.08));
  }

  .donera-cta {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    max-width: 22rem;
  }
</style>
