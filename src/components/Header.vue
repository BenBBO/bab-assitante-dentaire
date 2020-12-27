<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
    fixed="top"
    v-b-scrollspy
  >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#home">Acceuil</b-nav-item>
        <b-nav-item href="#prestation">Prestations</b-nav-item>
        <b-nav-item href="#tarif">Tarifs</b-nav-item>
        <b-nav-item href="#about">A propos</b-nav-item>
        <b-nav-item href="#contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>

</style>
