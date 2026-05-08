<svelte:head>
  <title>APP | KONTAKT</title>
</svelte:head>

<main class="app-page">
  <article class="app-contact-card">
    <h1>Kontakta oss</h1>
    <section class="app-contact-block">
      <h2>Nyheter</h2>
      <p class="app-contact-phone">
        <a href="tel:+46737403213">073-740 32 13</a>
      </p>
    </section>
    <section class="app-contact-block">
      <h2>App och teknik</h2>
      <p class="app-contact-phone">
        <a href="tel:+46737461676">073-746 16 76</a>
      </p>
    </section>
    <a class="button green10 app-admin-link" href="/admin">Adminpanel</a>
  </article>
</main>

<style>
  main {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .app-contact-card {
    width: 100%;
    max-width: 26rem;
    padding: 1.5rem 1.25rem 1.75rem;
    background: var(--app-surface);
    border: 1px solid var(--app-border, rgba(20, 34, 26, 0.12));
    border-radius: var(--app-radius, 16px);
    box-shadow: var(--app-shadow, 0 4px 24px rgba(20, 34, 26, 0.08));
  }

  h1 {
    margin: 0 0 1.25rem;
    text-align: center;
    font-size: 1.65rem;
  }

  h2 {
    margin: 0 0 0.5rem;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--app-text-muted, #3d5247);
  }

  .app-contact-block {
    margin-bottom: 1.25rem;
  }

  .app-contact-phone {
    margin: 0;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .app-contact-phone a {
    text-decoration: none;
    color: var(--app-accent, #1b6b4a);
  }

  .app-admin-link {
    display: block;
    text-align: center;
    margin-top: 0.5rem;
  }
</style>
