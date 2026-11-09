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
          <label class="label">Herkunft *</label>
          <div class="control">
            <input
              v-model="origin"
              type="text"
              class="input"
              placeholder="Woher kommst du / bei welcher Organisation?"
              required
              :disabled="isLoading"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">eMail *</label>
          <div class="control">
            <input
              v-model="email"
              type="email"
              class="input"
              placeholder="Deine eMail-Adresse"
              required
              :disabled="isLoading"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Handy-Nummer *</label>
          <div class="control">
            <input
              v-model="phone"
              type="tel"
              class="input"
              placeholder="Deine Handy-Nummer"
              required
              :disabled="isLoading"
            />
          </div>
        </div>

        <div class="field mt-6">
          <button
            type="submit"
            class="button is-primary is-fullwidth"
            :class="{
              'is-loading': isLoading,
            }"
          >
            Sagt mir Bescheid wenn's los geht!
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
