<template>
  <div id="about">
    <h1 class="main-title">A propos</h1>
    <div class="container">
      <div class="about-description">
        <img src="@/assets/bab-face.jpg" />
        <p>
          Barbara Bouillet née en 1986. Diplômée en tant qu’Assistante Dentaire
          au CQFD de Fontaine en 2009.
        </p>
        <p>
          Tout d’abord baignée dans l’univers des enfants, je me voyais plutôt
          éducatrice de jeunes enfants. Je les considère comme mes muses qui
          avec leur boule d’énergie me transportent dans leur monde aussi
          imaginaire que réel.
        </p>
        <p>
          Des personnes m’ont offert la chance de mettre cet univers entre
          parenthèse, afin de grandir, d’évoluer, de comprendre, d’apprendre
          pour mieux appréhender demain. Longtemps je me suis cherchée dans
          toutes ces formations et ces conférences qui m’ont passionnées et
          nourries de connaissance. Entre les facettes, les huiles essentielles,
          les ATM, les troubles du comportement, les implants, l’accompagnement
          à l’hygiène bucco-dentaire, la PNL, l’hypnose, la parodontite….
        </p>
        <p>
          Aujourd’hui grâce à mes formateurs, à ma vie, je me propulse dans une
          autre dimension, afin de me surpasser pour allier un métier, une
          passion, une envie….
        </p>
        <p>Tout se tisse pour construire une belle histoire.</p>
        <p>Merci à toutes ces personnes qui ont contribuées à l’écrire.</p>
      </div>
    </div>
    <div class="timeline-container">
      <Timeline :dates="formations" title="Formations et expériences professionnelles" />
    </div>
  </div>
</template>
<script>
import Timeline from "@/components/Timeline.vue";
export default {
  name: "About",
  components: { Timeline },
  data() {
    return {
      formations: [
        {
          date: "2008-2009",
          label: "Assistante dentaire",
          description: "Formation qualifiante à Fontaine.",
          id: 1,
        },
        {
          date: "2011",
          label: "Logiciel JULIE",
          description:
            "Approfondissement logiciel JULIE avec Julie à Rillieu la Pape.",
          id: 2,
        },
        {
          date: "2013",
          label: "Facettes LUMINEERS",
          description: "Tecalliage à Grenoble.",
          id: 3,
        },
        {
          date: "2015",
          label: "I top explication à l'hygiène",
          description: "Curaprox à Lyon.",
          id: 4,
        },
        {
          date: "2015",
          label: "Programmation Neuro-Linguistique",
          description: "M.Giorgi à Lyon.",
          id: 5,
        },
        {
          date: "2015-2016",
          label: "Hypnose Ericksonienne",
          description: "Gema à Lyon.",
          id: 6,
        },
        {
          date: "2018",
          label: "Hypnose Ericksonienne",
          description: "Adentia à Paris.",
          id: 7,
        },
        {
          date: "2018",
          label: "Hygiène et stérilisation",
          description: "UFSBD.",
          id: 8,
        },
        {
          date: "2020",
          label: "Education à la santé orale des patients",
          description: "UFSBD.",
          id: 9,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#about {
  .about-description {
    img {
      border-radius: 50%;
      max-width: 100%;
      height: 25em;
      float: left;
      shape-outside: circle(50%);
      margin-right: 3em;
    }
  }
}
</style>