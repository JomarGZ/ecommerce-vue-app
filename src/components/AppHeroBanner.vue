<script setup>
import AppDarkButton from '@/components/AppDarkButton.vue'
</script>
<template>
  <app-section-wrapper
    class="flex-col flex items-start justify-center bg-[#F2F0F1] sm:bg-[url(/images/hero-image.jpg)] bg-cover bg-center h-[calc(100vh-6rem)]"
  >
    <h2
      class="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-950 font-integral mb-4"
    >
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
    <app-dark-button class="self-center sm:self-start">Shop Now</app-dark-button>
    <div
      class="flex flex-wrap justify-center items-center gap-8 mt-8 [&>div]:relative [&>div:not(:last-child)]:after:content-[''] [&>div:not(:last-child)]:after:absolute [&>div:not(:last-child)]:after:right-[-1rem] [&>div:not(:last-child)]:after:top-1/2 [&>div:not(:last-child)]:after:-translate-y-1/2 [&>div:not(:last-child)]:after:h-12 [&>div:not(:last-child)]:after:w-px [&>div:not(:last-child)]:after:bg-gray-300"
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
  <app-section-wrapper
    class="bg-[url(/images/hero-image-small.jpg)] sm:hidden h-96 bg-cover bg-center"
  ></app-section-wrapper>
</template>
