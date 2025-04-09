<script>
  import { Router, Route } from 'svelte-routing';
  import Navbar from './components/Navbar.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Projects from './pages/Projects.svelte';
  import ProjectDetails from './pages/ProjectDetails.svelte';
</script>

<main>
  <Router>
    <Navbar />
    <div class="container mt-4">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/project/:id" component={ProjectDetails} />
    </div>
  </Router>
</main>

<style>
  main {
    min-height: 100vh;
  }
</style> 