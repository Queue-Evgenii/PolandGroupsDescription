<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Монтаж</h2>
    <div class="row q-col-gutter-lg">
      <div
        class="col-md-6 col-12 row items-start"
        v-for="(item, index) in data"
        :key="index"
      >
        <i class="material-icons _icon col-auto q-pr-md"> task_alt </i>
        <div class="col">
          <h3 class="_subtitle q-mb-sm">{{ item.name }}</h3>
          <p style="font-size: 15px; line-height: 1.55">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
defineOptions({
  name: "MountSectionComponent",
});
</script>
