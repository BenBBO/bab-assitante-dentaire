<template>
  <div id="prestation" class="container">
    <h1 class="main-title">Prestations</h1>
    <div class="row">
      <PrestationCard
        class="col-lg-4 col-md-6 mt-4"
        title="Enfants"
        iconName="child"
        color="#FEAEC7"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
        class="col-lg-4 col-md-6 mt-4"
        title="Prévention"
        color="#89001C"
        iconName="hand-holding-medical"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
        class="col-lg-4 col-md-6 mt-4"
        title="Techniques"
        color="#3F6E82"
        iconName="comment-medical"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />

      <PrestationCard
        class="col-lg-4 col-md-6 mt-4"
        title="Travail au fauteuil"
        color="#FF7F26"
        iconName="tooth"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
        class="col-lg-4 col-md-6 mt-4"
        title="Accueil"
        color="#CBA528"
        iconName="info-circle"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
        class="col-lg-4 col-md-6 mt-4"
        title="Stérilisation et stocks"
        color="#C3C3C3"
        iconName="hand-sparkles"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
    </div>
  </div>
</template>
<script>
import PrestationCard from "@/components/PrestationCard.vue";
export default {
  name: "Prestation",
  components: { PrestationCard },
};
</script>
<style lang="scss" scoped>
</style>