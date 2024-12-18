<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Dane Techniczne</h2>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6 row q-col-gutter-lg scheme-columns">
        <div
          v-for="(item, index) in data.technical.value"
          :key="index"
          class="col-md-12 col-sm-6 col-12 scheme-column"
        >
          <h3 class="_subtitle q-mb-sm">{{ item.name }}</h3>
          <ul>
            <li
              v-for="(subitem, subindex) in item.value"
              :key="subindex"
              style="font-size: 15px; line-height: 1.55"
            >
              {{
                subitem.name + (subitem.value ? ": " + subitem.value : "") + "."
              }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <q-img
          class="scheme-img"
          fit="contain"
          :src="
            require(`../../data/products/${data.id}/${data.technical.image}`)
          "
        />
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
  name: "TechnicalSectionComponent",
});
</script>

<style>
.scheme-img {
  max-height: 400px;
}
</style>
