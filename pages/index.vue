<script setup>
const { event } = await useEvent();

const fakten = [
  { zahl: "58 m", text: "Länge" },
  { zahl: "24 m", text: "Höhe" },
  { zahl: "90 s", text: "Fahrzeit" },
];
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

        <p>
          Gelaufen wird auf der längsten freistehenden Rolltreppe Deutschlands –
          im UNESCO-Welterbe Zollverein in Essen.
        </p>
      </div>

      <div class="columns is-mobile is-gapless fakten mb-5">
        <div v-for="f in fakten" :key="f.zahl" class="column has-text-centered">
          <p class="fakt-zahl">{{ f.zahl }}</p>
          <p class="fakt-text">{{ f.text }}</p>
        </div>
      </div>

      <p class="mb-6">
        <a href="#mitmachen" class="button is-medium is-fullwidth cta">
          Ich will mitlaufen!
        </a>
      </p>

      <div class="content">
        <p>
          <strong>Wir haben's ausprobiert.</strong> Testlauf am 10. November auf
          Zollverein:
        </p>
      </div>

      <div class="columns is-mobile videos mb-5">
        <figure class="column">
          <video
            src="/videos/laeufer-nach-oben.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          ></video>
          <figcaption class="has-text-grey is-size-7">
            Einmal ganz nach oben – 58 Meter am Stück.
          </figcaption>
        </figure>
        <figure class="column">
          <video
            src="/videos/zollverein-testlauf.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          ></video>
          <figcaption class="has-text-grey is-size-7">
            Erst oben, dann unten – Runde eins geht an die Treppe.
          </figcaption>
        </figure>
      </div>

      <QuoteElement name="Marcus" department="FF Taufkirchen/Vils">
        Ja bist du deppert 🙈
      </QuoteElement>

      <div class="content">
        <p><strong>Wie läuft's ab?</strong> Voraussichtlich in zwei Phasen:</p>

        <ol>
          <li>
            <strong>Qualifying:</strong> Die Rolltreppe steht still, du läufst
            sie hoch wie eine normale Treppe. Wer unter der Cut-off-Zeit bleibt,
            ist weiter.
          </li>
          <li>
            <strong>Finale:</strong> Die Rolltreppe fährt nach unten – und du
            läufst trotzdem hoch. Auch hier gibt's eine Cut-off-Zeit: Wer sie
            reißt, ist raus.
          </li>
        </ol>

        <p>Die genauen Zeiten und die Wertung arbeiten wir gerade aus.</p>
      </div>

      <div class="galerie mb-5">
        <img
          src="/images/testlauf/laeufer-treppe.jpg"
          alt="Feuerwehrmann in Einsatzkleidung auf der orangen Rolltreppe"
          loading="lazy"
        />
        <img
          src="/images/testlauf/laeuferin-treppe.jpg"
          alt="Feuerwehrfrau in Einsatzkleidung auf der Rolltreppe"
          loading="lazy"
        />
        <img
          src="/images/testlauf/team.jpg"
          alt="Das Testlauf-Team lachend am Ende der Rolltreppe"
          class="breit"
          loading="lazy"
        />
      </div>

      <QuoteElement name="Martin" department="BF Krefeld">
        Die Lichter anmachen, bevor die Lampen ausgehen 🤣
      </QuoteElement>
    </div>
  </section>

  <ImageSection
    url="/images/testlauf/rolltreppe-nacht.jpg"
    :position="{ y: 60 }"
  >
    <div class="content">
      <p>
        <strong>Wo?</strong> Auf Zollverein in Essen – an genau der Rolltreppe
        aus den Videos. Sie führt an der ehemaligen Kohlenwäsche hinauf zum Ruhr
        Museum, mitten im UNESCO-Welterbe.
      </p>

      <p>
        <strong>Wann?</strong> Der Termin steht noch nicht fest. Sobald er klar
        ist, erfährst du es zuerst.
      </p>
    </div>

    <div class="galerie quadrat mb-5">
      <img
        src="/images/testlauf/rolltreppe-aussen.jpg"
        alt="Die verglaste Rolltreppe an der Kohlenwäsche von außen"
        loading="lazy"
      />
      <img
        src="/images/testlauf/foerderturm.jpg"
        alt="Der Förderturm von Schacht XII auf Zollverein"
        loading="lazy"
      />
    </div>

    <QuoteElement name="Manuel" department="BwF Laupheim">
      Das ist mal ne wilde Sache 🦾
    </QuoteElement>

    <div id="mitmachen" class="content">
      <p>
        <strong>Hast du Bock drauf?</strong> Dann trag dich ein – wir melden uns
        per WhatsApp, sobald es Genaueres oder Testläufe gibt. Deine Daten
        nutzen wir nur dafür ツ
      </p>

      <InterestForm />

      <p class="has-text-grey is-size-7 mt-5">
        <strong class="has-text-grey">Inspiration:</strong> In Budapest wird
        schon gegen die Rolltreppe gelaufen, siehe
        <a href="https://www.instagram.com/p/DY1t5xMC8JE/" target="_blank"
          >Instagram-Beitrag von Jánosa Bence</a
        >. Danke an Fabian für den Tipp!
      </p>
    </div>
  </ImageSection>
</template>

<style scoped>
.fakten {
  border-top: 3px solid #f26a1b;
  border-bottom: 3px solid #f26a1b;
  padding: 0.75rem 0;
}

.fakt-zahl {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
  color: #f26a1b;
}

.fakt-text {
  font-size: 0.8rem;
  color: #7a7a7a;
}

.cta {
  background: #f26a1b;
  border-color: #f26a1b;
  color: #fff;
  font-weight: 700;
}

.cta:hover {
  background: #d95a10;
  color: #fff;
}

.videos video {
  display: block;
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: cover;
  border-radius: 6px;
  background: #000;
}

.videos figcaption {
  margin-top: 0.25rem;
}

.galerie {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.galerie img {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 6px;
}

.galerie img.breit {
  grid-column: 1 / -1;
  aspect-ratio: 4 / 3;
}

.galerie.quadrat img {
  aspect-ratio: 1 / 1;
}

#mitmachen {
  scroll-margin-top: 1rem;
}
</style>
