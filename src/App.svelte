<script lang="ts">
  export let message: string;
  let typed = '';

  const type = () => {
    if (typed === message) return;
    typed += message[typed.length];
    setTimeout(type, 200);
  };

  type();
</script>

<main>
  <h1>{typed}</h1>
  <div class="carat">|</div>

  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1,
  .carat {
    display: inline;
    color: #ff3e00;
    text-transform: uppercase;
    font-family: 'RED';
    font-size: 6em;
    font-weight: 100;
  }

  .carat {
    animation: 1s blink ease infinite;
  }

  .carat:hover {
    opacity: 0;
  }

  @keyframes blink {
    from,
    to {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
