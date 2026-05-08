<script>
  import { page } from "$app/stores";

  export let data;

  /** Konstigt skrivet men kortfattat: Sant när man öppnat artikeln från ”Senaste nyhet” på startsidan */
  $: backFromHome = $page.url.searchParams.get("from") === "hem";
  $: backHref = backFromHome ? "/app" : "/app/nyheter";
  $: backLabel = backFromHome ? "← Tillbaka till hem" : "← Tillbaka till nyheter";

  /** @param {string} dateString */
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      timeZone: "Europe/Stockholm",
    };
    // @ts-ignore
    return date.toLocaleString("sv-SE", options);
  }
</script>

<svelte:head>
  <title>APP | NYHET: {data.title}</title>
</svelte:head>

<main class="responsive app-page">
  <article class="app-article-meta">
    <h1>{data.title}</h1>
    <p class="meta-line">Publicerad: {formatDate(data.date)}</p>
    {#if data.created}
      <p class="meta-line">Skapad av: {data.created}</p>
    {/if}
    <a href={backHref} class="button green10 back-link">{backLabel}</a>
  </article>
  <div class="responsive app-prose">
    <svelte:component this={data.content} class="content" />
  </div>
</main>

<style>
  .app-article-meta {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.65rem;
    line-height: 1.25;
    margin: 0 0 0.75rem;
  }

  .meta-line {
    margin: 0 0 0.35rem;
    font-size: 1rem;
    color: var(--app-text-muted, #3d5247);
  }

  .back-link {
    display: inline-flex;
    margin-top: 1rem;
  }

  :global(.content h1) {
    font-size: 1.5rem !important;
    line-height: 1.3;
  }

  :global(.content h2) {
    font-size: 1.25rem;
    margin-top: 1.25rem;
  }

  :global(.content p) {
    font-size: 1.0625rem;
    line-height: 1.65;
  }
</style>
