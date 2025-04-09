<script>
  import { Link } from 'svelte-routing';
  
  const projects = {
    1: {
      title: 'Bibliotheca Motus Imaginibus',
      longDescription: 'Egy egyszerű és lesimult design-nal rendelkező weboldal, amely egy online adatbázis filmekről és sorozatokról.',
      image: 'https://i.imgur.com/HkzLSqW.png',
      tags: ['Svelte', 'Bootstrap', 'JavaScript', 'C#'],
      features: [
        'Reszponzív design',
        'Modern felhasználói felület',
        'Gyors betöltési idő',
        'Keresés funkció',
        'Felhasznólóbarát',
        'Értékelés írása',
        'Watchlist funkció',
        'Szűrés kategória szerint'
      ],
      link: 'https://bibliothecamotusimaginibus.netlify.app/'
    },
    2: {
      title: 'Eseménykezelő',
      
      longDescription: 'Egy eseménykezeleő naptár heti bontásban.',
      image: 'https://i.imgur.com/5c8RoQb.png',
      tags: ['Svelte', 'Bootstrap', 'JavaScript'],
      features: [
        'Egyszerű design',
        'Könnyen használható',
        'Heti lebontás',
        'Események láthatósága'
      ],
      link: 'https://esemenynaptar.netlify.app/'
    },
    3: {
      title: 'Könyv kezelő alkalmazás',
      longDescription: 'Egy könyv kezelő alkalmazás, amely lehetővé teszi a könyvek kezelését.',
      image: 'https://i.imgur.com/raI8hGq.png',
      tags: ['SvelteKit', 'Semantic UI', 'JavaScript'],
      features: [
        'Könyvek hozzáadása',
        'Keresés funkció',
        'önyvek szerkesztése/törlése',
        'Bejelentkezés funkció',
        'Szűrés műfaj szerint',
      ],
      link: 'https://konyvtarkezelo.vercel.app/'
    },
    4: {
      title: 'Céges eszköz-nyilvántartó program',
      longDescription: 'Egy céges eszköz-nyilvántartó program, amely lehetővé teszi a céges eszközök kezelését.',
      image: 'https://i.imgur.com/GYagEOj.png',
      tags: ['SvelteKit', 'Semantic UI', 'JavaScript'],
      features: [
        'Eszközök hozzáadása',
        'Eszközök keresése',
        'Eszközök szerkesztése/törlése',
        'Bejelentkezés funkció',
        'Statisztika'
      ],
      link: 'https://toolhandler.vercel.app/'
    },
    5: {
      title: 'Autókereskedés weboldal',
      longDescription: 'Egy autókereskedés weboldal, amely lehetővé teszi a könyvek kezelését.',
      image: 'https://i.imgur.com/s5XAqFT.png',
      tags: ['HTML', 'Bootstrap', 'CSS'],
      features: [
        'Reszponzív design',
      ],
      link: 'https://oroszpeter.github.io/CarFrontend/'
    },
    6: {
      title: 'Játékgép',
      longDescription: 'Tipikus kaszinói játékgép.',
      image: 'https://i.imgur.com/nGzFnkG.png',
      tags: ['HTML', 'Bootstrap', 'JavaScript', 'C#'],
      features: [
        'Bejelentkezés funkció',
        'Nyeremény számítása',
        'Pontok számlálása',
      ],
      link: 'https://oroszpeter.github.io/slutmachine/'
    },
    7: {
      title: 'Malom',
      longDescription: 'Klasszikus malom játék megvalósítása.',
      image: 'https://i.imgur.com/VHr71Uq.png',
      tags: ['Vue.js', 'C#', 'JavaScript'],
      features: [
        'Online játék',
        'Játékszobák',
        'Szabályok szerinti játék',
      ],
      link: 'https://mill-game-sob.runasp.net/'
    },
    8: {
      title: 'Tetris',
      longDescription: 'Klasszikus Tetris játék megvalósítása.',
      image: 'https://i.imgur.com/tZQqeSu.png',
      tags: ['Svelte', 'CSS', 'JavaScript'],
      features: [
        'Klasszikus design',
        'Pontszámítás',
        'Highscore',
      ],
      link: 'https://tetris-one-iota.vercel.app/'
    },
    9: {
      title: 'Kígyó játék',
      longDescription: 'Klasszikus kígyó játék megvalósítása.',
      image: 'https://i.imgur.com/WcNt4G3.png',
      tags: ['Svelte', 'CSS', 'JavaScript'],
      features: [
        'Klasszikus design',
        'Pontszámítás',
        'WASD irányítás',
      ],
      link: 'https://oroszpeter.github.io/kigyo/'
    },
    10: {
      title: 'Házifeladat kezelő',
      longDescription: 'Házifeladat kezelő alkalmazás. Megkönnyíti a tanárok és diákok munkáját.',
      image: 'https://i.imgur.com/VuqETcp.png',
      tags: ['Svelte', 'Bootstrap', 'JavaScript', 'C#'],
      features: [
        'Házifeladat hozzáadása',
        'Admin(tanár) funkció',
        'Házifeladat szerkesztése/törlése',
        'Bejelentkezés funkció',
        'Jelszó szerkesztése',
        'Feladat beadása',
        'Feladat értékelése',
      ],
      link: 'https://sobschoolhomework.netlify.app/'
    },
    11: {
      title: 'Doboz tologatás',
      longDescription: 'Doboz tologatás játék. Egy szint akkor van teljesítve, ha a dobozt betoljuk a célba.',
      image: 'https://i.imgur.com/eI97rz0.png',
      tags: ['Svelte', 'Bootstrap', 'JavaScript'],
      features: [
        'Klasszikus design',
        'Időmérés',
        'Több szint',
        'WASD és nyilakkal irányítás',
      ],
      link: 'https://oroszpeter.github.io/boxgame/'
    },
    12: {
      title: 'Doboz tologatás szörnyekkel',
      longDescription: 'Doboz tologatás szörnyekkel. A játékban a szörnyek folyamatosan mozognak, és a játékosnak be kell őket kerítenie a dobozok segítségével.',
      image: 'https://i.imgur.com/YY0xfaJ.png',
      tags: ['Svelte', 'Bootstrap', 'JavaScript'],
      features: [
        'Klasszikus design',
        'Folyamatosan mozgó szörnyek',
        'Időmérés',
        'Több szint',
        'WASD és nyilakkal irányítás',
      ],
      link: 'https://oroszpeter.github.io/boxgamewithmonsters/'
    },
    13: {
      title: 'Térképes játék',
      longDescription: 'Egy térképes játék, amely lehetővé teszi a játékosnak a Európai országok elhelyezkedését.',
      image: 'https://i.imgur.com/iwuOm5n.png',
      tags: ['Svelte', 'JavaScript'],
      features: [
        'SVG Térkép',
        'Helytelen országok megjelenítése',
        'Véletlenszerűen generált keresendő országok',
      ],
      link: 'https://oroszpeter.github.io/mapgame/'
    },
    14: {
      title: 'Billiárd játék',
      longDescription: 'Billiárd játék labdákkal és ütőkkel.',
      image: 'https://i.imgur.com/xsvi6AX.png',
      tags: ['Svelte', 'Bootstrap', 'JavaScript'],
      features: [
        'Labda mozgások',
        'Különböző ütőerő',
        'Kézben lévő fehér labda',
        'Fizikai szabályok'
      ],
      link: 'https://oroszpeter.github.io/8ballpool/'
    }
  };

  let id = window.location.pathname.split('/').pop();
  $: project = projects[id];
