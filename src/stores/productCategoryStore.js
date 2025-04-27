import axiosInstance from '@/lib/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductCategory = defineStore('product-category', () => {
  const categories = ref([])
  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get('api/v1/products-categories')
      categories.value = response.data?.data || []
    } catch (e) {
      alert('Failed fetching categories')
      console.error('Error on fetching product categories: ', e)
    }
  }
  return {
    categories,
    fetchCategories,
  }
})
