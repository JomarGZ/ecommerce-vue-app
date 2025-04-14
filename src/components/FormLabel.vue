<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
const formattedName = computed(() => {
  return props.name
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize each word
})
</script>
<template>
  <label class="block mb-1 font-samibold" :for="name"
    >{{ formattedName }}<span v-if="required" class="text-red-600 ml-1">*</span></label
  >
</template>
