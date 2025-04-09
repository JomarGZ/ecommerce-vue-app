<script setup>
import AppGrayButton from './AppGrayButton.vue'
import AppIcon from './icons/AppIcon.vue'
</script>
<template>
  <section
    class="bg-black flex flex-col gap-8 items-center justify-center lg:flex-row rounded-3xl px-10 lg:px-16 py-8 lg:py-14"
  >
    <app-header
      class="text-white basis-2/3 text-center lg:text-start text-2xl lg:text-3xl px-4 md:px-7 lg:px-12"
      >Stay upto date about our latest offers</app-header
    >
    <form class="w-full max-w-md">
      <div class="flex flex-col gap-4">
        <div
          class="bg-gray-200 flex items-center rounded-3xl px-2 lg:px-4 py-1.5 md:py-2 lg:py-3 h-10 md:h-12 lg:h-14 w-full"
        >
          <app-icon name="envelope" class="flex-shrink-0" />
          <input
            type="email"
            placeholder="Enter your email address"
            class="bg-transparent focus:outline-none w-full h-full px-3"
          />
        </div>

        <!-- Button - Now matching height -->
        <app-gray-button
          class="w-full flex items-center justify-center text-lg rounded-3xl px-1 md:px-2 lg:px-4 py-1.5 md:py-2 lg:py-3 h-10 md:h-12 lg:h-14"
        >
          Subscribe to Newsletter
        </app-gray-button>
      </div>
    </form>
  </section>
</template>
