<template>
  <q-footer
    class="_container-default"
    bordered
    style="padding-top: 36px; padding-bottom: 24px"
  >
    <div class="row q-gutter-lg">
      <div class="col-12 col-md-6">
        <logo-component />
        <div class="footer-address">
          <span>POLANDGROUPS Sp. z o.o.</span>
          <span>Ul.Grochowska 170 / 90 Warszawa 04-357</span>
          <span>NIP: 1132910509, REGON: 364474954, KRS: 0000618480</span>
          <span>Sąd Rejonowy dla m. Warszawy</span>
          <span>XII Wydział Gospodarczy Krajowego</span>
          <span>Rejestru Sądowego</span>
        </div>
      </div>
      <div class="col">
        <ul class="row q-col-gutter-md" style="font-weight: 700">
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style="font-weight: 400">We in</span>
              YouTube
            </a>
          </li>
          <li>
            <a href="tel:+48884074848">
              <p style="margin: 0">Warszawa:</p>
              <p style="margin: 5px 0 0">+48 884 074 848</p>
            </a>
          </li>
        </ul>
      </div>
      <socials-component class="col-auto" />
    </div>
  </q-footer>
</template>

<style>
.footer-address {
  font-size: 14px;
  line-height: 1.2;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}
</style>

<script setup>
import LogoComponent from "./LogoComponent.vue";
import SocialsComponent from "./SocialsComponent.vue";

defineOptions({
  name: "FooterComponent",
});
</script>
