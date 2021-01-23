<template>
  <div class="timeline-container">
    <h2>{{ title }}</h2>
    <div class="flex-parent">
      <div class="input-flex-container">
        <template v-for="(dateEntry, index) in dates">
          <input
            type="radio"
            name="timeline-dot"
            v-model="selectedDate"
            :value="`${index}`"
            :key="`input-${index}`"
            :id="`input-${index}`"
            :class="dateEntry.type"
          />
          <div :class="['dot-info', `${dateEntry.type}`]" :key="`dot-${index}`">
            <label class="year" :for="`input-${index}`">{{
              dateEntry.date
            }}</label>
            <label class="label" :for="`input-${index}`">{{
              dateEntry.label
            }}</label>
          </div>
        </template>
        <div id="timeline-descriptions-wrapper">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Timeline",
  props: {
    dates: { type: Array, required: true },
    title: { type: String },
  },
  data() {
    return {
      selectedDate: 0,
      interval: null,
    };
  },
  computed: {
    description() {
      const selectedEntry = this.dates[this.selectedDate];

      if (selectedEntry) return selectedEntry.description;

      return null;
    },
  },
  methods: {
    incrementSelectedDate() {
      if (this.selectedDate < this.dates.length - 1) this.selectedDate++;
      else this.selectedDate = 0;
    },
    setAutomaticDateChange() {
      if (this.interval) clearInterval(this.interval);

      this.interval = setInterval(this.incrementSelectedDate, 4000);
    },
  },
  mounted() {
    this.setAutomaticDateChange();
  },
  watch: {
    selectedDate() {
      this.setAutomaticDateChange();
    },
  },
};
</script>
<style lang="scss" scoped>
$numDots: 34  ;
$parentWidthBase: 0.8;
$parentWidth: $parentWidthBase * 100vw;
$parentMaxWidth: 1500px;
$dotWidth: 25px;
$active: #2c3e50;
$inactive: #aeb6bf;
$professionnel: #cba528;
$professionnelInactive: #887740fb;

.timeline-container {
  background-color: #3f6e82c2;
  color: white;
  padding: 2em 0;
  text-align: center;
}

.flex-parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 17rem;
}

.input-flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: $parentWidth;
  max-width: $parentMaxWidth;
  position: relative;
  z-index: 0;
  margin-left: calc((#{$parentWidth} - #{$dotWidth}) / #{$numDots});
  margin-top: 70px;
}

input {
  width: $dotWidth;
  height: $dotWidth;
  background-color: $active;
  position: relative;
  border-radius: 50%;
  display: block;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    background-color: $active;
    width: $parentWidth / $numDots;
    height: 5px;
    max-width: $parentMaxWidth / $numDots;
  }

  &::before {
    left: calc(#{-$parentWidth / $numDots} + #{$dotWidth / 2});
  }

  &::after {
    right: calc(#{-$parentWidth / $numDots} + #{$dotWidth / 2});
  }

  &:checked {
    background-color: $active;

    &::before {
      background-color: $active;
    }
  }

  &.professionnel {
    background-color: $professionnel;
    &:checked {
      background-color: $professionnel;
    }
  }

  &:checked {
    ~ input {
      &,
      &::before,
      &::after {
        background-color: $inactive;
      }

      &.professionnel {
        background-color: $professionnelInactive;
      }
    }

    + .dot-info {
      span,
      label {
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
}

.dot-info {
  width: $dotWidth;
  height: $dotWidth;
  display: block;

  // background-color: red
  visibility: hidden;
  position: relative;
  z-index: -1;

  //position each span on top of the dot immediately before it; -1px at the end is just fudging the numbers for rounding error
  left: calc((((#{$parentWidth} - #{$dotWidth}) / #{$numDots}) * -1) - 1px);

  &.professionnel {
    span,
    label {
      color: $professionnel;
    }
  }

  span,
  label {
    visibility: visible;
    position: absolute;
    font-size: 12px;
    cursor: pointer;
    text-align: left;

    &.year {
      bottom: -3rem;
      left: 50%;
      transform: translateX(-50%);
    }

    &.label {
      top: -70px;
      left: 0;
      transform: rotateZ(-45deg);
      width: 11em;      
    }
  }
}

#timeline-descriptions-wrapper {
  width: 100%;
  margin-top: 5rem;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  font-style: italic;

  p {
    margin-top: 0;
    display: none;
  }
}

@media (min-width: $parentMaxWidth / $parentWidthBase) {
  .input-flex-container {
    margin-left: #{$parentMaxWidth / $numDots + $dotWidth / 2};
  }

  input {
    &::before {
      left: #{- ($parentMaxWidth / $numDots) + $dotWidth / 2};
    }

    &::after {
      right: #{- ($parentMaxWidth / $numDots) + $dotWidth / 2};
    }
  }

  .dot-info {
    left: calc(
      (((#{$parentMaxWidth} - #{$dotWidth}) / #{$numDots}) * -1) - 1px
    );
  }

  #timeline-descriptions-wrapper {
    margin-left: #{- ($parentMaxWidth / $numDots) + $dotWidth / 2};
  }
}

@media (max-width: 630px) {
  .flex-parent {
    justify-content: initial;
  }

  .input-flex-container {
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: auto;
    margin-top: 3rem;
    margin-left: 0;
    padding-bottom: 30px;
  }

  input,
  .dot-info {
    width: 60px;
    height: 60px;
    margin: 0 25px 70px;
  }

  input {
    background-color: transparent !important;
    z-index: 1;

    &::before,
    &::after {
      content: none;
    }

    &:checked {
      + .dot-info {
        background-color: $active;

        &.professionnel {
          background-color: $professionnel;
        }

        span,
        label {
          &.year {
            font-size: 14px;
          }

          &.label {
            font-size: 12px;
          }
        }
      }
    }
  }

  .dot-info {
    visibility: visible;
    border-radius: 50%;
    z-index: 0;
    left: 0;
    margin-left: -70px;
    background-color: $inactive;

    &.professionnel {
      background-color: $professionnelInactive;
    }

    span,
    label {
      &.year {
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ecf0f1;
      }

      &.label {
        top: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        padding-left: 0px;
      }
    }
  }

  #timeline-descriptions-wrapper {
    margin-top: 30px;
    margin-left: 0;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .input-flex-container {
    width: 340px;
  }
}

@media (max-width: 400px) {
  .input-flex-container {
    width: 300px;
  }
}
</style>