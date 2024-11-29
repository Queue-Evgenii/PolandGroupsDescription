<template>
  <ul
    :class="
      'items-center justify-center' +
      (isMobile ? ' column q-py-lg _row-gap-16' : ' row _col-gap-32')
    "
    style="font-weight: 500; line-height: 1.2"
  >
    <li v-for="(item, index) in items" :key="index" class="header-menu__item">
      <a :href="item.url" target="_blank" rel="noopener noreferrer">{{
        item.name
      }}</a>
    </li>
    <li>
      <a href="tel:+48884074848">Warszawa: +48 884 074 848</a>
    </li>
  </ul>
</template>

<style>
.header-menu__item a:after {
  content: "";
  display: block;
  bottom: 0;
  width: 0;
  transition: width 0.5s;
  margin: 0 auto;
  height: 1px;
  background: #000;
}
.header-menu__item a:hover::after {
  width: 100%;
}
</style>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});
defineOptions({
  name: "HeaderMenuComponent",
});
</script>
