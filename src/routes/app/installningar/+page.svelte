<script>
import { onMount } from 'svelte'
import { isLarger } from "$lib/stores";

let isTextChecked = false
onMount( async () => {
  $: isLarger.set(isTextChecked)
  $: localStorage.setItem("isTextChecked", isTextChecked.toString());
});
</script>
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
