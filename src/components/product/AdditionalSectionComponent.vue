<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Дополнительная комплектация</h2>
    <div class="row q-col-gutter-xl q-pl-lg">
      <div
        class="col"
        style="flex: 0 1 25%"
        v-for="(item, index) in data.additional"
        :key="index"
      >
        <div
          class="q-pa-sm q-mb-md"
          style="border: 1px solid #888; text-align: center"
        >
          <q-img
            style="height: 100%"
            :src="require(`../../data/products/${data.id}/${item.image}`)"
          />
        </div>
        <h3 style="font-size: 15px; line-height: 1.2; font-weight: 600">
          {{ item.name }}
        </h3>
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
