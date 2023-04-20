<template>
  <div>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-64 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../assets/logo-office-mockup.jpg"
            class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../assets/logo-office-mockup.jpg"
            class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3"
      >
        <button
          type="button"
          class="h-3 w-3 rounded-full bg-white/30"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="h-3 w-3 rounded-full bg-white/30"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-yellow/50 group-focus:bg-yellow group-focus:outline-none sm:h-10 sm:w-10"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5 text-black sm:h-6 sm:w-6"
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
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-yellow/50 group-focus:bg-yellow group-focus:outline-none sm:h-10 sm:w-10"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5 text-black sm:h-6 sm:w-6"
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
</template>
