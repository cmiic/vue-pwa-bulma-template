<script setup>
import { RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <section class="hero is-light is-fullheight">
    <PageHeader :user="user" />
    <div class="hero-body">
      <div class="container">
        <RouterView />
      </div>
    </div>
  </section>
</template>

<style>
@import "bulma/css/bulma.css";
</style>
