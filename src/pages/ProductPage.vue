<template>
  <q-page class="_container-default" v-if="productData">
    <div class="q-py-xl">
      <breadcrumbs-component
        :items="[...staticBreadcrumbs, ...dynamicBreadcrumbs]"
      />
      <general-section-component :data="productData" />
      <technical-section-component
        v-if="productData.technical"
        :data="productData"
      />
      <mount-section-component
        v-if="productData.mount && productData.mount.length > 0"
        :data="productData.mount"
      />
      <usage-section-component v-if="productData.usage" :data="productData" />
      <finished-examples-section-component
        v-if="productData.finished"
        :data="productData"
      />
      <youtube-section-component />
      <additional-section-component
        v-if="productData.additional"
        :data="productData"
      />
    </div>
  </q-page>
  <q-page class="_container-default" v-else>
    <section class="_section">Product not found</section>
  </q-page>
</template>

<script setup>
import BreadcrumbsComponent from "src/components/general/BreadcrumbsComponent.vue";
import GeneralSectionComponent from "src/components/product/GeneralSectionComponent.vue";
import TechnicalSectionComponent from "src/components/product/TechnicalSectionComponent.vue";
import MountSectionComponent from "src/components/product/MountSectionComponent.vue";
import UsageSectionComponent from "src/components/product/UsageSectionComponent.vue";
import FinishedExamplesSectionComponent from "src/components/product/FinishedExamplesSectionComponent.vue";
import YoutubeSectionComponent from "src/components/product/YoutubeSectionComponent.vue";
import AdditionalSectionComponent from "src/components/product/AdditionalSectionComponent.vue";

import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";

const staticBreadcrumbs = [
  {
    name: "Home",
    url: "https://polandgroups.pl",
  },
  {
    name: "Products",
    url: "",
  },
];
const dynamicBreadcrumbs = ref([]);

const route = useRoute();
const productData = ref(null);

const createDynamicBreadcrumbs = () => {
  dynamicBreadcrumbs.value = [
    {
      name: productData.value.name,
      url: "",
    },
  ];
};
const loadProduct = async () => {
  const id = route.params.id;
  import(`../data/products/${id}/index.js`)
    .then((product) => {
      productData.value = product.data;
      createDynamicBreadcrumbs();
    })
    .catch((error) => {
      console.error("Product not found:", error);
    });
};

onMounted(() => {
  loadProduct();
});
watch(() => route.params.id, loadProduct);
defineOptions({
  name: "ProductPage",
});
</script>
