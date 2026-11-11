<template>
  <div
    class="mt-6 fixed"
    :style="{
      'min-height': '40vh',
      'background-image': 'url(' + url + ')',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position':
        (position.x ?? '50') + '% ' + (position.y ?? '50') + '%',
      '--ratio': ratio,
    }"
  ></div>

  <section class="section">
    <div class="container is-max-desktop">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.fixed {
  background-attachment: fixed;
}

/*
 * On desktop the layout has a fixed hero column on the left (42%), so the
 * content column spans 42vw–100vw. A fixed background is sized and placed
 * relative to the whole viewport, which would only show the right part of
 * the image. Size it to cover the content column and center it there.
 */
@media screen and (min-width: 1024px) {
  @supports not (-webkit-touch-callout: inherit) {
    .fixed {
      --height: max(100vh, calc(58vw / var(--ratio)));
      background-size: auto var(--height) !important;
      background-position-x: calc(
        71vw - var(--height) * var(--ratio) / 2
      ) !important;
    }
  }
}

@supports (-webkit-touch-callout: inherit) {
  .fixed {
    background-attachment: scroll;
  }
}
</style>

<script setup>
defineProps({
  url: String,
  position: { type: Object, default: () => ({}) },
  // width / height of the image
  ratio: { type: Number, default: 4 / 3 },
});
</script>
