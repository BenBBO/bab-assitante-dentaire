<template>
  <div>
    <div
      :class="[
        'd-flex',
        'justify-content-center',
        'logo-container',
        selectedTooth,
      ]"
    ></div>
    <div class="d-flex">
      <input type="radio" id="email" value="email" v-model="selectedTooth" />
      <label for="email">Email</label>

      <input type="radio" id="carie" value="carie" v-model="selectedTooth" />
      <label for="carie">Carie</label>
      <input type="radio" id="pulpe" value="pulpe" v-model="selectedTooth" />
      <label for="pulpe">Pulpe</label>
      <input type="radio" id="nerf" value="nerf" v-model="selectedTooth" />
      <label for="nerf">Système sanguin et nerveux</label>
      <input type="radio" id="dentine" value="dentine" v-model="selectedTooth" />
      <label for="dentine">Dentine</label>
      <input type="radio" id="collet" value="collet" v-model="selectedTooth" />
      <label for="collet">Collet</label>
      <input type="radio" id="gencive" value="gencive" v-model="selectedTooth" />
      <label for="gencive">Gencive</label>
      <input type="radio" id="tartre" value="tartre" v-model="selectedTooth" />
      <label for="tartre">Tartre</label>
      <input type="radio" id="os" value="os" v-model="selectedTooth" />
      <label for="os">Os</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoInformation",
  data() {
    return {
      selectedTooth: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo-container {
  height: 40vh;
  background: url("../assets/logo.webp") no-repeat top;
  background-size: contain;

  &.email {
    background-image: url("../assets/logo_blanc.webp");
  }
  &.carie {
    background-image: url("../assets/logo_noir.webp");
  }
   &.pulpe {
    background-image: url("../assets/logo_rose.webp");
  }
   &.nerf {
    background-image: url("../assets/logo_bleu.webp");
  }
   &.dentine {
    background-image: url("../assets/logo_jaune.webp");
  }
   &.collet {
    background-image: url("../assets/logo_marron.webp");
  }
   &.gencive {
    background-image: url("../assets/logo_rouge.webp");
  }
   &.tartre {
    background-image: url("../assets/logo_gris.webp");
  }
   &.os {
    background-image: url("../assets/logo_orange.webp");
  }
}
</style>