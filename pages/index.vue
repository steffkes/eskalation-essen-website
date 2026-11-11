<script setup>
const { event } = await useEvent();
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

      <div class="content">
        <p>
          <strong>Wir haben's ausprobiert.</strong> Testlauf auf der Rolltreppe
          im UNESCO-Welterbe Zollverein in Essen:
        </p>

        <figure class="testlauf mx-auto mb-5">
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

      <QuoteElement name="Martin" department="BF Krefeld">
        Die Lichter anmachen, bevor die Lampen ausgehen 🤣
      </QuoteElement>

      <div class="content">
        <p>
          <strong>Wo?</strong> Auf Zollverein in Essen – an genau der Rolltreppe
          aus dem Video.
        </p>

        <p>
          <strong>Wann?</strong> Der Termin steht noch nicht fest. Sobald er
          klar ist, erfährst du es zuerst.
        </p>
      </div>

      <QuoteElement name="Manuel" department="BwF Laupheim">
        Das ist mal ne wilde Sache 🦾
      </QuoteElement>

      <div class="content">
        <p>
          Hast du Bock drauf? Dann trag dich ein – wir melden uns per WhatsApp,
          sobald es Genaueres oder Testläufe gibt. Deine Daten nutzen wir nur
          dafür ツ
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
    </div>
  </section>
</template>

<style scoped>
.testlauf {
  max-width: 320px;
}

.testlauf video {
  display: block;
  width: 100%;
  aspect-ratio: 576 / 1024;
  border-radius: 6px;
  background: #000;
}
</style>
