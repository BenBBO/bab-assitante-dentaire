<template>
  <div id="home" class="d-flex" itemscope itemtype="https://schema.org/Person">
    <div class="description">
      <div class="catch-phrase">Travaillons ensemble pour demain</div>
      <div class="name" itemprop="name">Barbara Bouillet</div>
      <p class="titre" itemprop="jobTitle">Assistante dentaire indépendante.</p>
      <p class="prestations">
        Accompagnatrice à l'hygiène bucco-dentaire (tout public). Aide à
        l'évasion et à la détente des enfants pendant leur soin. <br />
        Artisanat en pose de facettes lumineers. Assistanat en 4 ou 6 mains en
        implantologie, chirurgie ou tout type de soin.
      </p>
    </div>
    <div class="indicators">
      <CircularJauge
        displayedNumber="12"
        numberColor="#3f6e82c2"
        subtext="Ans d'expérience"
      />
      <CircularJauge
        displayedNumber="2"
        numberColor="#3f6e82c2"
        subtext="Agglomérations"
        description="Grenoble / Bourgoin-Jailleu"
      />
    </div>

    <div class="description-mobile">
      <div class="name"  itemprop="name">Barbara Bouillet</div>
      <p class="titre" itemprop="jobTitle">Assistante dentaire indépendante.</p>
      <div class="catch-phrase">Travaillons ensemble pour demain</div>
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
  background: url("../assets/main-bab.webp") no-repeat top;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .indicators {
    display: flex;
  }

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

  .description-mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    min-height: 50vh;
    align-items: unset;

    .description,
    .indicators {
      margin-left: 3.5em;
    }
  }
  @media (max-width: 630px) {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../assets/bab.webp") no-repeat top;
    min-height: 100vh;

    .description,
    .indicators {
      display: none;
    }

    .description-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;      
      font-weight: bold;

      .name {
        font-size: 2.5em;
        color: white;
        text-transform: uppercase;
        letter-spacing: 4px;
        
      }

      .titre {
        font-size: 1.5em;
        color: #cba528;
        letter-spacing: 3px;
      }
      .catch-phrase {
        color: white;
        text-transform: uppercase;
        font-size: 1.3em;
        font-weight: 100;
        font-style: italic;
      }
    }
  }
}
</style>