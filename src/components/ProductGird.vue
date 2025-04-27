<script setup>
import { useProduct } from '@/stores/productStore'
import ProductCard from './ProductCard.vue'
import { computed, onMounted } from 'vue'
import { TailwindPagination } from 'laravel-vue-pagination'
import { Icon } from '@iconify/vue'

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
      <div v-if="productManager.isFetchLoading" class="col-span-3 flex justify-center items-center">
        <Icon icon="eos-icons:bubble-loading" width="80" height="80" class="m-10 text-gray-300" />
      </div>
      <div v-else-if="productManager.fetchError" class="col-span-3 text-center p-6">
        <Icon
          icon="mdi:alert-circle-outline"
          width="60"
          height="60"
          class="mx-auto text-red-400 mb-4"
        />
        <h3 class="text-xl font-medium text-red-600">Failed to load products</h3>
        <p class="text-gray-500 mt-2">{{ productManager.fetchError }}</p>
        <app-dark-button @click="productManager.fetchProducts()"> Retry </app-dark-button>
      </div>
      <template v-else-if="displayedProducts?.data?.length > 0">
        <ProductCard
          v-for="product in displayedProducts?.data"
          :key="product.id"
          :product="product"
        />
      </template>
      <div v-else class="col-span-3 text-center text-2xl text-gray-400 border">
        Products nothing to be Found!
      </div>
    </div>
    <div class="text-center">
      <TailwindPagination
        :show-disabled="true"
        :limit="3"
        :data="displayedProducts"
        :item-classes="[
          'bg-white',
          'text-gray-800',
          'border',
          'hover:bg-gray-100',
          'bg-gray-200',
          'border-gray-100',
          'rounded-full',
          'cursor-pointer',
          'mx-2',
        ]"
        :active-classes="['rounded-full', 'border-gray-100', 'bg-gray-300']"
        @pagination-change-page="productManager.fetchProducts"
      >
        <template #prev-nav>
          <span
            ><Icon icon="iconamoon:arrow-left-2-bold" width="24" height="24" class="text-gray-400"
          /></span>
        </template>

        <template #next-nav>
          <span
            ><Icon icon="iconamoon:arrow-right-2-bold" width="24" height="24" class="text-gray-400"
          /></span>
        </template>
      </TailwindPagination>
    </div>
  </div>
</template>
