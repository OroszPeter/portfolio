<script>
  import { Link } from 'svelte-routing';
  
  const projects = [
    {
      id: 1,
      title: 'Bibliotheca Motus Imaginibus',
      description: 'Egy online adatbázis filmekről és sorozatokról.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'Bootstrap', 'JavaScript']
    },
    {
      id: 2,
      title: 'Eseménykezelő',
      description: 'Esemnénykezelő naptár heti bontásban.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'Bootstrap', 'JavaScript']
    },
    {
      id: 3,
      title: 'Könyv kezelő alkalmazás',
      description: 'Könyv kezelő alkalmazás, amely lehetővé teszi a könyvek kezelését.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['SvelteKit', 'Semantic UI', 'JavaScript']
    },
    {
      id: 4,
      title: 'Céges eszköz-nyilvántartó program',
      description: 'Céges eszköz-nyilvántartó program, amely lehetővé teszi a céges eszközök kezelését.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['SvelteKit', 'Semantic UI', 'JavaScript']
    },
    {
      id: 5,
      title: 'Autókereskedés weboldal',
      description: 'Céges eszköz-nyilvántartó program, amely lehetővé teszi a céges eszközök kezelését.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['HTML', 'Bootstrap', 'CSS']
    },
    {
      id: 6,
      title: 'Játékgép',
      description: 'Egy egyszerű kaszinói játékgép.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['HTML', 'Bootstrap', 'C#', 'JavaScript']
    },
    {
      id: 7,
      title: 'Malom',
      description: 'Klasszikus malom játék megvalósítása.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Vue.js', 'C#', 'JavaScript']
    },
    {
      id: 8,
      title: 'Tetris',
      description: 'Klasszikus Tetris.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['SvelteKit', 'CSS', 'JavaScript']
    },
    {
      id: 9,
      title: 'Kígyó játék',
      description: 'Klasszikus kígyó játék.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'CSS', 'JavaScript']
    },
    {
      id: 10,
      title: 'Házifeladat kezelő',
      description: 'Házifeladat kezelő alkalmazás.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'Bootstrap', 'JavaScript', 'C#']
    },
    {
      id: 11,
      title: 'Doboz tologatás',
      description: 'Tologató játék.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'Bootstrap', 'JavaScript']
    },
    {
      id: 12,
      title: 'Doboz tologatás szörnyekkel',
      description: 'Doboz tologatás szörnyekkel.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'Bootstrap', 'JavaScript']
    },
    {
      id: 13,
      title: 'Térkép játék',
      description: 'Egyszerű keresd meg az országot a térképen.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'Bootstrap', 'JavaScript']
    },
    {
      id: 14,
      title: 'Billiárd játék',
      description: 'Billiárd játék labdákkal és ütőkkel.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Svelte', 'Bootstrap', 'JavaScript']
    },
    {
      id: 15,
      title: 'Kő, papír, olló',
      description: 'Kő, papír, olló játék.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['HTML', 'Bootstrap', 'JavaScript']
    },
    {
      id: 16,
      title: 'Space Shooter',
      description: 'Klasszikus árkád játék.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['HTML', 'Bootstrap', 'JavaScript']
    }
  ];
</script>

<h2 class="text-center mb-4">Projektjeim</h2>
<div class="row row-cols-1 row-cols-md-3 g-4">
  {#each projects as project}
    <div class="col">
      <div class="card h-100">
        <!-- <img src={project.image} class="card-img-top" alt={project.title} /> -->
        <div class="card-body">
          <h5 class="card-title">{project.title}</h5>
          <p class="card-text">{project.description}</p>
          <div class="mb-3">
            {#each project.tags as tag}
              <span class="badge bg-secondary me-1">{tag}</span>
            {/each}
          </div>
          <Link to="/project/{project.id}" class="btn btn-primary">Részletek</Link>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .card {
    transition: transform 0.2s;
  }
  .card:hover {
    transform: translateY(-5px);
  }
  .badge {
    font-size: 0.8rem;
  }
  .row{
    margin-bottom: 50px;
  }
</style> 