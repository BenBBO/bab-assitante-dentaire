<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img id="logo" alt="Babnana logo" src="@/assets/logo.jpg" />
        <span id="header-name">Barbara Bouillet</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigationContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navigationContent">
        <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
          <router-link
            to="/"
            class="nav-link"
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="{ 'nav-item': true, active: isExactActive }">
              <a :href="href" class="unstyled-link" @click="navigate"
                >Acceuil</a
              >
            </li>
          </router-link>
          <router-link
            to="/services"
            class="nav-link"
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="{ 'nav-item': true, active: isExactActive }">
              <a :href="href" class="unstyled-link" @click="navigate"
                >Prestations</a
              >
            </li>
          </router-link>
          <router-link
            to="/tarifs"
            class="nav-link"
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="{ 'nav-item': true, active: isExactActive }">
              <a :href="href" class="unstyled-link" @click="navigate">Tarifs</a>
            </li>
          </router-link>
          <router-link
            to="/about"
            class="nav-link"
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="{ 'nav-item': true, active: isExactActive }">
              <a :href="href" class="unstyled-link" @click="navigate"
                >A propos</a
              >
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
#logo {
  height: 5em;
}

.navbar {
  background-color: white;

  .nav-link {
    font-size: 1.5em;
  }

  .nav-item.active {
    border-top: 5px solid #f6da73;
  }

  .nav-item {
    border-top: 5px solid white;
    &:hover {
      border-top: 5px solid #f6da73;
    }
  }
}

.unstyled-link,
.unstyled-link:hover {
  color: inherit;
  text-decoration: none;
}
</style>
