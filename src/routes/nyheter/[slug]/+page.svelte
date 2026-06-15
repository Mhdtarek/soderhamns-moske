<script>
  export let data;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<svelte:head>
  <title>{data.title} — Söderhamns Moské</title>
  <meta property="og:title" content={data.title} />
  <meta property="og:type" content="article" />
  <meta name="description" content={data.title} />
  <meta property="og:description" content={data.title} />
</svelte:head>

<div class="page-wrapper">
  <main>
    <article class="article-card">
      <header>
        <div class="accent-stripe"></div>
        <h1>{data.title}</h1>
        <div class="meta">
          <time datetime={data.date}>{formatDate(data.date)}</time>
          {#if data.created}
            <span class="dot">&middot;</span>
            <span class="author">{data.created}</span>
          {/if}
        </div>
        <div class="gold-divider"></div>
      </header>
      <div class="body">
        <svelte:component this={data.content} />
      </div>
    </article>

    <p class="brand-footer">Söderhamns Moské</p>
  </main>
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: "Atkinson Hyperlegible", "Segoe UI", system-ui, sans-serif;
    background: #f5f0e6;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 14px,
        rgba(19, 70, 50, 0.03) 14px,
        rgba(19, 70, 50, 0.03) 15px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 14px,
        rgba(166, 124, 41, 0.025) 14px,
        rgba(166, 124, 41, 0.025) 15px
      ),
      radial-gradient(
        ellipse 120% 80% at 50% -20%,
        rgba(19, 70, 50, 0.05),
        transparent 55%
      );
    color: #1c1a14;
    line-height: 1.7;
    font-size: 1.0625rem;
    -webkit-font-smoothing: antialiased;
  }

  .page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem 3rem;
  }

  .article-card {
    background: #fdfbf7;
    border: 1px solid rgba(28, 26, 20, 0.11);
    border-radius: 12px;
    box-shadow:
      0 2px 12px rgba(28, 26, 20, 0.07),
      inset 0 2px 0 0 rgba(166, 124, 41, 0.18);
    overflow: hidden;
  }

  .accent-stripe {
    height: 4px;
    background: linear-gradient(90deg, #134632 0%, #a67c29 100%);
  }

  header {
    padding: 1.75rem 1.75rem 0;
  }

  h1 {
    font-family: "Cormorant Garamond", "Palatino Linotype", Palatino, serif;
    font-size: 1.85rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.01em;
    color: #1c1a14;
  }

  .meta {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    color: #4a463c;
  }

  .dot {
    margin: 0 0.4em;
    opacity: 0.5;
  }

  .author {
    color: #4a463c;
  }

  .gold-divider {
    width: 100%;
    height: 1px;
    margin-top: 1.25rem;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(166, 124, 41, 0.35) 20%,
      rgba(166, 124, 41, 0.6) 50%,
      rgba(166, 124, 41, 0.35) 80%,
      transparent 100%
    );
  }

  .body {
    padding: 1.5rem 1.75rem 2.25rem;
    font-size: 1.0625rem;
    line-height: 1.75;
  }

  .body :global(h2) {
    font-family: "Cormorant Garamond", "Palatino Linotype", Palatino, serif;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 1.75rem 0 0.5rem;
    color: #134632;
    letter-spacing: 0.01em;
  }

  .body :global(p) {
    margin-bottom: 1rem;
  }

  .body :global(strong) {
    font-weight: 700;
  }

  .body :global(em) {
    font-style: italic;
  }

  .body :global(ul),
  .body :global(ol) {
    margin: 0.5rem 0 1rem 1.5rem;
  }

  .body :global(li) {
    margin-bottom: 0.35rem;
  }

  .body :global(a) {
    color: #134632;
    text-underline-offset: 0.2em;
    text-decoration-thickness: 0.08em;
  }

  .brand-footer {
    text-align: center;
    margin-top: 2rem;
    font-family: "Cormorant Garamond", "Palatino Linotype", Palatino, serif;
    font-size: 1rem;
    color: #4a463c;
    letter-spacing: 0.06em;
  }

  @media (max-width: 480px) {
    main {
      padding: 1rem 0.75rem 2rem;
    }

    header {
      padding: 1.25rem 1.25rem 0;
    }

    .body {
      padding: 1.25rem 1.25rem 1.75rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
</style>
