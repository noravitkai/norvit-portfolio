<template>
  <section class="bg-bg02" id="home">
    <div class="mx-auto max-w-screen-xl px-6 pb-24 pt-8 text-center">
      <div class="flex">
        <!-- social links -->
        <div class="hidden items-end lg:flex xl:flex">
          <ul class="custom-line-icons flex flex-col items-center gap-y-1">
            <li class="duration-150 ease-in hover:translate-x-2">
              <a
                href="mailto:vitkai.nora@outlook.hu"
                target="_blank"
                rel="noreferrer"
              >
                <img class="h-8" alt="" src="../assets/mail-icon.svg" />
              </a>
            </li>
            <li class="duration-150 ease-in hover:translate-x-2">
              <a
                href="https://www.facebook.com/vitkainora/"
                target="_blank"
                rel="noreferrer"
              >
                <img class="h-8" alt="" src="../assets/facebook-icon.svg" />
              </a>
            </li>
            <li class="duration-150 ease-in hover:translate-x-2">
              <a
                href="https://www.facebook.com/vitkainora/"
                target="_blank"
                rel="noreferrer"
              >
                <img class="h-8" alt="" src="../assets/linkedin-icon.svg" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <!-- hero text -->
          <div class="relative">
            <h1
              class="mb-4 text-7xl font-extrabold uppercase leading-none text-yellow/40 md:text-8xl lg:text-9xl"
            >
              Hello
            </h1>
            <h2
              class="text-gray-900 absolute inset-x-0 top-2/3 mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
            >
              nice to meet you!
            </h2>
          </div>
          <p
            class="mb-8 mt-8 text-base font-normal text-black sm:px-16 lg:text-xl xl:px-48"
          >
            My name is<span
              class="font-semibold underline decoration-yellow/40 decoration-4 underline-offset-0"
            >
              Nora Vitkai.</span
            >
            I’m a dedicated creative developer with a passion for innovation and
            quality. With a zeal for originality and commitment to excellence, I
            create digital experiences that bring visions to life.
          </p>
          <!-- CTA buttons -->
          <div class="mb-8 flex flex-row items-center justify-center gap-x-6">
            <a
              href="#about"
              class="rounded-full border border-yellow bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xl hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
            >
              Get to know me
            </a>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/norvit-portfolio.appspot.com/o/Nora%20Vitkai%20CV.pdf?alt=media&token=9ee79c8a-a73c-4ff5-b785-9956cfcc1ae8"
              target="_blank"
              class="flex items-center gap-1 text-sm font-semibold leading-6 text-black hover:text-yellow"
            >
              Download my CV
              <ArrowDownTrayIcon class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <!-- hero image -->
          <div class="flex items-center justify-center">
            <img class="h-60 sm:h-80" src="../assets/hero-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
</script>
