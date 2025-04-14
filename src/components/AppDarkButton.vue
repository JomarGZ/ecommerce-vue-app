<script setup>
import { Icon } from '@iconify/vue'
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
    type="type"
    class="text-white px-16 py-1.5 rounded-4xl transition-all duration-300 ease-out"
    :class="[
      'p-2 rounded text-white',
      isLoading
        ? 'bg-gray-700 cursor-not-allowed'
        : 'bg-black hover:scale-[1.02] hover:shadow-lg active:scale-100 active:shadow-md cursor-pointer',
    ]"
  >
    <span v-if="isLoading">
      <Icon icon="svg-spinners:180-ring" width="20" height="20" class="inline" />
    </span>
    <span v-else><slot></slot></span>
  </button>
</template>