</script>

{#if project}
  <div class="project-details">
    <div class="text-center mb-5">
      <h2>{project.title}</h2>
      
    </div>

    <div class="row">
      <div class="col-md-6">
        <img src={project.image} class="img-fluid rounded" alt={project.title} />
      </div>
      <div class="col-md-6">
        <h3>Projekt leírás</h3>
        <p>{project.longDescription}</p>
        <a href={project.link} class="text-danger mt-3" target="_blank">A projekt linkje</a>
        <h4 class="mt-4">Főbb jellemzők</h4>
        <ul class="list-group">
          {#each project.features as feature}
            <li class="list-group-item">{feature}</li>
          {/each}
        </ul>

        <div class="mt-4">
          <h4>Technológiák</h4>
          {#each project.tags as tag}
            <span class="badge bg-primary me-2">{tag}</span>
          {/each}
        </div>
        
      </div>
    </div>

    <div class="text-center mt-5">
      <Link to="/projects" class="btn btn-secondary">Vissza a projektekhez</Link>
    </div>
  </div>
{:else}
  <div class="text-center">
    <h2>Projekt nem található</h2>
    <Link to="/projects" class="btn btn-primary">Vissza a projektekhez</Link>
  </div>
{/if}

<style>
  .project-details {
    max-width: 1200px;
    margin: 0 auto;
  }
  .list-group-item {
    border: none;
    padding: 0.5rem 0;
  }
  .badge {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #000;
  }
</style> 