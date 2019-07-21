<script>
  import { onMount } from "svelte";
  import Nav from "./_components/Nav.svelte";

  const particlesJSON = {
    "color": {
      "value": "#000000"
    },
    "size": {
      "value": 1.75
    }
  }

  
  onMount(async () => {
    if (typeof window !== "undefined") {
      const particlesJs = await import("particles.js");

      console.log({ particlesJS, particlesJSON });
      particlesJS.load("particles-js", particlesJSON, function() {
        console.log("callback - particles.js config loaded");
      });
    }
  });

  export let segment;
</script>

<style>
  main {
    position: relative;
    /* max-width: 650px;
    background-color: white;
    padding: 2em; */
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <title>Dennis Dang</title>
</svelte:head>

<Nav {segment} />

<main id="particles-js">
  <slot />
</main>
