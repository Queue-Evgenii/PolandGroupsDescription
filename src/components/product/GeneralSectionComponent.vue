<template>
  <section class="_section">
    <h1 class="_title-great q-mb-xl">
      {{ data.name }}
    </h1>
    <div class="row q-col-gutter-lg q-mb-lg">
      <div class="col-12 col-md-6">
        <q-img :src="require(`../../data/products/${data.id}/${data.image}`)" />
      </div>
      <div class="col-12 col-md-6">
        <p class="_text-great">
          {{ data.description }}
        </p>
      </div>
    </div>
    <div v-if="data.file.length > 0">
      <q-btn
        square
        outline
        class="q-px-lg"
        style="padding-top: 12px; padding-bottom: 12px"
        @click="openFile"
      >
        <i
          class="material-icons _icon-small"
          style="color: #000; margin-right: 8px"
        >
          picture_as_pdf
        </i>
        <span style="text-transform: initial; font-weight: 700">
          Скачать каталог
        </span>
      </q-btn>
    </div>
  </section>
</template>

<script setup>
const openFile = () => {
  if (!data.file || data.file.length === 0) return;
  const pdfFile = require(`../../data/products/${data.id}/${data.file}`);
  window.open(pdfFile.default, "_blank");
};

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
defineOptions({
  name: "GeneralSectionComponent",
});
</script>
