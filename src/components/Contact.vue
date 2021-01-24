<template>
  <div id="contact" class="contact-container">
    <h1 class="main-title">Contact</h1>
    <div class="d-flex container justify-content-around">
      <img src="@/assets/logo.webp" alt="logo" />
      <div class="contact-info d-flex flex-column justify-content-around">
        <h2>Détails</h2>
        <div><i class="fas fa-user"></i> Barbara Bouillet</div>
        <div>
          <i class="far fa-building"></i> : <b>N° Siret </b>
          <i>892 557 042 00017</i>
        </div>
        <div>
          <i class="fas fa-phone"></i> :
          <a href="tel:0652867160"><i>06.52.82.71.60</i></a>
        </div>
        <div>
          <i class="fas fa-at"></i> :
          <a href="mailto:barbara38.assistantedentaire@gmail.com"
            ><i>barbara38.assistantedentaire@gmail.com</i></a
          >
        </div>
        <h2>Horaires</h2>
        <div>Du Mardi au Vendredi</div>
        <div>De 8h30 à 19h</div>
      </div>

      <div class="emplacement">
        <Emplacement />
      </div>
    </div>
  </div>
</template>

<script>
import Emplacement from "@/components/Emplacement.vue";
export default {
  name: "Contact",
  components: { Emplacement },
  // To check : background blend mode. cf : https://www.youtube.com/watch?v=wfaDzSL6ll0&ab_channel=MDB-justcodeit
};
</script>

<style lang="scss" scoped>
.contact-container {
  background-color: #efefef;

  img {
    height: 10em;
    transform: scale(1);
    animation: pulse 2s infinite;
    cursor: pointer;
  }

  .emplacement {
    width: 40%;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>