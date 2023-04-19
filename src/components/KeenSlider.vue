<template>
  <div ref="slider" class="keen-slider">
    <div class="keen-slider__slide number-slide1">
      <img src="src/assets/IMG_0163.JPG" class="w-32" alt="" />
    </div>
    <div class="keen-slider__slide number-slide2">2</div>
    <div class="keen-slider__slide number-slide3">3</div>
    <div class="keen-slider__slide number-slide4">4</div>
    <div class="keen-slider__slide number-slide5">5</div>
    <div class="keen-slider__slide number-slide6">6</div>
    <svg
      @click="slider.prev()"
      :class="{
        arrow: true,
        'arrow--left': true,
        'arrow--disabled': current === 0,
      }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
      ></path>
    </svg>
    <svg
      v-if="slider"
      @click="slider.next()"
      :class="{
        arrow: true,
        'arrow--right': true,
        'arrow--disabled': current === slider.track.details.slides.length - 1,
      }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
    </svg>
  </div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

export default {
  name: "Slider",
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 2,
        spacing: 15,
      },
    });
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  },
};
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 18rem;
  max-height: 100vh;
}

.number-slide1 {
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
}

.number-slide2 {
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
}

.number-slide3 {
  background: rgb(182, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
}

.number-slide4 {
  background: rgb(64, 255, 242);
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
}

.number-slide5 {
  background: rgb(255, 64, 156);
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  );
}
.number-slide6 {
  background: rgb(64, 76, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
  );
}
.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}
.arrow--left {
  left: 5px;
}
.arrow--right {
  left: auto;
  right: 5px;
}
.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}
</style>
