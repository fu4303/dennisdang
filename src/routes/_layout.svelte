<script>
  import { onMount } from "svelte";
  import Nav from "./_components/Nav.svelte";

  // onMount(async () => {
  //   if (typeof window !== "undefined") {
  //     const particlesJs = await import("particles.js");

  //     console.log({ particlesJS });
  //     particlesJS.load("particles-js", "particles.json", function() {
  //       console.log("callback - particles.js config loaded");
  //     });
  //   }
  // });

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 650px;
    background-color: white;
    padding: 2em;
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
