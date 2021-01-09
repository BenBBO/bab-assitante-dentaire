<template>
  <div id="home" class="d-flex">
    <div class="description align-self-center">
      <div class="catch-phrase">Travaillons ensemble pour demain</div>
      <div class="name">Barbara Bouillet</div>
      <p class="titre">Assistante dentaire indépendante.</p>
      <p class="prestations">
        Acompagnatrice à l'hygiène bucco-dentaire (tout public). Aide à
        l'évasion et à la détente au soin des enfants. <br />
        Artisanat en pose de facettes lumineers. Assistanat en 4 ou 6 mains en
        implantologie, chirurgie ou tout type de soin.
      </p>
    </div>
    <div class="indicators align-self-center d-flex">
      <CircularJauge
        displayedNumber="12"
        numberColor="#ff7f26"
        subtext="Ans d'expérience"
      />
      <CircularJauge
        displayedNumber="2"
        numberColor="#ff7f26"
        subtext="Zones"
        description="Grenoble / Bourgoin-Jailleu"
      />
    </div>
  </div>
</template>
<script>
import CircularJauge from "@/components/CircularJauge.vue";

export default {
  name: "Main",
  components: { CircularJauge },
};
</script>
<style lang="scss" scoped>
#home {
  position: relative;
  min-height: 100vh;
  background: url("../assets/main-bab.png") no-repeat top;
  background-size: cover;
  flex-direction: column;
  justify-content: center;

  .description,
  .indicators {
    width: 60vw;

    ::v-deep .circle-container {
      margin-right: 2em;
    }

    .catch-phrase {
      text-transform: uppercase;
      font-size: 1em;
      letter-spacing: 2px;
      margin: 0;
      font-weight: 100;
    }

    .titre {
      font-size: 1.2em;
      font-weight: bold;
      color: #cba528;
    }

    .name {
      font-size: 3.6em;
      line-height: 1.1em;
      color: #2d598d;
      margin: 4px 0 10px 0;
    }

    .prestations {
      text-align: justify;
      text-justify: inter-word;
      font-size: 0.9em;
      line-height: 2em;
      font-weight: lighter;
    }
  }

  .indicators {
    margin-top: 2em;
  }
}
</style>