<script>
    import { onMount } from "svelte";

  /**
* @type {string | any[]}
*/
  let posts = []
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
<svelte:head>
  <title>APP | NYHETER</title>
</svelte:head>
<main class="responsive">
  <article class="no-padding border primary-container">
    <img class="responsive medium" src="/mosquenews.png"><!----><!---->
    <div class="absolute bottom left right padding bottom-shadow white-text">
      <nav>
        <h5 style="text-align: center; display: block;">Nyheter</h5>
        <div class="max"></div>
        <a href="/app/kontakt" class="circle transparent">
          <i>phone</i>
        </a>
      </nav>
    </div>
  </article>
  <div class="grid large-space">
    {#each posts as post}
    <article class="s6" style="margin-top: 0;">
    <a href={post.path} style="display: block;">
        <h5>
          {post.meta.title}
        </h5>
        <p style="display:block">
          {formatDate(post.meta.date)}
        </p>
      </a>
    </article >
    {/each}
  {#if posts.length === 0}
    <p>Inga nyheter finns.</p>
  {/if}
  </div>
</main>