<script setup>
const { event } = await useEvent();

const name = ref("");
const email = ref("");
const phone = ref("");
const origin = ref("");
const website = ref(""); // honeypot

const isLoading = ref(false);
const isSent = ref(false);
const hasError = ref(false);

async function contactForm() {
  isLoading.value = true;
  hasError.value = false;
  try {
    await $fetch("/api/interest", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        origin: origin.value,
        website: website.value,
      },
    });
    isSent.value = true;
  } catch {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div v-if="isSent" class="notification is-success">
    <p>
      <strong>Danke =) Wir freuen uns, dass du dich freust!</strong> Wir melden
      uns, sobald es etwas Neues gibt zu {{ event.name }} ·
      {{ event.description }} &mdash; stay tuned!
    </p>

    <p class="mt-4">
      Bei Fragen, Ideen bzw. Anregungen: meld dich einfach jederzeit bei uns.
    </p>

    <p class="mt-4">
      <a
        class="button is-success is-inverted"
        :href="
          'https://wa.me/?text=' +
          encodeURIComponent(
            event.name + ' – ' + event.description + ' ' + event.url,
          )
        "
        target="_blank"
        rel="noopener"
        >Schick's an deine Wache 📲</a
      >
    </p>
  </div>

  <form v-else @submit.prevent="contactForm">
    <div v-if="hasError" class="notification is-danger is-light">
      Das hat leider nicht geklappt. Prüf bitte deine Angaben und versuch es
      nochmal – oder schreib uns direkt eine E-Mail.
    </div>

    <div style="position: absolute; left: -10000px" aria-hidden="true">
      <label>
        Website
        <input v-model="website" type="text" tabindex="-1" autocomplete="off" />
      </label>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Name *</label>
          <div class="control">
            <input
              v-model="name"
              type="text"
              class="input"
              placeholder="Dein Name"
              required
              :disabled="isLoading"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Feuerwehr / Wache *</label>
          <div class="control">
            <input
              v-model="origin"
              type="text"
              class="input"
              placeholder="z.B. FF Taufkirchen/Vils"
              required
              :disabled="isLoading"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">E-Mail *</label>
          <div class="control">
            <input
              v-model="email"
              type="email"
              class="input"
              placeholder="Deine E-Mail-Adresse"
              required
              :disabled="isLoading"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Handynummer *</label>
          <div class="control">
            <input
              v-model="phone"
              type="tel"
              class="input"
              placeholder="Deine Handynummer"
              required
              :disabled="isLoading"
            />
          </div>
          <p class="help">
            Für WhatsApp – darüber organisieren wir auch Testläufe.
          </p>
        </div>

        <p class="help mt-5">
          Wir nutzen deine Daten nur, um dich über {{ event.name }} auf dem
          Laufenden zu halten.
        </p>

        <div class="field mt-3">
          <button
            type="submit"
            class="button is-primary is-fullwidth"
            :class="{
              'is-loading': isLoading,
            }"
          >
            Sagt mir Bescheid, wenn's losgeht!
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
