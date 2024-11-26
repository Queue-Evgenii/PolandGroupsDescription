<template>
  <section class="_section row items-center">
    <div class="col" style="text-align: center">
      <q-img
        class="col"
        style="width: 70px"
        src="../../assets/images/youtube-logo.png"
      />
      <h2 class="_subtitle q-mb-md q-mt-sm">
        Подписывайтесь на наш YouTube канал!
      </h2>
      <h3 style="opacity: 0.65">@some-youtube-channel</h3>
    </div>
    <q-img class="col" src="../../assets/images/youtube-prev.webp" />
  </section>
</template>

<script setup>
defineOptions({
  name: "YoutubeSectionComponent",
});
</script>
