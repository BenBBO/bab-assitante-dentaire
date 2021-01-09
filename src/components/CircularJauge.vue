<template>
  <div class="circle-container" v-observe-visibility="visibilityChanged">
    <div class="content">
      <number
        :from="0"
        :to="displayedNumber"
        :duration="1.5"
        class="number-displayed"
        :style="{ color: numberColor }"
        easing="Sine.easeInOut"
        ref="animatedNumber"
      >
      </number>
      <div class="subtext">{{ subtext }}</div>
      <div v-if="description" class="description">{{ description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CircularJauge",
  props: {
    displayedNumber: { type: String },
    numberColor: { type: String, default: "inherit" },
    subtext: { type: String },
    description: { type: String },
  },
  methods: {
    visibilityChanged() {
      this.$refs.animatedNumber.restart();
    },
  },
};
</script>
<style lang="scss" scoped>
.circle-container {
  position: relative;
  background: #fff;
  border-radius: 50%;
  width: 13em;
  height: 13em;
  box-shadow: 0px 0px 150px rgb(147, 167, 215, 0.18);

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 75%;
    text-align: center;

    .number-displayed {
      font-size: 5em;
      line-height: 1em;
      font-weight: bold;
    }

    .subtext {
      font-size: 1.1em;
      font-weight: bolder;
    }

    .description {
      font-size: 0.8em;
      font-weight: lighter;
    }
  }
}
</style>