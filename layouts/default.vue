<script setup>
const { event, subline } = await useEvent();

const activeModal = ref(false);

const shareTitle = event.name + " · " + subline;

useSeoMeta({
  description: event.description,
  ogTitle: shareTitle,
  ogDescription: event.description,
  ogSiteName: event.name,
  ogLocale: "de_DE",
  ogUrl: event.url,
  ogImage: event.url + "/og.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Die orange Rolltreppe am Ruhr Museum auf Zollverein",
  twitterTitle: shareTitle,
  twitterDescription: event.description,
});

const activeNavbar = ref(false);
const toggleNavbar = () => (activeNavbar.value = !activeNavbar.value);

const route = useRoute();

useHead({
  titleTemplate: (pageTitle) =>
    [pageTitle, event.name].filter(Boolean).join(" | "),
  viewport: "width=device-width, initial-scale=1",
  htmlAttrs: { lang: "de" },
  charset: "utf-8",
  meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: event.name },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(event),
    },
  ],
  link: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div class="columns is-gapless" style="min-height: 100vh">
    <div style="position: relative" class="column is-5">
      <!-- min-height on column needed for mobile -->
      <!-- @ mobile -->
      <div
        class="is-hidden-tablet"
        style="
          background-image: url(/images/hero.jpg);
          background-size: cover;
          background-position: 50% 50%;
          min-height: 50vh;
        "
      >
        &nbsp;
      </div>

      <!-- @ desktop -->
      <div
        class="is-hidden-touch"
        style="
          position: fixed;
          width: 42%;
          height: 100%;
          background-image: url(/images/hero.jpg);
          background-size: cover;
          background-position: 50% 50%;
        "
      >
        &nbsp;
      </div>
    </div>

    <div class="column">
      <div
        class="modal"
        :class="{ 'is-active': activeModal }"
        @click="activeModal = false"
      >
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image">
            <img :src="'/qr-code.svg'" alt="QR-Code zu dieser Seite" />
          </p>
        </div>
      </div>
      <a
        class="is-hidden-desktop"
        @click="activeModal = true"
        style="position: fixed; right: 0px; bottom: 0px"
        ><img
          :src="'/qr-code.svg'"
          alt="QR-Code anzeigen"
          style="opacity: 0.1; height: 20px; margin: 10px"
      /></a>

      <section class="section pb-0">
        <div class="container is-max-desktop">
          <div class="content">
            <h1 class="title">{{ event.name }}</h1>
            <p class="subtitle">{{ subline }}</p>
          </div>
        </div>
      </section>

      <slot />

      <div class="px-6">
        <p class="has-text-right">
          <a href="/impressum" class="has-text-grey-light">Impressum</a>
        </p>
      </div>

      <CompetitionsFooter :event="event" class="px-6 pb-6" />
    </div>
  </div>
</template>

<style>
@import url("bulma");
</style>
