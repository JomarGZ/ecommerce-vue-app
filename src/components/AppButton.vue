<script setup>
import AppIcon from './icons/AppIcon.vue'
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <button
    class="bg-black text-white px-20 py-3 rounded-4xl transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-100 active:shadow-md"
  >
    <app-icon v-if="isLoading" name="spinner-circle" class="w-6 h-6 stroke-2" />
    <slot v-if="!isLoading"></slot>
  </button>
</template>
