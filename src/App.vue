<script setup>
import { RouterView } from 'vue-router';
import headervue from './components/header.vue';
</script>

<template>
  <headervue />
  
  <Suspense>
 <RouterView />
  </Suspense>
</template>