import axiosInstance from '@/lib/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProduct = defineStore('products', () => {
  const isFetchLoading = ref(false)
  const fetchError = ref(null)
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
      fetchError.value = e.message || 'Failed to fetch products'
    } finally {
      isFetchLoading.value = false
    }
  }

  return {
    fetchProducts,
    isFetchLoading,
    fetchError,
    products,
  }
})
