<template>
  <q-header elevated class=" q-py-sm">
    <div class="_container-wide row items-center _col-gap-48">
      <logo-component />
      <ul class="col row items-center justify-center _col-gap-32" style="font-weight: 500">
        <li v-for="(item, index) in menu" :key="index">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
        </li>
        <li>
          <a href="tel:+48884074848">Warszawa: +48 884 074 848</a>
        </li>
      </ul>
      <socials-component />
    </div>
  </q-header>
</template>

<script setup>
import LogoComponent from 'src/components/layout/LogoComponent.vue';
import SocialsComponent from './SocialsComponent.vue';

const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
});
defineOptions({
  name: 'HeaderComponent',
})
</script>