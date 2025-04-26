<script setup>
import { useProduct } from '@/stores/productStore'
import ProductCard from './ProductCard.vue'
import { computed, onMounted } from 'vue'
const props = defineProps({
  products: Object,
})
const productManager = useProduct()

onMounted(() => {
  if (!props.products) {
    productManager.fetchProducts()
  }
})
const displayedProducts = computed(() => props.products ?? productManager.products ?? [])
</script>

<template>
  <div class="row-span-3 col-span-3">
    <div class="flex justify-between m-3">
      <h2 class="text-3xl font-bold capitalize">Most Popular</h2>
      <p>Showing 1-9 of 100 Products Sort by: <span class="font-semibold">Most Popular</span></p>
    </div>
    <div class="grid grid-cols-3 gap-6 m-5 items-center justify-center">
      <ProductCard v-for="product in displayedProducts?.data" :key="product.id" />
    </div>
    <div class="text-center">Pagination</div>
  </div>
</template>
