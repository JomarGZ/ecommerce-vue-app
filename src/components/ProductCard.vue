<script setup>
import AppStarRating from './AppStarRating.vue'
</script>
<template>
  <div
    class="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
  >
    <img
      src="https://i.pravatar.cc/300"
      class="rounded-3xl mb-4 transition-all duration-500 group-hover:opacity-90 w-full"
      alt=""
    />
    <div
      class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
    ></div>

    <div
      class="flex flex-col gap-2 p-4 transition-all duration-300 group-hover:bg-gray-50/80 rounded-b-3xl"
    >
      <h3 class="transition-all duration-300 group-hover:text-indigo-700">
        Sleeve Striped T-shirt
      </h3>
      <app-star-rating :rating="4.5 / 5" />
      <p class="text-gray-900 text-2xl font-bold">
        $50 <span class="text-gray-400 line-through ml-2">$100</span>
        <span
          class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm ml-2 transition-all duration-300 group-hover:bg-red-200 group-hover:text-red-900"
          >-30%</span
        >
      </p>

      <!-- Optional: Add to cart button that appears on hover -->
      <router-link
        to="#"
        class="text-white bg-black hover:scale-[1.02] hover:shadow-lg active:scale-100 active:shadow-md ease-out absolute bottom-0 left-1/2 cursor-pointer -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-6 py-2 rounded-full mb-4 whitespace-nowrap"
      >
        View Product
      </router-link>
    </div>
  </div>
</template>
