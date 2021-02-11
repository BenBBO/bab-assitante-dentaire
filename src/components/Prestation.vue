<template>
  <div id="prestation" class="container">
    <h1 class="main-title">Prestations</h1>
    <div class="row">
      <PrestationCard
        class="col-lg-12 col-md-12 mt-4 prevention-card"
        title="Préventions"
        color="#89001C"
        iconName="hand-holding-medical"
        :description="prevention"
      />
    </div>
    <div class="row">
      <PrestationCard
        class="col-lg-6 col-md-6 mt-4"
        title="Enfants"
        iconName="child"
        color="#FEAEC7"
        :description="enfants"
      />
      <PrestationCard
        class="col-lg-6 col-md-6 mt-4"
        title="Omnipratique"
        color="#C3C3C3"
        iconName="comment-medical"
        :description="omnipratique"
      />
      <PrestationCard
        class="col-lg-6 col-md-6 mt-4"
        title="Chirurgie"
        color="#FF7F26"
        iconName="hand-sparkles"
        :description="chirurgie"
      />
      <PrestationCard
        class="col-lg-6 col-md-6 mt-4"
        title="Facette"
        color="#CBA528"
        iconName="tooth"
        :description="facette"
      />
    </div>
  </div>
</template>
<script>
import PrestationCard from "@/components/PrestationCard.vue";
import prevention from "@/ressources/prestations/preventions.html";
import enfants from "@/ressources/prestations/enfants.html";
import chirurgie from "@/ressources/prestations/chirurgie.html";
import facette from "@/ressources/prestations/facette.html";
import omnipratique from "@/ressources/prestations/omnipratique.html";

export default {
  name: "Prestation",
  components: { PrestationCard },
  data() {
    return {
      prevention: prevention,
      enfants: enfants,
      chirurgie: chirurgie,
      facette: facette,
      omnipratique: omnipratique,
    };
  },
};
</script>
<style lang="scss" scoped>
.prevention-card ::v-deep .face.face2 {
  height: 350px;
}
</style>