<template>
  <section class="bg-bg01" id="contact">
    <div
      class="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-24 lg:grid-cols-2"
    >
      <div class="relative lg:static lg:flex lg:items-center">
        <div class="lg:max-max-w-lg mx-auto flex max-w-xl lg:mx-0">
          <!-- section marker -->
          <div class="mt-4 flex flex-col items-center">
            <p class="-rotate-90 text-sm font-medium uppercase text-blue">
              About
            </p>
            <div class="custom-line-text-about"></div>
          </div>
          <div>
            <h2 class="text-4xl font-semibold text-black">Get in touch</h2>
            <p class="mb-6 mt-6 text-base text-black">
              I would love to hear from you if you have a project in mind.
              Please feel free to contact me at one of my contacts below or send
              me a message through the contact form. Let's work together to
              bring your vision to life!
            </p>
            <dl class="space-y-4 text-base text-black">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Address</span>
                  <BuildingOffice2Icon
                    class="h-[1.65rem] w-[1.35rem] text-blue"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <span class="font-medium text-blue">Address:</span>
                  <br />
                  Esbjerg, Denmark
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Phone</span>
                  <PhoneIcon
                    class="h-[1.65rem] w-[1.35rem] text-blue"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <span class="font-medium text-blue">Phone:</span>
                  <br />
                  <a class="hover:text-yellow" href="tel:+1 (555) 234-5678"
                    >+45 91 98 8343</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <EnvelopeIcon
                    class="h-[1.65rem] w-[1.35rem] text-blue"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <span class="font-medium text-blue">Email:</span>
                  <br />
                  <a class="hover:text-yellow" href="mailto:hello@example.com"
                    >nora.vitkai@outlook.com</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Social media</span>
                  <IdentificationIcon
                    class="h-[1.65rem] w-[1.35rem] text-blue"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <span class="font-medium text-blue">Social media:</span>
                  <br />
                  <div class="flex gap-x-2">
                    <a
                      href="https://www.facebook.com/vitkainora/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        class="h-[1.65rem] w-[1.35rem] duration-150 ease-in hover:translate-y-2"
                        alt=""
                        src="../assets/facebook-icon.svg"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nora-vitkai/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        class="h-[1.65rem] w-[1.35rem] duration-150 ease-in hover:translate-y-2"
                        alt=""
                        src="../assets/linkedin-icon.svg"
                      />
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <form
        action="https://getform.io/f/c3c9f055-4b1e-43cd-a5c2-f89142513549"
        method="POST"
      >
        <div
          class="mx-auto max-w-xl rounded-lg bg-white p-4 lg:mr-0 lg:max-w-lg"
        >
          <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-black"
                >Name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  name="name"
                  id="name"
                  autocomplete="given-name"
                  class="text-gray-400 ring-gray-300 placeholder:text-gray-400 block w-full rounded-lg border-0 bg-bg01 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-black"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  type="email"
                  placeholder="e.g. john.doe@gmail.com"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="text-gray-400 ring-gray-300 placeholder:text-gray-400 block w-full rounded-lg border-0 bg-bg01 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone"
                class="block text-sm font-medium leading-6 text-black"
                >Phone</label
              >
              <div class="mt-2.5">
                <input
                  type="tel"
                  placeholder="e.g. +4591856742"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  class="text-gray-400 ring-gray-300 placeholder:text-gray-400 block w-full rounded-lg border-0 bg-bg01 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-medium leading-6 text-black"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a message..."
                  rows="4"
                  class="text-gray-400 ring-gray-300 placeholder:text-gray-400 block w-full rounded-lg border-0 bg-bg01 px-3.5 py-2 shadow-inner ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-yellow sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="mt-6 flex justify-center">
            <button
              type="submit"
              class="rounded-full border border-yellow bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xl hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
} from "@heroicons/vue/24/outline";
</script>
