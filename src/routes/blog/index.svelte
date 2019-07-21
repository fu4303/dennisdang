<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
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

  .title {
    color: #616eb7;
    font-size: 22px;
  }
</style>

<svelte:head>
  <title>Blog | Dennis Dang</title>
</svelte:head>

<Header pirateMode />

<div class="container">
  <h1>Recent posts</h1>

  <ul class="posts">
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li class="post">
        <h3 class="title">
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </h3>
      </li>
    {/each}
  </ul>

</div>
