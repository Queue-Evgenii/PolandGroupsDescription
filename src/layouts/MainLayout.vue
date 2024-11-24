<template>
  <q-layout view="hhh lpR fff">
    <q-header elevated>
      <div class="_container-wide row items-center">
        <div class="col-auto">
          <img src="../assets/images/logo.png" />
        </div>
        <ul>
        </ul>
        <ul>
        </ul>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div class="_container-wide">
        footer
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>

defineOptions({
  name: 'MainLayout'
})
</script>
