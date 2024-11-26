<template>
  <section class="_section">
    <h2 class="_title q-mb-xl">Техническое описание</h2>
    <div class="row">
      <div class="col-12 col-md-6 row">
        <div
          v-for="(item, index) in data.technical.value"
          :key="index"
          class="_list-mb-36 col-md-12 col-sm-6 col-12"
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
      <q-img
        class="col-12 col-md-6"
        fit="contain"
        :src="require(`../../data/products/${data.id}/${data.technical.image}`)"
      />
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
