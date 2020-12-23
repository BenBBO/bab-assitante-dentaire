<template>
  <nav id="main-navbar" class="navbar fixed-top navbar-expand-lg navbar-light">
    <div class="container">
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#home" class="nav-link">Acceuil</a>
          </li>
          <li class="nav-item">
            <a href="#prestation" class="nav-link">Prestations</a>
          </li>
          <li class="nav-item">
            <a href="#tarif" class="nav-link">Tarifs</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">A propos</a>
          </li>
           <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
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
// #logo {
//   height: 5em;
// }

// .navbar {
//   background-color: white;

//   .nav-link {
//     font-size: 1.5em;
//   }

//   .nav-item.active {
//     border-top: 5px solid #f6da73;
//   }

//   .nav-item {
//     border-top: 5px solid white;
//     &:hover {
//       border-top: 5px solid #f6da73;
//     }
//   }
// }

// .unstyled-link,
// .unstyled-link:hover {
//   color: inherit;
//   text-decoration: none;
// }
</style>
