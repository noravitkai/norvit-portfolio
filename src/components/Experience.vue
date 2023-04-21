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
          <h2 class="text-4xl font-semibold">Project showcase</h2>
          <p class="text-base">
            My experience spans across many digital media fields. During my
            studies, I have had the privilege of working on a variety of
            real-life projects. Through these, I have gained expertise in
            working effectively both individually and in a team, paying close
            attention to details, and adhering to strict timelines.
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
                    Web design
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
              <h3 class="text-4xl font-semibold">
                Redesigning the website of MarketingPuzzle
              </h3>
              <p class="mt-6">
                As part of our collaboration with MarketingPuzzle, a marketing
                agency, I was tasked with redesigning the website to align with
                the new brand direction. Our goal was to create a design that is
                not only aesthetically pleasing, but also enhances user
                experience and effectively communicates the brand's message.
                During the creation, the company's values, mission, and vision
                were taken into account, so that these statements are properly
                reflected in the visual appearance.
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 2,
                block: openTab === 2,
              }"
            >
              <h3 class="text-4xl font-semibold">
                Redesigning the logo of MarketingPuzzle
              </h3>
              <p class="mt-6">
                I was approached by MarketingPuzzle to design a new logo that
                would accurately convey the essence of the brand. The primary
                objective was to create a logo that is visually appealing,
                memorable, and easily recognisable. As an idea-oriented
                marketing agency, MarketingPuzzle needed a logo that reflects
                their commitment to creative problem-solving and continuous
                pursuit of innovation. Besides that, the logo's distinctive
                design has set MarketingPuzzle apart from local competitors in
                the marketing industry.
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 3,
                block: openTab === 3,
              }"
            >
              <h3 class="text-4xl font-semibold">
                Designing the call for papers and the conference program of
                FiKon 2022
              </h3>
              <p class="mt-6">
                I worked with Fiatalok Konferenciája, a student-led initiative
                that provides a platform for university students in Hungary to
                present their research findings and engage in academic
                discussions. In addition to organizing the event, my task was to
                design the layout for both the conference call and the program,
                taking into consideration the conference's theme and specific
                goals, as well as the user experience and accessibility.
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 4,
                block: openTab === 4,
              }"
            >
              <h3 class="text-4xl font-semibold">
                Editing a promotional video for MarketingPuzzle
              </h3>
              <p class="mt-6">
                As part of our collaboration with MarketingPuzzle, a Hungarian
                marketing agency, I was tasked with editing a promo commercial
                video that highlights the agency's unique approach and
                capabilities. The goal was to showcase MarketingPuzzle as a
                forward-thinking and innovative agency that leverages the latest
                marketing tools and trends to help clients stand out in a
                competitive marketplace. The fast-paced video can be used well
                as an introductory video or in marketing campaigns and
                promotional materials.
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 5,
                block: openTab === 5,
              }"
            >
              <h3 class="text-4xl font-semibold">
                Creating and scheduling posts for CsempePiramis
              </h3>
              <p class="mt-6">
                I was brought in as a collaborative partner for managing the
                social media content across Facebook and Instagram of
                CsempePiramis, a Hungarian company that sells tiles and related
                materials. We developed a tailored content strategy to
                demonstrate the company's extensive product range and expertise
                to a wider audience in a visually engaging way that resonates
                with potential customers and helps drive traffic to the their
                website.
              </p>
            </div>
            <div
              v-bind:class="{
                hidden: openTab !== 6,
                block: openTab === 6,
              }"
            >
              <h3 class="text-4xl font-semibold">
                Producing textual content for CsempePiramis
              </h3>
              <p class="mt-6">
                As part of our collaboration with CsempePiramis, a Hungarian
                company that specializes in selling tiles and related products,
                we were tasked with creating engaging and informative blog
                articles that would attract potential customers. I wrote blog
                articles that cover a wide range of topics, from design trends
                and proper installation techniques to maintenance tips and
                product reviews. My copywriting approach was aimed at providing
                value to the readers, while also promoting the company's
                products and services in a subtle and effective way.
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

      <div
        class="grid grid-cols-2 grid-rows-1 items-center gap-20"
        v-bind:class="{
          hidden: openTab !== 2,
          block: openTab === 2,
        }"
      >
        <LogoSliderTwo />
        <div class="flex">
          <div>
            <h3 class="text-4xl font-semibold">
              Redesigning the logo of Pillér Épker
            </h3>
            <p class="mt-6">
              I had the pleasure of collaborating with Pillér Épker, a building
              material trade in Hungary, to create a new logo that resonates
              with the brand's target audience. As a company in the construction
              industry, it was important to reflect their focus on quality,
              reliability, and strength. Keeping the core values of the brand in
              mind, I designed a logo that features a modern and minimalist
              style with a twist, as the main feature of the logo is the letter
              "P," which forms a pillar referring to the meaning of the word
              “Pillér”.
            </p>
          </div>
          <div class="mt-9 flex flex-col items-center">
            <p class="-rotate-90 text-sm font-medium uppercase text-yellow">
              Experience
            </p>
            <div class="custom-line-text-experience"></div>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 grid-rows-1 items-center gap-20"
        v-bind:class="{
          hidden: openTab !== 6,
          block: openTab === 6,
        }"
      >
        <CopywritingSliderTwo />
        <div class="flex">
          <div>
            <h3 class="text-4xl font-semibold">
              Producing textual content for Pillér Épker
            </h3>
            <p class="mt-6">
              Working with the building material trade, Pillér Épker in Hungary,
              the goal was to create insightful blog articles that establish the
              company as a trusted source of information in the industry and
              help generate clicks to the website. By creating content that was
              optimized for search engines, I was able to assist the company in
              building a stronger online presence and raising brand awareness
              among their target audience.
            </p>
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

<script setup>
import WebSlider from "./WebSlider.vue";
import LogoSlider from "./LogoSlider.vue";
import PageSlider from "./PageSlider.vue";
import VideoSlider from "./VideoSlider.vue";
import SomeSlider from "./SomeSlider.vue";
import CopywritingSlider from "./CopywritingSlider.vue";
import LogoSliderTwo from "./LogoSliderTwo.vue";
import CopywritingSliderTwo from "./CopywritingSliderTwo.vue";

import { ref } from "vue";

let openTab = ref(1);

function toggleTabs(tabNumber) {
  openTab.value = tabNumber;
}
</script>
