<template>
  <section class="_section">
    <h1 class="_title-great q-mb-xl">
      {{ data.name }}
    </h1>
    <div class="row q-gutter-{32} q-mb-lg">
      <q-img
        class="col-12 col-md-6"
        :src="require(`../../data/products/${data.id}/${data.image}`)"
      />
      <div class="col-12 col-md-6">
        <p class="_text-great">
          {{ data.description }}
        </p>
      </div>
    </div>
    <div>
      <q-btn
        square
        outline
        class="q-px-lg"
        style="padding-top: 12px; padding-bottom: 12px"
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
