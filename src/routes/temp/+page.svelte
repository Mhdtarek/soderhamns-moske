<script>
   import { browser } from '$app/environment'
   let isItTrue = false

   if (browser) {
     const isInStandaloneMode = () =>
     (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');
     
     if (isInStandaloneMode()) {
       isItTrue = true
      }
    }
</script>

{#if isItTrue}
  <p>YEP it is true that you are on a PWA or TWA</p>
  {:else}
  <p>Nah</p>
{/if}