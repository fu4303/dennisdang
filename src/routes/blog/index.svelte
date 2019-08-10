<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  import Header from "../_components/Header.svelte";
  export let posts;
  export let pirateMode = true;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 725px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .post {
    margin-bottom: 16px;
  }

  .posts {
    list-style: none;
    padding-left: 0;
  }

  /* .title {
    color: #616eb7;
    font-size: 22px;
  } */

  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }
  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }
  hr {
    margin: 60px auto;
  }
</style>

<svelte:head>
  <title>Blog | Dennis Dang</title>
</svelte:head>

<Header pirateMode />

<div class="container">
  <h1>Recent posts</h1>

  <ul class="posts">
    {#each posts as post, index}
      {#if index}
        <hr />
      {/if}
      <div class="post-item">
        <h2>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </h2>
        <p>{post.excerpt}</p>
        <div class="post-item-footer">
          <span class="post-item-date">— {post.printDate}</span>
        </div>
      </div>
    {/each}
  </ul>

</div>
