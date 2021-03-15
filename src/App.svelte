<script lang="ts">
  import { onMount, afterUpdate, tick } from 'svelte'
  export const message = 'default'

  onMount(async () => {
    let hero = document.getElementById('hero')
    let logo = document.getElementById('logo')

    window.addEventListener('resize', (e) => {
      let hero = document.getElementById('hero')
      const logoOffset = hero.offsetTop - 1 + 'px'
      logo.style.top = logoOffset
    })

    hero.addEventListener('load', (e) => {
      const logoOffset = (e.target as HTMLElement).offsetTop - 1 + 'px'
      logo.style.top = logoOffset
    })
  })

  afterUpdate(async () => {})
</script>

<main>
  <div class="container">
    <img id="logo" src="/logo.webp" alt="The Guilty Gear Strive Logo" />
    <img
      id="hero"
      src="/strive.webp"
      alt="Sol and Ky Looking all Myspacey and deep."
    />

    <h1 id="countdown">
      8 <span>w</span>eeks 2 <span>d</span>ays 23 <span>h</span>ours
    </h1>
  </div>
</main>

<style>
  main {
    background-color: black;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .container {
    position: relative;
    /* max-width: 1650px; */
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #logo {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 32px;
    width: 75%;
    max-width: 1080px;
    background: linear-gradient(
      90deg,
      rgb(26, 21, 21) 0%,
      rgba(0, 212, 255, 0) 100%
    );
  }

  #hero {
    background-color: #651216;
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: fill;
    object-position: right;
  }

  h1 {
    text-shadow: 3px 3px black;
    color: rgba(255, 255, 255, 0.925);
    text-transform: uppercase;
    font-family: 'RED';
    font-size: calc(5vw);
    font-weight: 100;
    padding: 32px;
    background: linear-gradient(
      90deg,
      rgba(252, 249, 249, 0.534) 0%,
      rgba(0, 212, 255, 0) 100%
    );
  }

  h1 > span {
    color: #7b1a1d;
  }

  #countdown {
    position: absolute;
    left: 0;
    top: 66%;
    transform: translate(0%, -50%);
  }

  @media (min-width: 200px) {
    #hero {
      object-fit: contain;
    }
  }
</style>
