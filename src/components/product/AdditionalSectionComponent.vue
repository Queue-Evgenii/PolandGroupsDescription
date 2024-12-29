<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Niezbędne elementy</h2>
    <div class="row q-col-gutter-xl">
      <div
        class="col-md-3 col-sm-6 col-12"
        style="display: flex; flex-direction: column"
        v-for="(item, index) in data.additional"
        :key="index"
      >
        <div
          class="q-pa-sm q-mb-md"
          style="border: 1px solid #888; text-align: center; flex: 1 1 100%"
        >
          <q-img
            fit="contain"
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
