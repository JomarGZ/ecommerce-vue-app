import axiosInstance from '@/lib/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProduct = defineStore('products', () => {
  const isFetchLoading = ref(false)
  const products = ref([])

  const fetchProducts = async (page = 1, filters = {}) => {
    if (isFetchLoading.value) return
    isFetchLoading.value = true

    try {
      const params = new URLSearchParams({
        page: page,
        ...(filters.categories?.length && {
          categories: filters.categories.join(','),
        }),
      })
      const response = await axiosInstance.get(`api/v1/products?${params.toString()}`)
      products.value = response.data || []
    } catch (e) {
      alert('Failed to fetch products')
      console.error('Error on fetching products: ', e)
    } finally {
      isFetchLoading.value = false
    }
  }

  return {
    fetchProducts,
    products,
  }
})
