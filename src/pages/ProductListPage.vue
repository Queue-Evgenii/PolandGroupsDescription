<template>
  <q-page class="_container-default">
    <div class="q-py-xl">
      <h1 class="_title-great q-mb-lg">Product List</h1>
      <q-list bordered class="rounded-borders row">
        <q-item
          clickable
          v-for="(product, index) in products"
          :key="index"
          class="col-sm-6 col-12"
        >
          <q-item-section>
            <router-link
              :to="'/' + product.id"
              class="full-width no-decoration"
              style="line-height: 1.55"
            >
              {{ product.name }}
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { products } from "src/data";

defineOptions({
  name: "ProductPage",
});
</script>
