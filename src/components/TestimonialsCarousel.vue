<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import AppStarRating from './AppStarRating.vue'
const testimonials = [
  {
    id: 1,
    rating: '5',
    customerName: 'John Doe',
    content: 'asdsaddadada',
  },
  {
    id: 2,
    rating: '5',
    customerName: 'John Doe',
    content: 'asdsaddadada',
  },
  {
    id: 3,
    rating: '5',
    customerName: 'John Doe',
    content: 'asdsaddadada',
  },
  {
    id: 4,
    rating: '5',
    customerName: 'John Doe',
    content: 'asdsaddadada',
  },
]
const carouselConfig = {
  height: 300,
  itemsToShow: 3.5, // Default for desktop
  wrapAround: true,
  // Add responsive breakpoints
  breakpoints: {
    0: {
      // Mobile (0px and up)
      itemsToShow: 1,
    },
    768: {
      // Tablet (768px and up)
      itemsToShow: 2,
    },
    1024: {
      // Desktop (1024px and up)
      itemsToShow: 3.5,
    },
  },
}
</script>

<template>
  <app-section-wrapper>
    <app-header class="text-start mb-16">Our Happy Customers</app-header>
    <div
      class="transition-[300ms] [&_.inactive]:opacity-70 [&_.active]:opacity-100 [&_.near]:opacity-90"
    >
      <Carousel v-bind="carouselConfig">
        <Slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="text-gray-900 flex flex-col gap-4 border border-gray-300 p-7 rounded-xl">
            <app-star-rating />
            <h2 class="flex items-center text-gray-950 text-2xl font-bold">
              Sarah M.
              <span
                class="inline-flex ml-2 items-center justify-center h-5 w-5 text-white bg-green-500 text-xs rounded-full"
              >
                &#10003;
              </span>
            </h2>
            <p class="text-sm text-gray-600">
              "I'm blown away by the quality abd style of the clothes I received from Shop.co. From
              casual wear to elegant dresses, every piece I've bought has exceeded my expectation."
            </p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </app-section-wrapper>
</template>

<style>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(10px) rotateY(-12deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1);
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--next ~ .carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-10px) rotateY(12deg) scale(0.9);
}
</style>
