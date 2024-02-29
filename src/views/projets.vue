<script setup>
import { RouterLink } from 'vue-router';</script>

<template>
    <h1 class="text-5xl text-center my-4">Projets</h1>


<div class="grid grid-cols-3 place-items-center">
    <!--Card Crac 19 -->
    <div class="bg-black w-80 rounded-b-xl mb-12">
    <RouterLink to="/crac19">
    <div class="group relative">
      <img class="w-80" src="../img/Cover_crac_19.webp" alt="Couverture du Crac 19"/>

      <!-- Apparition des outils utilisés sur ce projet -->
        <div class="absolute top-0 h-0 w-full flex justify-center items-center bg-zinc-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          <div class="flex">
          </div>
        </div>
    </div>
    <div>
        <h1 class="text-white text-5xl text-center my-5">Le 19, Crac</h1>
    </div>
    </RouterLink> 
    </div> 

        <!--Card Benevers -->
        <div class="bg-black w-80 rounded-b-xl mb-12">
    <RouterLink to="/benevers">
    <div class="group relative">
      <img class="w-80" src="../img/Benevers.webp" alt="Couverture du Crac 19"/>

      <!-- Apparition des outils utilisés sur ce projet -->
        <div class="absolute top-0 h-0 w-full flex justify-center items-center bg-zinc-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          <div class="flex">
          </div>
        </div>
    </div>
    <div>
        <h1 class="text-white text-5xl text-center my-5">Benevers</h1>
    </div>
    </RouterLink> 
    </div> 

</div> 
</template>