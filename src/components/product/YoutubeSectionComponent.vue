<template>
  <section class="_section">
    <a
      href="https://www.youtube.com/"
      target="_blank"
      class="row q-col-gutter-lg items-center"
    >
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
      <div class="col-sm-6 col-0">
        <q-img src="../../assets/images/youtube-prev.webp" />
      </div>
    </a>
  </section>
</template>

<script setup>
defineOptions({
  name: "YoutubeSectionComponent",
});
</script>
