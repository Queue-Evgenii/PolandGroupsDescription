<template>
  <a
    href="https://polandgroups.pl/"
    target="_blank"
    rel="noopener noreferrer"
    class="_logo"
  >
    <img src="../../assets/images/logo.png" />
  </a>
</template>

<script setup>

defineOptions({
  name: 'LogoComponent',
})
</script>

<style>
._logo {
  filter: grayscale(100%) brightness(0.85) contrast(1.2);
}
</style>