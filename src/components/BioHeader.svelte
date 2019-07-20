<script>
  let pirateMode = false;

  function toggleFace() {
    pirateMode = !pirateMode;
  }
</script>

<style>
  h1 {
    /* letter-spacing: -1px; */
    font-weight: 700;
    /* color: hsla(0, 0%, 0%, 0.83); */
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 32px;
    }
  }

  .bio {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;
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

  .skill-highlight {
	color: rgba(0, 0, 0, 0.7);
	font-size: 18px;
    margin: 0;
  }
</style>

<div class="bio">
  <div class="secret" aria-label="Click me for a secret" on:click={toggleFace}>
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
  <h5 class="skill-highlight">Core: Javascript</h5>

</div>
