<script>
  import { onMount } from "svelte";

  /**
   * @type {string | any[]}
   */
  let posts = [];
  onMount(async () => {
    fetch("/api/getNewsPosts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        posts = data;
      })
      .catch(function (error) {
        console.log(error);
      });
  });
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
  <title>APP | NYHETER</title>
</svelte:head>

<main class="responsive app-page">
  <article class="no-padding border primary-container app-hero">
    <img class="responsive medium" src="/mosquenews.png" alt="" />
    <div
      class="absolute bottom left right padding bottom-shadow white-text app-hero-bar"
    >
      <nav>
        <h5 class="app-hero-title">Nyheter</h5>
        <div class="max" />
        <a href="/app/kontakt" class="circle transparent app-hero-icon" aria-label="Kontakt">
          <i>phone</i>
        </a>
      </nav>
    </div>
  </article>
  <div class="grid large-space app-news-grid">
    {#each posts as post}
      <article class="s6 app-news-item">
        <a href={post.path} class="app-link-card">
          <h5>{post.meta.title}</h5>
          <p>{formatDate(post.meta.date)}</p>
        </a>
      </article>
    {/each}
    {#if posts.length === 0}
      <p class="app-empty">Inga nyheter just nu.</p>
    {/if}
  </div>
</main>

<style>
  .app-news-grid {
    margin-top: 0.5rem;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    justify-items: stretch;
  }

  .app-news-item {
    margin-top: 0;
    width: 100%;
    min-width: 0;
  }

  .app-link-card {
    display: block;
    width: 100%;
    min-width: 0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .app-link-card:hover,
  .app-link-card:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }

  .app-empty {
    text-align: center;
    color: var(--app-text-muted, #3d5247);
    font-size: 1.05rem;
    padding: 1rem;
  }

  @media (max-width: 640px) {
    .app-news-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
