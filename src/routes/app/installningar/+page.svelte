<script>
  import { onMount } from 'svelte';
  import { isLarger } from "$lib/stores";
  import { browser } from '$app/environment';

  let isTextChecked = false;
  
  onMount(async () => {
    // Load the initial value from localStorage if it exists
    const storedValue = localStorage.getItem("isTextChecked");
    if (storedValue !== null) {
      isTextChecked = storedValue === "true";
    }
  
    // Whenever isTextChecked changes, save it to localStorage or remove it if false
  });
    $: {

      if (isTextChecked && browser) {
        localStorage.setItem("isTextChecked", "true");
      } else if (!isTextChecked && browser) {
        localStorage.removeItem("isTextChecked");
      }
    }

  $: isLarger.set(isTextChecked);
</script>
<svelte:head>
  <title>APP | INSTÄLLNINGAR</title>
</svelte:head>
<main>
<article>
  <h1 style="text-align: center">Inställningar</h1>
  <div>
    <nav>
      <div class="max">
        <h6>Gör allt större</h6>
        <div>Gör allting i appen större för äldre folk.</div>
      </div>
      <label class="switch">
        <input type="checkbox" bind:checked={isTextChecked}>
        <span></span>
      </label>
    </nav>
  </div>
  {#if isTextChecked}
    <div style="margin-top: 20px;">
      Aktiverat!
    </div>
  {/if}
</article>
</main>
<style>
main {
  height: 100vh;
  display: grid;
  place-items: center;
}
article {
  height: 80vh;
  width: 95vw;
}
h1 {
  text-align: center;
  display: block;
}
</style>
