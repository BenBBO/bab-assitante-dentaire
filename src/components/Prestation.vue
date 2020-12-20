<template>
  <div id="prestation">
    <div class="d-flex justify-content-around">
      <PrestationCard
        title="Enfants"
        iconName="child"
        color="#FEAEC7"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
        title="Prévention"
        color="#89001C"
        iconName="hand-holding-medical"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
        title="Techniques"
        color="#3F6E82"
        iconName="comment-medical"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
    </div>
    <div class="d-flex justify-content-around mt-5">
      <PrestationCard
        title="Travail au fauteuil"
        color="#FF7F26"
        iconName="tooth"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
        title="Acceuil"
        color="#CBA528"
        iconName="info-circle"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
      />
      <PrestationCard
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