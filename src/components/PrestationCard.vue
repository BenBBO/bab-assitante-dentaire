<template>
  <div
    :class="['prestation-card', isVisible ? 'visibleCard' : '']"
    v-observe-visibility="visibilityChanged"
  >
    <div class="face face1" :style="{ background: color }">
      <div class="content">
        <i :class="['fas', `fa-${iconName}`]" />
        <h3>{{ title }}</h3>
      </div>
    </div>
    <div class="face face2">
      <div class="content">        
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PrestationCard",
  props: {
    color: { type: String },
    iconName: { type: String },
    title: { type: String },
    description: { type: String },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>
<style lang="scss" scoped>
.prestation-card {
  position: relative;

  .face {
    height: 200px;
    transition: 0.5s;

    &.face1 {
      position: relative;
      background: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translateY(100px);

      .content {
        opacity: 0.2;
        transition: 0.5s;
        text-align: center;

        i {
          color: #fff;
          font-size: 3em;
        }

        h3 {
          margin: 10px 0 0;
          padding: 0;
          color: #fff;
          text-align: center;
          font-size: 1.5em;
        }
      }
    }

    &.face2 {
      position: relative;
      background: #fff;
      line-height: 160px; // 200px height - 40px de padding
      box-sizing: border-box;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      transform: translateY(-100px);

      .content {
        overflow: auto;
        height: 100%;
        padding: 20px;

        & > div {
          margin: 0;
          padding: 0;
          text-align: justify;
          vertical-align: middle;
          display: inline-block;
          line-height: 1.2em;
          width: 100%;
        }
        a {
          margin: 15px 0 0;
          display: inline-block;
          text-decoration: none;
          font-weight: 900;
          color: #333;
          padding: 5px;
          border: 1px solid #333;

          &:hover {
            background: #333;
            color: #fff;
          }
        }

        ::v-deep h2 {
          text-align: center;
          text-transform: uppercase;
          font-size: 1.5em;

          & + div {
            padding: 1em;
          }
        }

        ::v-deep.with-separator {
          border-right: 1px solid #efefef;

          @media (max-width:768px) {
            border-right: none;
          }
        }
      }
    }
  }

  &.visibleCard {
    .face.face1 {
      background: #ff0057;
      transform: translateY(0);

      .content {
        opacity: 1;
      }
    }

    .face.face2 {
      transform: translateY(0);
    }
  }
}
</style>