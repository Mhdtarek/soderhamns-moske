<script>
  export let data;
</script>
<main class=responsive>
  <article>
    <h3>{ data.title }</h3>
    <p>Published: {data.date}</p>
    <a href="/app/nyheter">Gå Tillbaka</a>
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