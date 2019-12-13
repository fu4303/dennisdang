<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  import Header from "../../components/Header.svelte";
  export let posts;
  export const pirateMode = true;
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
    padding: 0 48px;
  }

  .posts {
    list-style: none;
    margin-bottom: 48px;
    padding-left: 0;
  }

  .post-item {
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 0;
  }
  h2,
  .post-item-footer {
    color: #616eb7;
  }

  .post-item-date {
    color: #aaa;
    margin-right: 16px;
    text-transform: uppercase;
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
      <div class="post-item">
        <h2>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </h2>
        {#if post.except}
          <p>{post.excerpt}</p>
        {/if}
        <div class="post-item-footer">
          <span class="post-item-date">{post.printDate}</span>
        </div>
      </div>
    {/each}
  </ul>

</div>
