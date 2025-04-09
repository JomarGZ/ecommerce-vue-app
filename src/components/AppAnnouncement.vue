<script setup>
import { ref } from 'vue'
import AppIcon from './icons/AppIcon.vue'
const isDisplay = ref(true)
</script>
<template>
  <app-section-wrapper
    v-if="isDisplay"
    class="bg-black text-white text-xs md:text-sm lg:text-lg flex justify-between"
  >
    <p class="mx-auto text-center t">
      Sign up and get 50% off to your first order.
      <router-link to="#" class="font-medium underline">Sign Up Now</router-link>
    </p>
    <button @click="isDisplay = false" class="cursor-pointer">
      <app-icon name="x-mark"></app-icon>
    </button>
  </app-section-wrapper>
</template>
