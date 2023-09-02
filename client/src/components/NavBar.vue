<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Blogs</RouterLink>
    <RouterLink :to="{ name: 'createPost' }">Create a Post</RouterLink>
  </nav>
  
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style></style>
