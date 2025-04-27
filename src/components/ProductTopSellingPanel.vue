<script setup>
import ProductCard from './ProductCard.vue'
const products = [
  { id: 1, name: 'Product1', base_price: 200 },
  { id: 2, name: 'Product2', base_price: 30 },
  { id: 3, name: 'Product3', base_price: 500 },
  { id: 4, name: 'Product4', base_price: 300 },
]
</script>
<template>
  <app-section-wrapper class="flex flex-col gap-20">
    <app-header class="text-center">Top Selling</app-header>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 items-center justify-center"
    >
      <product-card v-for="product in products" :key="product.key" :product="product" />
    </div>
    <app-gray-router-link class="block mx-auto" to="#">View All</app-gray-router-link>
  </app-section-wrapper>
</template>
