<template>
  <b-navbar toggleable="lg" :sticky="true" id="header-nav-bar" v-b-scrollspy>
    <div class="container">
      <b-navbar-toggle target="nav-collapse">
        <i class="fas fa-bars" />
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#app">Accueil</b-nav-item>
          <b-nav-item href="#prestation">Prestations</b-nav-item>
          <b-nav-item href="#tarif">Tarifs</b-nav-item>
          <b-nav-item href="#about">A Propos</b-nav-item>
          <b-nav-item href="#contact">Contact</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="contact-info" itemscope itemtype="http://schema.org/Organization">
          <div class="contact">
            <a href="tel:0652867160">
              <i class="fas fa-mobile-alt"></i>
              <span itemprop="telephone">06.52.82.71.60</span></a
            >
          </div>
          <div class="contact">
            <a href="mailto:barbara38.assistantedentaire@gmail.com">
              <i class="far fa-envelope"></i
              ><span itemprop="email"> barbara38.assistantedentaire@gmail.com</span></a
            >
          </div>
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

  #nav-collapse {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;

      ul {
        width: 100%;
        &.contact-info .contact {
          margin-left: 0;
          font-size: 1em;
        }
      }
    }

    .contact-info {
      color: white;
      .contact {
        margin-left: 1em;
        font-size: 0.8em;
        a {
          text-decoration: none;
          color: inherit;
          span {
            margin-left: 0.5em;
          }
        }
      }
    }
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
