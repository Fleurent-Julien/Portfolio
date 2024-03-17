<script setup>
import { RouterView } from 'vue-router';
import headervue from './components/header.vue';
import footervue from './components/footer.vue'
</script>

<template>
  <headervue />
  
  <Suspense>
 <RouterView />
  </Suspense>

  <footervue />
</template>