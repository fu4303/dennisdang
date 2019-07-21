<script>
  import { onMount } from "svelte";
  import Nav from "./_components/Nav.svelte";

  const particlesJSON = {
    particles: {
      number: {
        value: 40,
        max: -1,
        density: {
          enable: false,
          value_area: 1200
        }
      },
      color: {
        value: "#000"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        },
        images: []
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 1.75,
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#FFF",
        opacity: 0.6,
        width: 1,
        shadow: {
          enable: false,
          blur: 5,
          color: "lime"
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: true,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab"
        },
        onclick: {
          enable: false,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 180,
          line_linked: {
            opacity: 0.35
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 100,
          duration: 5
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    fps_limit: 999,
    polygon: {
      enable: false,
      scale: 1,
      type: "inline",
      inline: {
        arrangement: "one-per-point"
      },
      draw: {
        enable: false,
        stroke: {
          width: 0.5,
          color: "rgba(255, 255, 255, .1)"
        }
      },
      move: {
        radius: 10,
        type: "path"
      },
      url: ""
    }
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      window.particlesJS("particles-js", particlesJSON);
    }
  });

  export let segment;
</script>

<style>
  main {
    margin: 0 auto;
    box-sizing: border-box;
  }

  #particles-js {
    height: 300px;
    position: absolute;
    top: 50px;
    width: 100%;
    z-index: -999;
  }
</style>

<svelte:head>
  <title>Dennis Dang</title>
</svelte:head>

<Nav {segment} />

<main>
  <div id="particles-js" />
  <slot />
</main>
