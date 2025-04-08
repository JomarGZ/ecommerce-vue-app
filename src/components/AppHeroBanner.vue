<script setup>
import AppButton from '@/components/AppButton.vue'
</script>
<template>
  <app-section-wrapper
    class="flex-col items-start justify-center bg-[url(/images/hero-image.jpg)] bg-cover h-[calc(100vh-8.3rem)]"
  >
    <h2 class="font-bold text-7xl text-gray-950 font-integral mb-4">
      <span class="block">Find clothes</span>
      <span class="block">that matches</span>
      <span class="block">your style</span>
    </h2>
    <p class="mb-4">
      <span class="block"
        >Browse through our diverse range of meticulously crafted garments, designed</span
      >
      <span class="block">to bring out your individuality and cater to your sense of style</span>
    </p>
    <app-button>Shop Now</app-button>
    <div
      class="flex gap-8 mt-8 [&>div]:relative [&>div:not(:last-child)]:after:content-[''] [&>div:not(:last-child)]:after:absolute [&>div:not(:last-child)]:after:right-[-1rem] [&>div:not(:last-child)]:after:top-1/2 [&>div:not(:last-child)]:after:-translate-y-1/2 [&>div:not(:last-child)]:after:h-12 [&>div:not(:last-child)]:after:w-px [&>div:not(:last-child)]:after:bg-gray-300"
    >
      <div>
        <p class="text-3xl text-gray-950 font-extrabold">200+</p>
        <p class="text-gray-600">International Brands</p>
      </div>
      <div>
        <p class="text-3xl text-gray-950 font-extrabold">2,000+</p>
        <p class="text-gray-600">High-Quality Products</p>
      </div>
      <div>
        <p class="text-3xl text-gray-950 font-extrabold">30,000+</p>
        <p class="text-gray-600">Happy Customers</p>
      </div>
    </div>
  </app-section-wrapper>
</template>
