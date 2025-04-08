<script setup>
import AppIcon from './icons/AppIcon.vue'
</script>
<template>
  <app-section-wrapper
    class="bg-black text-white text-xs md:text-sm lg:text-lg flex justify-between"
  >
    <p class="mx-auto text-center t">
      Sign up and get 50% off to your first order.
      <router-link to="#" class="font-medium underline">Sign Up Now</router-link>
    </p>
    <button><app-icon name="x-mark"></app-icon></button>
  </app-section-wrapper>
</template>
