<script setup>
import casualCategory from '@/assets/images/categories/casual-category.jpg'
import formalCategory from '@/assets/images/categories/formal-category.jpg'
import partyCategory from '@/assets/images/categories/party-category.jpg'
import gymCategory from '@/assets/images/categories/gym-category.jpg'
</script>
<template>
  <app-section-wrapper>
    <div class="bg-gray-100 px-10 py-12 lg:px-20 lg:py-24 rounded-4xl">
      <app-header class="mb-20 text-center">Browse By Dress Style</app-header>
      <div class="grid grid-cols-1 lg:grid-cols-3 grid-rows-4 lg:grid-rows-2 gap-4">
        <div class="rounded-4xl overflow-hidden">
          <img :src="casualCategory" alt="" class="w-full h-full object-fill" />
        </div>
        <div class="lg:col-span-2 rounded-4xl overflow-hidden">
          <img :src="formalCategory" alt="" class="w-full h-full object-fill" />
        </div>
        <div class="lg:col-span-2 lgg:row-start-2 rounded-4xl overflow-hidden">
          <img :src="partyCategory" alt="" class="w-full h-full object-fill" />
        </div>
        <div class="lg:col-start-3 lg:row-start-2 rounded-4xl overflow-hidden">
          <img :src="gymCategory" alt="" class="w-full h-full object-fill" />
        </div>
      </div>
    </div>
  </app-section-wrapper>
</template>
