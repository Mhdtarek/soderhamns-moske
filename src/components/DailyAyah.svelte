<script>
  /** @type {{
   *   surahNumber: number;
   *   surahNameEn: string;
   *   ayahInSurah: number;
   *   arabicText: string;
   *   swedishText: string;
   *   translatorNote: string;
   * } | null} */
  export let ayah = null;
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#if ayah?.arabicText}
  <article
    class="card app-card daily-ayah-card"
    aria-labelledby="daily-ayah-label"
  >
    <div class="card-header">
      <p id="daily-ayah-label" class="header-label">Dagens ayah</p>
      <p class="header-ref" lang="sv">
        {ayah.surahNameEn}
        <span class="header-ref-num">{ayah.surahNumber}:{ayah.ayahInSurah}</span>
      </p>
    </div>
    <blockquote class="ayah-arabic" lang="ar" dir="rtl">{ayah.arabicText}</blockquote>
    <p class="ayah-sv" lang="sv">{ayah.swedishText}</p>
    <p class="ayah-attrib">Översättning: {ayah.translatorNote}</p>
  </article>
{/if}

<style>
  .daily-ayah-card {
    margin-top: 12px;
    padding: 14px 14px 16px;
    overflow: hidden;
  }

  .card-header {
    position: relative;
    min-height: 20px;
    padding: 0 6px 10px 6px;
  }

  .header-label {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 58%;
    font-family: var(--app-font-display, "Cormorant Garamond", serif);
    font-size: 0.875rem;
    font-weight: 600;
    opacity: 0.88;
    letter-spacing: 0.06em;
    color: var(--app-text-muted, #4a463c);
    line-height: 1.25;
  }

  .header-ref {
    margin: 0;
    padding-left: 0.5rem;
    font-size: 0.82rem;
    line-height: 1.3;
    text-align: right;
    color: var(--app-text-muted, #4a463c);
    opacity: 0.92;
  }

  .header-ref-num {
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    margin-left: 0.25rem;
    font-weight: 600;
    color: var(--app-accent, #1b6b4a);
  }

  .ayah-arabic {
    margin: 0 0 12px;
    padding: 12px 12px;
    font-family: "Amiri Quran", "Traditional Arabic", "Scheherazade New", serif;
    font-size: clamp(1.15rem, 3.4vw, 1.45rem);
    line-height: 1.9;
    font-weight: 400;
    color: var(--app-text, #1c1a14);
    border: none;
    background: var(--app-surface-muted, #ebe4d6);
    border-radius: var(--app-radius-sm, 8px);
  }

  :global(.app-shell[data-theme="dark"]) .ayah-arabic {
    background: var(--app-surface-muted);
  }

  .ayah-sv {
    margin: 0 0 10px;
    padding: 0 4px;
    font-size: 1.02rem;
    line-height: 1.65;
    color: var(--app-text, #1c1a14);
  }

  .ayah-attrib {
    margin: 0;
    padding: 0 4px;
    font-size: 0.78rem;
    line-height: 1.4;
    color: var(--app-text-muted, #4a463c);
  }
</style>
