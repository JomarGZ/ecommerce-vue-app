<script setup>
import ProductFilterSidebar from '@/components/ProductFilterSidebar.vue'
import ProductGrid from '@/components/ProductGird.vue'
import { useProduct } from '@/stores/productStore'
import { onMounted } from 'vue'
const productStore = useProduct()
onMounted(() => productStore.fetchProducts())

const onFilterProducts = ($event) => {
  productStore.fetchProducts(1, { categories: $event.categories })
}
</script>
<template>
  <app-section-wrapper>
    <ul class="flex gap-1 mb-3">
      <li>Home</li>
      <li>></li>
      <li>Casual</li>
    </ul>
    <div class="grid grid-cols-4 grid-rows-3 gap-4">
      <product-filter-sidebar @filter-change="onFilterProducts" />
      <product-grid :products="productStore.products" />
    </div>
  </app-section-wrapper>
</template>
