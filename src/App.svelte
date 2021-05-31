<script lang="ts">
  import { onMount, afterUpdate } from 'svelte'
  import {
    intervalToDuration,
    differenceInDays,
    differenceInMilliseconds,
  } from 'date-fns'
  export const message = 'default'

  let days = 0,
    hours = 0,
    mins = 0,
    secs = 0,
    ms = 0

  function timeLoop() {
    const toGoDuration = intervalToDuration({
      start: Date.now(),
      end: new Date(2021, 5, 11, 0),
    })
    days = differenceInDays(new Date(2021, 5, 11, 0), Date.now())
    hours = toGoDuration.hours
    mins = toGoDuration.minutes
    secs = toGoDuration.seconds
    ms = differenceInMilliseconds(new Date(2021, 5, 11, 0), Date.now())

    requestAnimationFrame(timeLoop)
  }
  requestAnimationFrame(timeLoop)

  onMount(async () => {})

  afterUpdate(async () => {})
</script>

<main>
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
</main>

<style>
  main {
    height: 100%;
    overflow: hidden;
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
    height: 100%;
    object-fit: cover;
    object-position: right;
  }

  h1 {
    text-shadow: 3px 3px black;
    color: rgba(255, 255, 255, 0.925);
    text-transform: uppercase;
    font-family: 'RED';
    font-size: calc(2rem + 2vw);
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
      rgb(26, 21, 21) 0%,
      rgba(0, 212, 255, 0) 100%
    );
  }

  @media (max-width: 700px) {
    #hero {
      object-position: 85% 50%;
    }
  }
</style>
