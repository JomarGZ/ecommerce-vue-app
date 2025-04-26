<script setup>
import { useProductCategory } from '@/stores/productCategoryStore'
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import AppGrayButton from './AppGrayButton.vue'
const emit = defineEmits(['filter-change'])
const productCategoryManager = useProductCategory()
const selectedCategories = ref([])

onMounted(() => {
  productCategoryManager.fetchCategories()
  const urlParams = new URLSearchParams(window.location.search)
  const categories = urlParams.get('categories')?.split(',') || []
  selectedCategories.value = categories.map(Number)
})
const handleSubmit = () => {
  const query = new URLSearchParams(window.location.search)
  if (selectedCategories.value.length) {
    query.set('categories', selectedCategories.value.join(','))
  } else {
    query.delete('categories')
  }
  history.replaceState(null, '', `?${query.toString()}`)
  emit('filter-change', { categories: selectedCategories.value })
}
</script>
<template>
  <div class="row-span-3 border border-gray-300 rounded-2xl p-4">
    <div class="flex justify-between items-center">
      <h2>Filter</h2>
      <Icon icon="heroicons:adjustments-vertical-16-solid" width="16" height="16" />
    </div>
    <div class="bg-gray-200 h-0.5 w-full my-3"></div>
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <legend class="mb-2 font-bold">Dress Style</legend>
        <div class="space-y-2">
          <div v-if="productCategoryManager.categories.length === 0" class="text-sm text-gray-500">
            No categories available.
          </div>
          <div
            v-for="cat in productCategoryManager.categories"
            :key="cat.id"
            class="flex items-center"
          >
            <input
              type="checkbox"
              name="categories[]"
              :id="`cat-${cat.id}`"
              :value="cat.id"
              v-model="selectedCategories"
            />
            <label :for="`cat-${cat.id}`" class="capitalize">{{ cat.name }}</label>
          </div>
        </div>
      </fieldset>
      <div class="flex flex-col items-center justify-center gap-4 mt-4">
        <app-dark-button type="submit">Apply Filter</app-dark-button>
        <AppGrayButton type="button" @click="selectedCategories = []">Reset</AppGrayButton>
      </div>
    </form>
  </div>
</template>
