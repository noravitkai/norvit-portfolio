<template>
  <section class="bg-bg01" id="about">
    <div class="mx-auto max-w-7xl px-6 py-24">
      <!-- first part -->
      <div class="grid items-center gap-14 md:grid-cols-2">
        <div class="order-2 sm:order-1">
          <!-- video CV -->
          <div class="aspect-h-9 aspect-w-16">
            <iframe
              src="https://www.youtube.com/embed/t_WDUt50p6U"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="order-1 flex sm:order-2">
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
            <!-- contact button -->
            <div class="flex flex-row">
              <a
                href="#contact"
                class="rounded-full border border-yellow bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xl hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
              >
                Contact me
              </a>
            </div>
          </div>
          <!-- section marker -->
          <div class="mt-4 flex flex-col items-center">
            <p class="-rotate-90 text-sm font-medium uppercase text-blue">
              About
            </p>
            <div class="custom-line-text-about"></div>
          </div>
        </div>
      </div>
      <!-- second part -->
      <!-- bigger screens -->
      <div class="mt-24 hidden md:block">
        <div
          class="grid items-center gap-4 sm:gap-6 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1"
        >
          <div class="order-2">
            <div class="flex-auto">
              <div class="tab-content tab-space">
                <!-- skills content -->
                <div
                  v-bind:class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                  }"
                >
                  <p>
                    Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla
                    bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                    bla bla bla bla lorem ipsum.
                    <br />
                    <br />
                    Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla
                    bla bla lorem ipsum lorem lorem ipsum.
                  </p>
                </div>
                <!-- tools content -->
                <div
                  v-bind:class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                  }"
                >
                  <img src="src/assets/tools-icons.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 flex">
            <!-- section marker -->
            <div class="mt-4 flex flex-col items-center">
              <p class="-rotate-90 text-sm font-medium uppercase text-blue">
                About
              </p>
              <div class="custom-line-text-about"></div>
            </div>
            <div class="flex flex-col gap-6">
              <!-- description text -->
              <h2 class="text-4xl font-semibold">Lorem ipsum</h2>
              <p class="text-base">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
              <!-- tabs -->
              <div class="flex flex-wrap">
                <div class="max-w-md">
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
                        Skills
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
                        Tools
                      </a>
                    </li>
                  </ul>
                  <div
                    class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- smaller screens -->
      <div class="mt-24 block md:hidden">
        <div class="grid items-center gap-4 sm:gap-14">
          <div class="order-2"></div>
          <div class="order-1 flex">
            <!-- section marker -->
            <div class="mt-4 flex flex-col items-center">
              <p class="-rotate-90 text-sm font-medium uppercase text-blue">
                About
              </p>
              <div class="custom-line-text-about"></div>
            </div>
            <div class="flex flex-col gap-6">
              <!-- description text -->
              <h2 class="text-4xl font-semibold">Lorem ipsum</h2>
              <p class="text-base">
                Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum bla bla
                bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla bla
                bla bla lorem ipsum lorem lorem ipsum lorem ipsum bla bla bla
                bla bla bla bla bla bla bla lbangvghvjz lorem ipsum lorem lorem
                ipsum lorem ipsum bla bla bla…
              </p>
              <!-- tabs -->
              <div class="flex flex-wrap">
                <div class="max-w-md">
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
                        Skills
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
                        Tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- skills content -->
              <div class="flex-auto">
                <div class="tab-content tab-space">
                  <div
                    v-bind:class="{
                      hidden: openTab !== 1,
                      block: openTab === 1,
                    }"
                  >
                    <p>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </p>
                  </div>
                  <!-- skills content -->
                  <div
                    v-bind:class="{
                      hidden: openTab !== 2,
                      block: openTab === 2,
                    }"
                  >
                    <img src="src/assets/tools-icons.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
};
</script>
