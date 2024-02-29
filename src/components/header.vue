<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="bg-black text-white flex justify-end align-middle py-4 space-x-10 px-5 no-underline">
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
        <RouterLink to="/projets" class="hover:underline">Mes projets</RouterLink>
        <a href="../img/CV_Fleurent_Julien.pdf" download="CV_Fleurent_Julien.pdf" class="text-center">Mon CV</a>
    </nav>
</template>
