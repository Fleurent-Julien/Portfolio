<script setup>
import { RouterLink } from 'vue-router';</script>

<template>
    <h1 class="text-5xl text-center my-4">Projets</h1>
    
  <div class="grid lg:grid-cols-3 md:grid-cols-2">
  <div class="card-container bg-gray-500">
      <RouterLink to="/crac-19" class="hero-image-container before:none">
        <img class="hero-image" src="../img/Cover_crac_19.webp" alt="Cover du 19, Crac"/>
      </RouterLink>
      <main class="main-content">
        <h2 class="text-center text-4xl"><RouterLink to="/crac-19">Le 19, Crac</RouterLink></h2>
      </main>
    </div>
    
    <div class="card-container bg-gray-500">
      <a href="/" class="hero-image-container">
        <img class="hero-image" src="../img/Cover_crac_19.webp" alt="Cover du 19, Crac"/>
      </a>
      <main class="main-content">
        <h2><a href="#">Test</a></h2>
      </main>
    </div>

    <div class="card-container bg-gray-500">
      <a href="/" class="hero-image-container">
        <img class="hero-image" src="../img/Cover_crac_19.webp" alt="Cover du 19, Crac"/>
      </a>
      <main class="main-content">
        <h2><a href="#">Test</a></h2>
      </main>
    </div>

    <div class="card-container bg-gray-500">
      <a href="/" class="hero-image-container">
        <img class="hero-image" src="../img/Cover_crac_19.webp" alt="Cover du 19, Crac"/>
      </a>
      <main class="main-content">
        <h2><a href="#">Test</a></h2>
      </main>
    </div>
</div>

</template>

<style>


img {
    width: 100%;
    border-radius: 15px;
    display: block;
}

.card-container {
    width: 100%;
    max-width: 400px;
    margin: 2em auto;
    border-radius: 15px;
    margin-bottom: 1rem;
    padding: 2rem;
}


.card-attribute {
    padding-bottom: 1.5em;
    border-top: 2px solid var(--var-line-dark);
}

@media (min-width:400px) {
  img.eye {
    max-width: 3em;
  }
  
  .card-container {
    width:80%

  }
}

.hero-image-container::after {
    content: '';
    background-image: url("https://i.postimg.cc/9MtT4GZY/view.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 5rem;
    background-color: hsla(250, 95%, 7%, 0.863);
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-out;
}

.hero-image-container:hover::after {
  opacity: 1;
}
</style>