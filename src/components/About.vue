<template>
  <div id="about">
    <h1 class="main-title">A Propos</h1>
    <div class="container">
      <div
        class="about-description"
        itemscope
        itemtype="https://schema.org/Person"
      >
        <img
          src="@/assets/bab-face.webp"
          itemprop="image"
          alt="Barbara Bouillet - assistante dentaire à Grenoble et Bourgoin Jailleu"
        />
        <p>
          Barbara Bouillet née en 1986. Diplômée en tant qu’Assistante Dentaire
          au <a href="https://www.cqfd-formations.com/" target="_blank">CQFD de Fontaine</a> en 2009.
        </p>
        <p>
          Tout d’abord baignée dans l’univers des enfants, je me voyais plutôt
          éducatrice de jeunes enfants. Je les considère comme mes muses qui
          avec leur boule d’énergie me transportent dans leur monde aussi
          imaginaire que réel.
        </p>
        <p>
          Des personnes m’ont offert la chance de mettre cet univers entre
          parenthèses, afin de grandir, d’évoluer, de comprendre, d’apprendre
          pour mieux appréhender demain. Longtemps je me suis cherchée dans
          toutes ces formations et ces conférences qui m’ont passionnée et
          nourrie de connaissance.
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
      <Timeline :dates="formations" />
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
          label: "Diplôme d'assistante dentaire",
          description: "Formation qualifiante au CQFD de Fontaine.",
        },
        {
          date: "2008-2009",
          label: "Cab. du Dr HIRLEMANN DUTERTRE",
          description: "Assistante dentaire en omnipratique et en orthodontie.",
          type: "professionnel",
        },
        {
          date: "2009-2020",
          label: "Cab. Dr. BERNARD",
          description:
            "De 2009 à 2020 : Assistante dentaire en omnipratique et en chirurgie implantaire et parodontale",
          type: "professionnel",
        },
        {
          date: "2010-2011",
          label: "UFSBD",
          description:
            "De 2010 à 2011 : UFSBD - Animatrice d’hygiène dentaire dans les écoles en Isère.",
          type: "professionnel",
        },
        {
          date: "2011",
          label: "JULIE",
          description:
            "Approfondissement logiciel JULIE avec Julie à Rillieu la Pape.",
        },
        {
          date: "2013",
          label: "LUMINEERS",
          description:
            "Formé à la pose de facette Lumineers par le Dr Zissermann.",
        },
        {
          date: "2014",
          label: "LABOPHARE ",
          description:
            "Comment optimiser l’outil téléphone au cabinet dentaire.",
        },
        {
          date: "2015",
          label: "CURAPROX",
          description: "I TOP explication à l’hygiène bucco-dentaire.",
        },
        {
          date: "2015",
          label: "FORMATION ET SANTE",
          description:
            "Stage de 2 jours sur le thème de l’implantologie avec le Dr VACHERET.",
        },
        {
          date: "2015",
          label: "PNL",
          description:
            "Explication et mise en évidence du programme neurolinguistique par M.Giorgi.",
        },
        {
          date: "2015-2016",
          label: "GEMA ",
          description: "Hypnose Ericksonienne à Lyon .",
        },
        {
          date: "2017",
          label: "AROMA CONSEIL ET FORMATION",
          description:
            "Explication et mise en pratique de l’usage des huiles essentielles en cabinet dentaire.",
        },
        {
          date: "2018",
          label: "ADENTIA",
          description: "Hypnose Ericksonnienne à Paris.",
        },
        {
          date: "2018",
          label: "UFSBD ",
          description:
            "Mise à jour de l’hygiène et la stérilisation en classe virtuelle.",
        },
        {
          date: "2019",
          label: "EMS ",
          description:
            "La parodontie clinique du diagnostic au traitement avec le Dr VANDOORNE.",
        },
        {
          date: "2020",
          label: "UFSBD",
          description:
            "Education à la santé orale des patients en classe virtuelle.",
        },
        {
          date: "2021",
          label: "Assistante Dentaire Indépendante",
          description: "Numéro ADELI : Todo",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#about {
  .about-description {
    p {
      text-align: justify;
    }
    img {
      border-radius: 50%;
      max-width: 100%;
      height: 25em;
      float: left;
      shape-outside: circle(50%);
      margin-right: 3em;
    }

    @media (max-width: 630px) {
      text-align: center;
      img {
        height: 25em;
        shape-outside: none;
        margin: 1em 0;
        float: none;
      }
    }
  }
}
</style>