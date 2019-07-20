<script>
  export let pirateMode;
</script>

<style>
  h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }

  .about li {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
    list-style: none;
  }

  .about ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    justify-content: center;
  }
</style>

<section class="about">
  <ul>

    <!-- <li>
      <div class="icon">
        {#if pirateMode}
          <img
            src="pirate/nautica-pirate-sail-sailor-set-ship.svg"
            alt="Ship wheel" />
        {:else}
          <img src="laptop.svg" alt="Laptop" />
        {/if}
      </div>
      <div>
        <h3>Writings and Blog</h3>
        <p>
          Check out my
          <a href="/blog">blog!</a>
        </p>
      </div>
    </li> -->

    <li>
      <div class="icon">
        {#if pirateMode}
          <img
            src="pirate/animal-octopus-pirate-seacreature-set.svg"
            alt="Octopus" />
        {:else}
          <img src="flask.svg" alt="Flask" />
        {/if}
      </div>
      <div>
        <h3>Trending Interests</h3>
        <p>Ocaml + Reason, Go, Swift, blockchain.</p>
        <p>Urban hip-hop dance, politics, podcasts.</p>
      </div>
    </li>

    <li>
      <div class="icon">
        {#if pirateMode}
          <img
            src="pirate/doublesword-pirate-piratesword-set-sword-weapon.svg"
            alt="Octopus" />
        {:else}
          <img src="diagram.svg" alt="Diagram" />
        {/if}
      </div>
      <div>
        <h3>Work Experience</h3>
        <ul>
          <li>Kelley Blue Book</li>
          <li>Experian</li>
          <li>Q2 Solutions</li>
        </ul>
      </div>
    </li>

    <li>
      <div class="icon">
        <!-- {theme === 'default' ? <ProjectIcon /> : <CannonIcon />} -->
      </div>
      <div>
        <h3>Tech Stack</h3>
        <p>
          Professional: Javascript, AWS, Node, React, GraphQL, Typescript, CSS
          Flexbox & Grid
        </p>
        <p>Familiar: Python, C, C++, Java</p>
      </div>
    </li>
    <li>
      <div class="icon">
        <!-- {theme === 'default' ? <BinocularIcon /> : <BottleLetterIcon />} -->
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          Find me on{' '}
          <a href="https://twitter.com/dangitdennis" target="_blank">Twitter</a>
          {' '} or email me
          <a href="mailto:dang.dennis9@gmail.com">here</a>
          .
        </p>
      </div>
    </li>
  </ul>
</section>
