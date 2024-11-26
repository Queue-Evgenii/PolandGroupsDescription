<template>
  <q-header elevated class="q-py-sm">
    <div class="_container-wide row items-center justify-between _col-gap-48">
      <logo-component />
      <header-menu-component :items="menu" class="gt-sm col" />
      <div class="col-auto row">
        <socials-component />
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="lt-md q-ml-sm"
          @click="isBurgerOpen = !isBurgerOpen"
        />
      </div>
    </div>

    <div :class="'menu-burger' + (isBurgerOpen ? ' _active' : '')">
      <header-menu-component :items="menu" :is-mobile="true" />
    </div>
  </q-header>
</template>

<script setup>
import LogoComponent from "src/components/layout/LogoComponent.vue";
import HeaderMenuComponent from "./HeaderMenuComponent.vue";
import SocialsComponent from "./SocialsComponent.vue";

import { ref } from "vue";

const isBurgerOpen = ref(false);

const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
});
defineOptions({
  name: "HeaderComponent",
});
</script>

<style lang="scss">
.menu-burger {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &._active {
    height: 245px;
  }
}
</style>
