<template>
  <div id="app">
    <Header />

    <div data-spy="scroll" data-target="#main-navbar" data-offset="0">
      <Acceuil />
      <Prestation class="prestation"  />
      <Tarifs />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Acceuil from "@/components/Acceuil.vue";
import Prestation from "@/components/Prestation.vue";
import Tarifs from "@/components/Tarifs.vue";

export default {
  components: { Header, Acceuil, Prestation, Tarifs },
};
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "~@fortawesome/fontawesome-free/css/all.css";

.prestation{
  margin: 3em auto;
}

.main-title{
  text-align: center;
}
</style>
