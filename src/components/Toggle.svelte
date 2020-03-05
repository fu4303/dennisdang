<script>
  let lightMode = true;

  function toggleMode() {
    lightMode = !lightMode;
  }
</script>

<style>
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: #2196f3;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    background-image: image("zest-icon/outdoors/moon.svg");
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #000000d1;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .moon {
    z-index: 50;
    position: relative;
    top: 5px;
    left: 4px;
    transition: 0.25s;
  }

  .sun {
    z-index: 50;
    position: relative;
    top: 5px;
    right: -32px;
    transition: 0.25s;
  }

  svg {
    position: relative;
    z-index: 50;
  }
</style>

<!-- Rounded switch -->
<label class="switch">
  {#if lightMode}
    <svg
      class="sun"
      width="24"
      height="24"
      fill="#fced81"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v2.062c.718.09 1.426.278 2.104.563l1.03-1.785a1 1
        0 1 1 1.732 1l-1.031 1.786c.58.44 1.099.96 1.54 1.539l1.785-1.031a1 1 0
        0 1 1 1.732l-1.785 1.03c.285.678.473 1.386.563 2.104H22a1 1 0 1 1 0
        2h-2.062a7.995 7.995 0 0 1-.563 2.104l1.785 1.03a1 1 0 0 1-1
        1.732l-1.786-1.031c-.44.58-.96 1.099-1.539 1.54l1.031 1.785a1 1 0 1
        1-1.732 1l-1.03-1.785a7.995 7.995 0 0 1-2.104.563V22a1 1 0 1 1-2
        0v-2.062a7.995 7.995 0 0 1-2.104-.563l-1.03 1.785a1 1 0 0
        1-1.732-1l1.031-1.786a8.084 8.084 0 0 1-1.54-1.539L3.84 17.866a1 1 0 1
        1-1-1.732l1.785-1.03A7.993 7.993 0 0 1 4.062 13H2a1 1 0 1 1
        0-2h2.062c.09-.718.278-1.426.563-2.104L2.84 7.866a1 1 0 0 1
        1-1.732l1.786 1.031c.44-.58.96-1.099 1.539-1.54L6.134 3.84a1 1 0 0 1
        1.732-1l1.03 1.785A7.993 7.993 0 0 1 11 4.062V2a1 1 0 0 1 1-1zm0 5a5.993
        5.993 0 0 0-6 6 5.993 5.993 0 0 0 6 6 5.993 5.993 0 0 0 6-6 5.993 5.993
        0 0 0-6-6z"
        fill="#fced81" />
    </svg>
  {:else}
    <svg class="moon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.987 2.813a1 1 0 0 1-.357 1.222 6 6 0 1 0 9.249 6.17 1 1 0 0 1
        1.964.024c.103.575.157 1.167.157 1.771 0 5.523-4.477 10-10 10S2 17.523 2
        12c0-4.787 3.363-8.787 7.854-9.769a1 1 0 0 1 1.133.582zM6.512 6.179a8 8
        0 1 0 12.977 8.64A8 8 0 0 1 6.512 6.18z"
        fill="#fced81" />
    </svg>
  {/if}
  <input type="checkbox" checked={toggleMode} on:click={toggleMode} />
  <span class="slider round" />
</label>
