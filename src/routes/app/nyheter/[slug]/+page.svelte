<script>
  export let data;
</script>

<article>
  <h3>{ data.title }</h3>
  <p>Published: {data.date}</p>
  <a href="/app/nyheter">Gå Tillbaka</a>
</article>
<main class="responsive">
  <svelte:component this={data.content} class="content"/>
</main>

<style>
  .content h1 {
    font-size: 14px
  }
</style>