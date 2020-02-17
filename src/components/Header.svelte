<script>
  export let pirateMode;
</script>

<style>
  h1 {
    font-weight: 700;
  }

  .bio {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 72px 0;
    text-align: center;
  }

  .name {
    font-size: 40px;
    margin-bottom: 8px;
  }

  .job-title {
    font-size: 24px;
    margin-bottom: 0;
  }

  .secret img {
    height: 70px;
  }

  .secret img {
    cursor: pointer;
    border-radius: 50%;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 32px;
    }
  }
</style>

<div class="bio">
  <div class="secret" aria-label="Click me for a secret" on:click="{() => pirateMode = !pirateMode}">
    {#if pirateMode}
      <img
        src="pirate/man-piracy-pirate-sea-set.svg"
        alt={`Dennis as a Pirate`} />
    {:else}
      <img src="profile-pic.jpg" alt="Dennis Dang" />
    {/if}
  </div>

  <h1 class="name">Dennis Dang</h1>
  <h3 class="job-title">Software Engineer</h3>

</div>
