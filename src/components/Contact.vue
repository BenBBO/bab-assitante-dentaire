<template>
  <div id="contact" class="contact-container" itemscope itemtype="http://schema.org/Organization">
    <div class="container">
      <h1 class="main-title">Contact</h1>
      <div class="d-flex justify-content-center">
        <!-- v-b-modal.logo-modal -->
        <img src="@/assets/logo.webp" itemprop="logo" alt="logo - Assistante dentaire 38"  />
      </div>
      <div class="d-flex justify-content-around contact-info" >
        <div class="d-flex flex-column text-center">
          <h2>Mail</h2>
          <a href="mailto:barbara38.assistantedentaire@gmail.com" itemprop="email"
            >barbara38.assistantedentaire@gmail.com</a
          >
        </div>
        <div class="d-flex flex-column text-center">
          <h2>Téléphone</h2>

          <a href="tel:0652867160" itemprop="telephone">06.52.82.71.60</a>
        </div>
        <div class="d-flex flex-column text-center">
          <h2>Numéro SIRET</h2>
          892 557 042 00017
        </div>
        <div class="d-flex flex-column text-center">
          <h2>Horaires</h2>
          <div>Du Mardi au Vendredi</div>
          <div>De 8h30 à 19h</div>
        </div>
      </div>
      <div class="emplacement">
        <Emplacement />
      </div>
    </div>

    <b-modal id="logo-modal" size="lg" hide-footer>
      <template #modal-title> Notre logo </template>
     <LogoInformation />

      </b-modal
    >
  </div>
</template>

<script>
import Emplacement from "@/components/Emplacement.vue";
import LogoInformation from "@/components/LogoInformation.vue";
export default {
  name: "Contact",
  components: { Emplacement, LogoInformation },
  // To check : background blend mode. cf : https://www.youtube.com/watch?v=wfaDzSL6ll0&ab_channel=MDB-justcodeit
};
</script>

<style lang="scss" scoped>
.contact-container {
  background-color: #efefef;
  padding-bottom: 1em;

  img {
    height: 15em;
    // transform: scale(1);
    // animation: pulse 2s infinite;
    // cursor: pointer;
  }

  .contact-info {
    margin-top: 2rem;
    margin-bottom: 2rem;
    a {
      text-decoration: none;
      color: inherit;
    }
    h2 {
      text-transform: uppercase;
      font-size: 1.2rem;
      color: #6d91a0;
    }
  }
}

@media (max-width: 768px) {
  .contact-info {
    flex-direction: column;

    > div {
      margin-top: 2em;
    }
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