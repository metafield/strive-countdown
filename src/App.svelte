<script lang="ts">
  import { onMount, afterUpdate, tick } from 'svelte'
  import {
    intervalToDuration,
    differenceInDays,
    differenceInMilliseconds,
  } from 'date-fns'
  export const message = 'default'

  const toGoRaw = intervalToDuration({
    start: Date.now(),
    end: new Date(2021, 5, 11, 18),
  })

  let days = 0,
    hours = 0,
    mins = 0,
    secs = 0,
    ms = 0

  function timeLoop() {
    const toGoDuration = intervalToDuration({
      start: Date.now(),
      end: new Date(2021, 5, 11, 18),
    })
    days = differenceInDays(new Date(2021, 5, 11, 18), Date.now())
    hours = toGoDuration.hours
    mins = toGoDuration.minutes
    secs = toGoDuration.seconds
    ms = differenceInMilliseconds(new Date(2021, 5, 11, 18), Date.now())

    requestAnimationFrame(timeLoop)
  }
  requestAnimationFrame(timeLoop)

  onMount(async () => {
    let hero = document.getElementById('hero')
    let logo = document.getElementById('logo')
    let countdown = document.getElementById('countdown')

    window.addEventListener('resize', (e) => {
      let hero = document.getElementById('hero')
      const logoOffset = hero.offsetTop - 1 + 'px'
      logo.style.top = logoOffset
      countdown.style.bottom = logoOffset
    })

    hero.addEventListener('load', (e) => {
      const logoOffset = (e.target as HTMLElement).offsetTop - 1 + 'px'
      logo.style.top = logoOffset
      countdown.style.bottom = logoOffset
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

    <div id="countdown">
      <h1>
        {days} <span>d</span>ays {hours} <span>h</span>ours
      </h1>
      <h1>
        {mins} <span>m</span>ins {secs} <span>s</span>ecs
      </h1>
      <h1 id="milliseconds">{ms}</h1>
    </div>
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
  }

  h1 > span {
    color: #7b1a1d;
  }

  #countdown {
    padding: 2em;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(252, 249, 249, 0.534) 0%,
      rgba(0, 212, 255, 0) 100%
    );
  }

  #milliseconds {
  }

  @media (min-width: 200px) {
    #hero {
      object-fit: contain;
    }
  }
</style>
