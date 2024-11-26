<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script setup>
import MainLayout from "./layouts/MainLayout.vue";

defineOptions({
  name: "App",
});
</script>
