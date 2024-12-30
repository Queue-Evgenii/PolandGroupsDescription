<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Zastosować</h2>
    <div class="row q-col-gutter-lg q-pl-lg">
      <div
        class="col-md-6 col-12"
        v-for="(item, index) in data.usage"
        :key="index"
      >
        <q-img
          v-if="item.image.length > 0"
          class="col q-mb-md"
          fit="scale-down"
          style="max-height: 320px"
          :src="require(`../../data/products/${data.id}/${item.image}`)"
        />
        <div style="line-height: 1.55">{{ item.value }}</div>
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
