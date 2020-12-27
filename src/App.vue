<template>
  <div id="app">
    <Header />
    <Acceuil />
    <Prestation class="zone-container" />
    <Tarifs class="zone-container" />
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
@import "~@fortawesome/fontawesome-free/css/all.css";

#app{
  position: relative;
}

.zone-container {
  padding-bottom: 2rem;
}

.main-title {
  padding-top: 1rem;
  text-align: center;
}

.subtitle {
  text-align: center;
  font-size: 0.8em;
  font-weight: lighter;
}
</style>
