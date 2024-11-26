<template>
  <q-breadcrumbs separator="→" active-color="dark">
    <template v-for="(item, index) in items" :key="index">
      <q-breadcrumbs-el v-if="item.url.length === 0" :label="item.name" />
      <q-breadcrumbs-el
        v-else
        :label="item.name"
        :href="item.url"
        target="_blank"
      />
    </template>
  </q-breadcrumbs>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
defineOptions({
  name: "BreadcrumbsComponent",
});
</script>
