<template>
  <b-navbar toggleable="lg" :sticky="true" id="header-nav-bar" v-b-scrollspy>
    <div class="container">
      <b-navbar-toggle target="nav-collapse">
        <i class="fas fa-bars" />
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#app">Acceuil</b-nav-item>
          <b-nav-item href="#prestation">Prestations</b-nav-item>
          <b-nav-item href="#tarif">Tarifs</b-nav-item>
          <b-nav-item href="#about">A propos</b-nav-item>
          <b-nav-item href="#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
#header-nav-bar {
  background-color: rgb(63, 110, 130);
  font-size: 1.2em;
  padding-bottom: 0;

  .navbar-toggler {
    color: white;
    margin-bottom: 0.5em;
    border: 1px solid;
  }

  .nav-link {
    color: white;
    font-weight: lighter;
    border-bottom: 5px solid transparent;

    &.active {
      color: white;
      text-shadow: 1px 0px 0px;
      border-bottom: 5px solid;
    }

    &:hover {
      text-shadow: 1px 0px 0px;
    }
  }
}
</style>
