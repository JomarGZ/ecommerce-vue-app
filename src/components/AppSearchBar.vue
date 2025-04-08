<script setup>
import AppIcon from './icons/AppIcon.vue'
</script>
<template>
  <div class="bg-gray-100 rounded-3xl border p-2 mr-6">
    <app-icon name="magnifying-glass" class="w-5 h-5" />
    <input
      type="text"
      placeholder="Search for product..."
      class="w-full focus:ring-0 focus:border-0 focus:outline-none pl-2 bg-transparent"
    />
  </div>
</template>
