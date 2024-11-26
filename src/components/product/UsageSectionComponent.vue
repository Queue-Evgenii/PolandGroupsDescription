<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Применение</h2>
    <div class="row q-col-gutter-lg q-pl-lg">
      <div
        class="col"
        style="flex: 0 1 50%"
        v-for="(item, index) in data.usage"
        :key="index"
      >
        <q-img
          class="col q-mb-md"
          fit="scale-down"
          style="max-height: 320px"
          :src="require(`../../data/products/${data.id}/${item.image}`)"
        />
        <div>{{ item.value }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
defineOptions({
  name: "UsageSectionComponent",
});
</script>
