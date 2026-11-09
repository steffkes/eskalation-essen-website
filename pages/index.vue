<script setup>
const { event } = await useEvent();
const isVideoActive = ref(false);
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="content">
        <p class="is-size-5">
          <strong>Ein Treppenlauf gegen die Rolltreppe:</strong> rauf, während
          sie runterfährt.
        </p>

        <p>
          Treppenläufe für Feuerwehrleute gibt es viele. Hochhäuser,
          Skiflugschanzen, Aussichtstürme – alles schon gelaufen. Mal kurz, mal
          lang, mal mehrfach hintereinander. Aber eine Treppe, die dir
          entgegenkommt? Das gab's noch nie.
        </p>
      </div>

      <QuoteElement name="Marcus" department="FF Taufkirchen/Vils">
        Ja bist du deppert 🙈
      </QuoteElement>

      <div class="content">
        <p>
          In Budapest wird bereits gegen eine Rolltreppe gelaufen. Als wir den
          <a
            @click.prevent="isVideoActive = true"
            href="https://www.instagram.com/p/DY1t5xMC8JE/"
            >Instagram-Beitrag von Jánosa Bence</a
          >
          gesehen haben, war klar: <strong>Das brauchen wir auch.</strong>
        </p>

        <div id="video" class="mb-4">
          <p v-if="!isVideoActive" class="mb-0">
            <button @click="isVideoActive = true" class="button is-fullwidth">
              Zeig mir das crazy Video auf der Rolltreppe
            </button>
          </p>

          <div
            v-else
            style="
              position: relative;
              width: 100%;
              height: 0px;
              padding-bottom: 177.778%;
            "
          >
            <iframe
              allow="fullscreen"
              allowfullscreen
              height="100%"
              src="https://streamable.com/e/mb5o7p?autoplay=1&loop=0&muted=1&nocontrols=1"
              width="100%"
              style="
                border: none;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
                overflow: hidden;
              "
            ></iframe>
          </div>
        </div>
      </div>

      <QuoteElement name="Martin" department="BF Krefeld">
        Die Lichter anmachen, bevor die Lampen ausgehen 🤣
      </QuoteElement>

      <div class="content">
        <p>
          <strong>Wann und wo?</strong> Steht noch nicht fest – wir suchen
          gerade die passende Rolltreppe. Sobald Ort und Termin klar sind,
          erfährst du es zuerst.
        </p>

        <p>
          <strong>Du kennst eine lange Rolltreppe?</strong> Oder jemanden, der
          eine betreibt – Kaufhaus, Bahnhof, Parkhaus?
          <a :href="event.organizer.email">Schreib uns!</a>
        </p>
      </div>

      <QuoteElement name="Manuel" department="BwF Laupheim">
        Das ist mal ne wilde Sache 🦾
      </QuoteElement>

      <div class="content">
        <p>
          Hast du Bock drauf? Dann trag dich ein – wir melden uns, sobald es
          Genaueres gibt ツ
        </p>

        <InterestForm />
      </div>
    </div>
  </section>
</template>
