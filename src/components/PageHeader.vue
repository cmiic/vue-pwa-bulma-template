<script setup>
import MainNav from "./MainNav.vue";
import { ref } from "vue";
const menuActive = ref(false);

</script>

<template>
  <div class="hero-head">
    <header class="navbar is-fixed-top">
      <div class="container is-justify-content-space-between">
        <div class="navbar-brand">
          <figure class="">
            <a href="#" class="navbar-item">
              <img src="@/assets/logo.svg" alt="Logo" class="logo" />
              
            </a>
          </figure>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            :class="{ 'is-active': menuActive }"
            @click="menuActive = !menuActive"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <MainNav :menu-active="menuActive" />
      </div>
    </header>
  </div>
</template>

<style scoped>
.hero .navbar {
  background: #83e4ff;
  /* padding: 0.5rem; */
}

.navbar-item img {
  max-height: 4.75rem;
}
.title {
  opacity: 0.8;
  padding-left: 0.5rem;
}

.logo {
  height: 2.2rem;
}
</style>
