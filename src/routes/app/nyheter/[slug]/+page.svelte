<script>
  export let data;

  function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    timeZone: "Europe/Stockholm"
  };
  // @ts-ignore
  return date.toLocaleString("sv-SE", options);
}
</script>
<main class=responsive>
  <article>
    <h3>{ data.title }</h3>
    <p>Lagt ut: {formatDate(data.date)}</p>
    <p>Skapat av: {data.created}</p>
    <a href="/app/nyheter" class="button green5" style="margin-top: 15px; margin-left: 0px">← Gå Tillbaka</a>
  </article>
  <div class="responsive">
    <svelte:component this={data.content} class="content"/>
  </div>
</main>

<style>
  .content h1 {
    font-size: 14px
  }
</style>