<template>
  <div id="home" class="d-flex">
    <div class="description align-self-center p-5">
      <div class="catch-phrase">Travaillons ensemble pour demain</div>
      <div class="name">Barbara Bouillet</div>
      <p class="titre">Assistante dentaire indépendante.</p>
      <p class="prestations">
        Acompagnatrice à l'hygiène bucco-dentaire (tout public). Aide à
        l'évasion et à la détente au soin des enfants. <br />
        Artisanat en pose de facettes lumineers. Assistanat en 4 ou 6 mains en
        implantologie, chirurgie ou tout type de soin.
      </p>
      <button type="button" class="btn btn-outline-primary">Prestations</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
};
</script>
<style lang="scss" scoped>
#home {
  position: relative;
  min-height: 100vh;
  background: url("../assets/main-bab.png") no-repeat top;
  background-size: cover;

  .description {
    width: 60vw;

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
}
</style>