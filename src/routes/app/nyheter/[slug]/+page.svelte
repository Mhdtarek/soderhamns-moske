<script>
  export let data;
</script>
<main class=responsive>
  <article>
    <h3>{ data.title }</h3>
    <p>Lagt ut: {data.date}</p>
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