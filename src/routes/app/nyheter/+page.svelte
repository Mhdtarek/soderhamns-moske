<script>
    import { onMount } from "svelte";

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
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Europe/Stockholm"
  };
  return date.toLocaleString("sv-SE", options);
}

</script>
<main class="responsive">
  <h4 style="text-align: center; display: block; margin-top: 20px; ">Nyheter</h4>
  <div class="grid large-space">
    {#each posts as post}
      <article class="s6" style="margin-top: 0;">
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        {formatDate(post.meta.date)}
      </article >
    {/each}
  </div>
</main>