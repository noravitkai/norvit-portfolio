<template>
  <section class="overflow-hidden bg-bg02" id="experience">
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
          <h2 class="text-4xl">Lorem ipsum</h2>
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
      <div class="grid grid-cols-2 grid-rows-1 gap-20">
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
              <h3>Web design</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 2,
                block: openTab === 2,
              }"
            >
              <h3>Logo design</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 3,
                block: openTab === 3,
              }"
            >
              <h3>Page Layout design</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 4,
                block: openTab === 4,
              }"
            >
              <h3>Video editing</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 5,
                block: openTab === 5,
              }"
            >
              <h3>SoME Management</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 6,
                block: openTab === 6,
              }"
            >
              <h3>Copywriting</h3>
              <p>Bla bla bla</p>
            </div>
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 1,
            block: openTab === 1,
          }"
        >
          <div class="-mr-36">
            <KeenSlider />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 2,
            block: openTab === 2,
          }"
        >
          <div id="gallery" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <!-- Item 1 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="src/assets/IMG_0163.JPG"
                  class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
              <!-- Item 2 -->
              <div
                class="hidden duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src="src/assets/IMG_0163.JPG"
                  class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
              <!-- Item 4 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
              <!-- Item 5 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
            </div>
            <!-- Slider controls -->
            <button
              type="button"
              class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-prev
            >
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
              >
                <svg
                  aria-hidden="true"
                  class="h-6 w-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-next
            >
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
              >
                <svg
                  aria-hidden="true"
                  class="h-6 w-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 3,
            block: openTab === 3,
          }"
        >
          <div class="grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 4,
            block: openTab === 4,
          }"
        >
          <div class="grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 5,
            block: openTab === 5,
          }"
        >
          <div class="grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 6,
            block: openTab === 6,
          }"
        >
          <div class="grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
      </div>
      <!-- Second part - reversed -->
      <div class="grid grid-cols-2 grid-rows-1 gap-20">
        <div
          v-bind:class="{
            hidden: openTab !== 1,
            block: openTab === 1,
          }"
        >
          <div class="-ml-72 grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 2,
            block: openTab === 2,
          }"
        >
          <div class="-ml-60 grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 3,
            block: openTab === 3,
          }"
        >
          <div class="-ml-60 grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 4,
            block: openTab === 4,
          }"
        >
          <div class="-ml-60 grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 5,
            block: openTab === 5,
          }"
        >
          <div class="-ml-60 grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div
          v-bind:class="{
            hidden: openTab !== 6,
            block: openTab === 6,
          }"
        >
          <div class="-ml-60 grid w-[54rem] grid-cols-3 grid-rows-1 gap-4">
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
            <img src="src/assets/IMG_0163.JPG" class="" alt="" />
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col gap-4">
            <div
              v-bind:class="{
                hidden: openTab !== 1,
                block: openTab === 1,
              }"
            >
              <h3 class="text-3xl font-bold">Web design</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 2,
                block: openTab === 2,
              }"
            >
              <h3 class="text-3xl font-bold">Logo design</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 3,
                block: openTab === 3,
              }"
            >
              <h3 class="text-3xl font-bold">Page Layout Design</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 4,
                block: openTab === 4,
              }"
            >
              <h3 class="text-3xl font-bold">Video editing</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 5,
                block: openTab === 5,
              }"
            >
              <h3 class="text-3xl font-bold">Some Management</h3>
              <p>Bla bla bla</p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 6,
                block: openTab === 6,
              }"
            >
              <h3 class="text-3xl font-bold">Copywriting</h3>
              <p>Bla bla bla</p>
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
import KeenSlider from "./KeenSlider.vue";

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
  components: { KeenSlider },
};
</script>
