<template>
  <q-layout view="hhh lpr fff">
    <header-component :menu="headerMenu" />

    <q-page-container>
      <slot></slot>
    </q-page-container>

    <footer-component />
  </q-layout>
</template>
<script setup>
import HeaderComponent from 'src/components/layout/HeaderComponent.vue';
import FooterComponent from 'src/components/layout/FooterComponent.vue';

const headerMenu = [
  {
    name: 'GŁÓWNA',
    url: 'https://polandgroups.pl/',
  },
  {
    name: 'SUFITY NAPINANE',
    url: 'https://polandgroups.pl/sufity-napinane',
  },
  {
    name: 'O FIRMIE',
    url: 'https://polandgroups.pl/o-firmie',
  },
  {
    name: 'GALERIA',
    url: 'https://polandgroups.pl/galeria',
  },
  {
    name: 'KONTAKT',
    url: 'https://polandgroups.pl/kontakt',
  },
]

defineOptions({
  name: 'MainLayout',
})
</script>
