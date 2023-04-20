<template>
  <header id="navbar" class="bg-bg02">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#home" class="-m-1.5 p-1.5">
          <span class="sr-only">Nora Vitkai's Portfolio</span>
          <img class="h-10 w-auto" src="../assets/me.svg" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a
          href="#home"
          class="text-sm font-semibold leading-6 text-black hover:text-yellow"
          >Home</a
        >
        <a
          href="#about"
          class="text-sm font-semibold leading-6 text-black hover:text-yellow"
          >About</a
        >
        <a
          href="#experience"
          class="text-sm font-semibold leading-6 text-black hover:text-yellow"
          >Experience</a
        >
        <a
          href="#contact"
          class="text-sm font-semibold leading-6 text-black hover:text-yellow"
          >Contact</a
        >
      </PopoverGroup>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bg02 p-6 sm:max-w-sm sm:ring-1 sm:ring-black/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Nora Vitkai's Portfolio</span>
            <img class="h-10 w-auto" src="../assets/me.svg" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-black"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-black/10">
            <div class="space-y-1 py-6">
              <a
                @click="mobileMenuOpen = false"
                href="#home"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-black hover:text-yellow"
                >Home</a
              >
              <a
                @click="mobileMenuOpen = false"
                href="#about"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-black hover:text-yellow"
                >About</a
              >
              <a
                @click="mobileMenuOpen = false"
                href="#experience"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-black hover:text-yellow"
                >Experience</a
              >
              <a
                @click="mobileMenuOpen = false"
                href="#contact"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-black hover:text-yellow"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const mobileMenuOpen = ref(false);
</script>
