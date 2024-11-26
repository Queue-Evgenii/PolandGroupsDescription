<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Готовые углы</h2>
    <div class="row q-col-gutter-xl">
      <div
        class="col-md-3 col-sm-6 col-12"
        v-for="(item, index) in data.finished"
        :key="index"
      >
        <q-img
          class="col"
          fit="scale-down"
          style="max-height: 320px"
          :src="require(`../../data/products/${data.id}/${item.image}`)"
        />
        <div>
          <h3
            class="q-mb-sm"
            style="font-size: 14px; line-height: 1.2; font-weight: 600"
          >
            {{ item.name }}
          </h3>
          <p
            v-for="(subitem, subindex) in item.value"
            :key="subindex"
            style="font-size: 14px; line-height: 1.55"
          >
            {{ subitem }}
          </p>
        </div>
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
  name: "FinishedExamplesSectionComponent",
});
</script>
