<script setup>
defineProps({
  to: {
    type: [Object, String],
    required: true,
  },
})
</script>
<template>
  <router-link
    :to="to"
    class="bg-gray-100 border text-gray-900 px-20 py-3 rounded-4xl transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-100 active:shadow-md"
  >
    <slot></slot>
  </router-link>
</template>
