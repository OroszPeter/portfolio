<script>
  import { Link } from 'svelte-routing';
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <Link to="/" class="navbar-brand">Portfólió</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link" activeClass="active">Kezdőlap</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" activeClass="active">Rólam</Link>
        </li>
        <li class="nav-item">
          <Link to="/projects" class="nav-link" activeClass="active">Projektek</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .navbar {
    margin-bottom: 2rem;
  }
</style> 