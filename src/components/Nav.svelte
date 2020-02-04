<script>
  export let segment;
</script>

<style>
  nav ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin-top: 1rem;
    margin-right: 1rem;
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
        href="https://www.notion.so/e45cad09a3cf4d81b2f50b363c610663?v=95f389215d084988a6cd8f961e67195e">
        blog
      </a>
    </li>
  </ul>
</nav>
