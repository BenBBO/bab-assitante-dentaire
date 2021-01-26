<template>
  <div id="app">
    <Header />
    <Acceuil />
    <Prestation class="zone-container" />
    <Tarifs class="zone-container" />
    <About />
    <Contact />     
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Acceuil from "@/components/Acceuil.vue";
import Prestation from "@/components/Prestation.vue";
import Tarifs from "@/components/Tarifs.vue";
import About from "@/components/About.vue";
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Header, Acceuil, Prestation, Tarifs, About, Contact, Footer },
};
</script>
<style lang="scss">
@import "~@fortawesome/fontawesome-free/css/all.css";
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');

body{
  font-family: 'Zilla Slab', serif;

}
#app {
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
