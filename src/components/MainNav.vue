<script setup>
import { RouterLink } from "vue-router";
defineProps({
  menuActive: {
    type: Boolean,
  },
});
</script>

<template>
  <nav id="mainnav" class="navbar-menu" :class="{ 'is-active': menuActive }">
    <div class="navbar-end">
      <RouterLink to="/" class="navbar-item">Start</RouterLink>
      <RouterLink to="/about" class="navbar-item">Über</RouterLink>
    </div>
  </nav>
</template>

<style></style>
