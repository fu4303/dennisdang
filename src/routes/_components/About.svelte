<script>
  export let pirateMode;
</script>

<style>
  a {
    color: #616eb7;
    text-decoration: none;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    margin: 0;
  }

  @media (min-width: 568px) {
    p {
      font-size: 18px;
    }
  }

  .about .grid-list {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
  }

  .about {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    justify-content: center;
    max-width: 650px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .highlight {
    color: #616eb7;
  }

  .work {
    padding-left: 20px;
  }
  .work li {
    font-size: 16px;
  }

  @media (min-width: 568px) {
    .work li {
      font-size: 18px;
    }
  }
</style>

<section>
  <ul class="about">

    <li class="grid-list">
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
    </li>

    <li class="grid-list">
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
        <p class="highlight">Ocaml + Reason, Swift.</p>
        <p>Urban hip-hop dance, politics, podcasts.</p>
      </div>
    </li>

    <li class="grid-list">
      <div class="icon">
        {#if pirateMode}
          <img
            src="pirate/doublesword-pirate-piratesword-set-sword-weapon.svg"
            alt="Double sword" />
        {:else}
          <img src="diagram.svg" alt="Diagram" />
        {/if}
      </div>
      <div>
        <h3>Work Experience</h3>
        <ul class="work">
          <li class="highlight">
            Mount Sinai Digital Consumer
            <span>(current)</span>
          </li>
          <li>Kelley Blue Book</li>
          <li>Experian</li>
          <li>Q2 Solutions</li>
        </ul>
      </div>
    </li>

    <li class="grid-list">
      <div class="icon">
        <div class="icon">
          {#if pirateMode}
            <img src="pirate/cannon-pirate-set-weapon.svg" alt="Cannon" />
          {:else}
            <img src="project.svg" alt="Project" />
          {/if}
        </div>
      </div>
      <div>
        <h3>Tech Stack</h3>
        <p>Javascript & Typescript, React, AWS, Go, Node, GraphQL, CSS</p>
      </div>
    </li>

    <li class="grid-list">
      <div class="icon">
        <div class="icon">
          {#if pirateMode}
            <img
              src="pirate/bottle-bottletter-letter-pirate-sea-set.svg"
              alt="Letter in a Bottle" />
          {:else}
            <img src="binoculars.svg" alt="Binoculars" />
          {/if}
        </div>
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          Find me on{' '}
          <a
            href="https://twitter.com/dangitdennis"
            target="_blank"
            rel="noopener">
            Twitter
          </a>
          {' '} or email me
          <a href="mailto:dang.dennis9@gmail.com">here</a>
          .
        </p>
      </div>
    </li>

  </ul>
</section>
