<script setup>
import AppIcon from './icons/AppIcon.vue'
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>
<template>
  <button
    :type="type"
    class="bg-gray-100 border text-gray-900 px-20 py-1 rounded-4xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-100 active:shadow-md"
  >
    <app-icon v-if="isLoading" name="spinner-circle" class="w-6 h-6 stroke-2" />
    <slot v-if="!isLoading"></slot>
  </button>
</template>
