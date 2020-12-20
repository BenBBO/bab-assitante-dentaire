<template>
  <div id="app">
    <Acceuil />
    <!-- <Header /> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
import Acceuil from "@/components/Acceuil.vue";

export default {
   components: { /*Header,*/ Acceuil },
};
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
