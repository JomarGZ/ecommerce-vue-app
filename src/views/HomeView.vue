<script setup>
import AppHeroBanner from '@/components/AppHeroBanner.vue'
import versaceLogo from '@/assets/images/brands/versace-logo.png'
import zaraLogo from '@/assets/images/brands/zara-logo.png'
import gucciLogo from '@/assets/images/brands/gucci-logo.png'
import pradaLogo from '@/assets/images/brands/prada-logo.png'
import calvinKliennLogo from '@/assets/images/brands/calvin-klien-logo.png'
import ProductNewArrivalPanel from '@/components/ProductNewArrivalPanel.vue'
import ProductTopSellingPanel from '@/components/ProductTopSellingPanel.vue'
import ProductCategoryPanel from '@/components/ProductCategoryPanel.vue'
import TestimonialsCarousel from '@/components/TestimonialsCarousel.vue'
import NewsLetterSubscription from '@/components/NewsLetterSubscription.vue'
</script>

<template>
  <app-hero-banner />
  <app-section-wrapper class="bg-black mb-14">
    <div class="flex items-center w-full gap-8 justify-center sm:justify-around flex-wrap my-6">
      <img :src="versaceLogo" alt="versace logo" class="w-28 md:w-32 h-8 md:h-10 border-white" />
      <img :src="zaraLogo" alt="zara logo" class="w-28 md:w-32 h-8 md:h-10" />
      <img :src="gucciLogo" alt="gucci logo" class="w-28 md:w-32 h-8 md:h-10" />
      <img :src="pradaLogo" alt="prada logo" class="w-28 md:w-32 h-8 md:h-10" />
      <img :src="calvinKliennLogo" alt="calvin klien logo" class="w-28 md:w-32 h-8 md:h-10" />
    </div>
  </app-section-wrapper>
  <product-new-arrival-panel class="mb-16" />
  <product-top-selling-panel class="mb-16" />
  <product-category-panel class="mb-16" />
  <testimonials-carousel />
</template>
