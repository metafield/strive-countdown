import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    message: 'HEAVEN OR HELL',
  },
});

export default app;
