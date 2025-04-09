<script setup>
import ProductCard from './ProductCard.vue'
</script>
<template>
  <app-section-wrapper class="flex flex-col gap-20">
    <app-header class="text-center">New Arrivals</app-header>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 items-center justify-center"
    >
      <product-card />
      <product-card />
      <product-card />
      <product-card />
    </div>
    <app-gray-router-link class="block mx-auto" to="#">View All</app-gray-router-link>
  </app-section-wrapper>
</template>
