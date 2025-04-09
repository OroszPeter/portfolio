import './app.css';
import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const app = new App({
  target: document.getElementById('app')
});

export default app; 