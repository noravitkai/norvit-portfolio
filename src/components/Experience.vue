<template>
  <section class="hidden overflow-hidden bg-bg02 lg:block" id="experience">
    <!-- general description with tabs -->
    <div class="mx-auto max-w-7xl px-6 pb-12 pt-24">
      <div class="flex">
        <!-- section marker -->
        <div class="mt-9 flex flex-col items-center">
          <p class="-rotate-90 text-sm font-medium uppercase text-yellow">
            Experience
          </p>
          <div class="custom-line-text-experience"></div>
        </div>
        <div class="flex flex-col gap-6">
          <!-- description text -->
          <h2 class="text-4xl font-semibold">Lorem ipsum</h2>
          <p class="text-base">
            Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
            lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla bla bla
            lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla bla bla
            bla bla bla bla lbangvghvjz lorem ipsum lorem lorem ipsum lorem
            ipsum bla bla bla…
          </p>
          <!-- tabs -->
          <div class="flex flex-wrap">
            <div class="max-w-3xl">
              <ul
                class="mb-0 flex list-none flex-row flex-wrap rounded-full border border-yellow bg-white px-1.5 py-1.5 shadow-xl"
              >
                <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                  <a
                    class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer"
                    v-on:click="toggleTabs(1)"
                    v-bind:class="{
                      'text-blue bg-white': openTab !== 1,
                      'text-white bg-blue': openTab === 1,
                    }"
                  >
                    Webdesign
                  </a>
                </li>
                <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                  <a
                    class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer"
                    v-on:click="toggleTabs(2)"
                    v-bind:class="{
                      'text-blue bg-white': openTab !== 2,
                      'text-white bg-blue': openTab === 2,
                    }"
                  >
                    Logo design
                  </a>
                </li>
                <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                  <a
                    class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer"
                    v-on:click="toggleTabs(3)"
                    v-bind:class="{
                      'text-blue bg-white': openTab !== 3,
                      'text-white bg-blue': openTab === 3,
                    }"
                  >
                    Page layout design
                  </a>
                </li>
                <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                  <a
                    class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer"
                    v-on:click="toggleTabs(4)"
                    v-bind:class="{
                      'text-blue bg-white': openTab !== 4,
                      'text-white bg-blue': openTab === 4,
                    }"
                  >
                    Video editing
                  </a>
                </li>
                <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                  <a
                    class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer"
                    v-on:click="toggleTabs(5)"
                    v-bind:class="{
                      'text-blue bg-white': openTab !== 5,
                      'text-white bg-blue': openTab === 5,
                    }"
                  >
                    SoMe Management
                  </a>
                </li>
                <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                  <a
                    class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer"
                    v-on:click="toggleTabs(6)"
                    v-bind:class="{
                      'text-blue bg-white': openTab !== 6,
                      'text-white bg-blue': openTab === 6,
                    }"
                  >
                    Copywriting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- projects content -->
    <div class="mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-12">
      <div class="grid grid-cols-2 grid-rows-1 items-center gap-20">
        <div class="flex">
          <div class="mt-9 flex flex-col items-center">
            <p class="-rotate-90 text-sm font-medium uppercase text-yellow">
              Experience
            </p>
            <div class="custom-line-text-experience"></div>
          </div>
          <div class="flex flex-col gap-4">
            <div
              v-bind:class="{
                hidden: openTab !== 1,
                block: openTab === 1,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 2,
                block: openTab === 2,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 3,
                block: openTab === 3,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 4,
                block: openTab === 4,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 5,
                block: openTab === 5,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 6,
                block: openTab === 6,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 1,
            block: openTab === 1,
          }"
        >
          <WebSlider />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 2,
            block: openTab === 2,
          }"
        >
          <LogoSlider />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 3,
            block: openTab === 3,
          }"
        >
          <PageSlider />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 4,
            block: openTab === 4,
          }"
        >
          <VideoSlider />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 5,
            block: openTab === 5,
          }"
        >
          <SomeSlider />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 6,
            block: openTab === 6,
          }"
        >
          <CopywritingSlider />
        </div>
      </div>
      <!-- Second part - reversed -->
      <div class="grid grid-cols-2 grid-rows-1 items-center gap-20">
        <div
          v-bind:class="{
            hidden: openTab !== 1,
            block: openTab === 1,
          }"
        >
          <WebSliderTwo />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 2,
            block: openTab === 2,
          }"
        >
          <LogoSliderTwo />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 3,
            block: openTab === 3,
          }"
        >
          <PageSliderTwo />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 4,
            block: openTab === 4,
          }"
        >
          <VideoSliderTwo />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 5,
            block: openTab === 5,
          }"
        >
          <SomeSliderTwo />
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 6,
            block: openTab === 6,
          }"
        >
          <CopywritingSliderTwo />
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col gap-4">
            <div
              v-bind:class="{
                hidden: openTab !== 1,
                block: openTab === 1,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 2,
                block: openTab === 2,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 3,
                block: openTab === 3,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 4,
                block: openTab === 4,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 5,
                block: openTab === 5,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 6,
                block: openTab === 6,
              }"
            >
              <h3 class="text-4xl font-semibold">Project name</h3>
              <p class="mt-6">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
            </div>
          </div>
          <div class="mt-9 flex flex-col items-center">
            <p class="-rotate-90 text-sm font-medium uppercase text-yellow">
              Experience
            </p>
            <div class="custom-line-text-experience"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WebSlider from "./WebSlider.vue";
import LogoSlider from "./LogoSlider.vue";
import PageSlider from "./PageSlider.vue";
import VideoSlider from "./VideoSlider.vue";
import SomeSlider from "./SomeSlider.vue";
import CopywritingSlider from "./CopywritingSlider.vue";
import WebSliderTwo from "./WebSliderTwo.vue";
import LogoSliderTwo from "./LogoSliderTwo.vue";
import PageSliderTwo from "./PageSliderTwo.vue";
import VideoSliderTwo from "./VideoSliderTwo.vue";
import SomeSliderTwo from "./SomeSliderTwo.vue";
import CopywritingSliderTwo from "./CopywritingSliderTwo.vue";

export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
  components: {
    WebSlider,
    LogoSlider,
    PageSlider,
    VideoSlider,
    SomeSlider,
    CopywritingSlider,
    WebSliderTwo,
    LogoSliderTwo,
    PageSliderTwo,
    VideoSliderTwo,
    SomeSliderTwo,
    CopywritingSliderTwo,
  },
};
</script>
