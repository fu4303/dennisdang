<script>
  import Toggle from "./Toggle.svelte";

  export let segment;
</script>

<style>
  nav ul {
    display: flex;
    list-style: none;
    margin-top: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    flex-wrap: wrap;
  }

  @media (min-width: 550px) {
    nav ul {
      justify-content: flex-end;
    }
  }

  nav li a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  nav li a:hover {
    text-decoration: none;
  }

  nav li a.blog {
    background: #419edadb;
    border-radius: 3px;
    text-align: center;
    width: 60px;
    transition: ease-out 0.15s;
    color: #fff;
  }

  nav li a.blog:hover {
    background: #419eda;
  }

  a {
    color: #419eda;
    display: block;
    font-size: 18px;
    text-decoration: none;
    padding: 4px;
  }
</style>

<nav>
  <ul>
    <!-- <li>
      <Toggle />
    </li> -->
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a
        class={segment === 'twitter' ? 'selected' : ''}
        href="https://twitter.com/dangitdennis"
        rel="noopener"
        target="_blank">
        twitter
      </a>
    </li>
    <li>
      <a
        class={segment === 'github' ? 'selected' : ''}
        href="https://github.com/dangdennis"
        rel="noopener"
        target="_blank">
        github
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={`${segment === 'blog' ? 'selected' : ''} blog`}
        href="https://www.notion.so/e45cad09a3cf4d81b2f50b363c610663?v=20ee648464b84127abc339fda8f29e38">
        blog
      </a>
    </li>
  </ul>
</nav>
