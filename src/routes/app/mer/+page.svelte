<main class="responsive app-page">
  <h1 class="mer-title">Mer</h1>
  <p class="mer-lead">Kontakt och stöd till föreningen.</p>

  <a
    data-sveltekit-preload-data="viewport"
    class="app-link-card mer-card"
    href="/app/kontakt"
  >
    <span class="mer-row">
      <i>phone</i>
      <span>Kontakt</span>
    </span>
    <span class="mer-hint">Telefon och frågor</span>
  </a>

  <a
    data-sveltekit-preload-data="viewport"
    class="app-link-card mer-card"
    href="/app/donera"
  >
    <span class="mer-row">
      <i>volunteer_activism</i>
      <span>Donera</span>
    </span>
    <span class="mer-hint">Swish och bidrag</span>
  </a>

  <a
    data-sveltekit-preload-data="viewport"
    class="app-link-card mer-card"
    href="/app/installningar"
  >
    <span class="mer-row">
      <i>tune</i>
      <span>Inställningar</span>
    </span>
    <span class="mer-hint">Mörkt läge m.m.</span>
  </a>
</main>

<style>
  .mer-title {
    font-size: 1.75rem;
    margin: 0 0 0.35rem;
    text-align: center;
  }

  .mer-lead {
    text-align: center;
    color: var(--app-text-muted, #3d5247);
    margin: 0 0 1.25rem;
    font-size: 1.05rem;
  }

  .mer-card {
    margin-bottom: 0.75rem;
  }

  .mer-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .mer-row i {
    font-size: 1.5rem;
    opacity: 0.95;
  }

  .mer-hint {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--app-text-muted, #3d5247);
  }
</style>