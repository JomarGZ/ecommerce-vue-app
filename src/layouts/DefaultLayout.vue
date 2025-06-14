<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import AppProfile from '@/components/AppProfile.vue'
import AppSearchBar from '@/components/AppSearchBar.vue'
import NewsLetterSubscription from '@/components/NewsLetterSubscription.vue'
import { useAuthStore } from '@/stores/authStore'
import AppAnnouncement from '@/components/AppAnnouncement.vue'
import AppIcon from '@/components/icons/AppIcon.vue'
import { Icon } from '@iconify/vue'
const auth = useAuthStore()
const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <app-announcement />

  <div
    class="fixed top-0 md:hidden block left-0 h-full w-full bg-white z-50 transform transition-transform ease-in-out duration-300 shadow-lg"
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex justify-between items-center p-4 border-b">
      <app-search-bar class="flex" />
      <button @click="closeSidebar">
        <Icon icon="iwwa:delete" width="40" height="40" />
      </button>
    </div>

    <nav class="p-4">
      <ul class="space-y-4 text-lg text-gray-800">
        <li>
          <router-link to="#" @click="closeSidebar" class="block py-2 hover:text-gray-500"
            >On Sale</router-link
          >
        </li>
        <li>
          <router-link to="#" @click="closeSidebar" class="block py-2 hover:text-gray-500"
            >New Arrivals</router-link
          >
        </li>
        <li>
          <router-link to="#" @click="closeSidebar" class="block py-2 hover:text-gray-500"
            >Brands</router-link
          >
        </li>
        <li class="border-t pt-4 mt-4">
          <router-link to="#" @click="closeSidebar" class="block py-2 hover:text-gray-500"
            >My Account</router-link
          >
        </li>
        <li>
          <router-link to="#" @click="closeSidebar" class="block py-2 hover:text-gray-500"
            >Cart</router-link
          >
        </li>
      </ul>
    </nav>
  </div>

  <app-section-wrapper class="md:py-6 flex justify-between items-center">
    <div class="flex gap-4 items-center">
      <button class="inline-block lg:hidden" @click="toggleSidebar">
        <!-- <app-icon name="bars-3" class="stroke-2" /> -->
      </button>
      <h2 class="uppercase xl:text-4xl lg:text-3xl text-2xl font-bold font-integral">Shop.co</h2>
    </div>
    <ul class="gap-4 text-sm md:text-lg lg:text-xl text-gray-800 hidden lg:flex">
      <li><router-link :to="{ name: 'home' }" class="hover:underline">Home</router-link></li>
      <li>
        <router-link :to="{ name: 'products.index' }" class="hover:underline">Products</router-link>
      </li>
      <li><router-link to="#" class="hover:underline">Brands</router-link></li>
    </ul>
    <div class="flex gap-3 items-center">
      <app-search-bar class="hidden sm:flex items-center w-xs md:w-sm xl:w-xl" />
      <template v-if="auth.isAuthenticated">
        <router-link to="#">
          <Icon icon="mdi:cart-outline" width="24" height="24" />
        </router-link>
        <app-profile />
      </template>
      <template v-else>
        <router-link :to="{ name: 'register' }" class="hover:underline"> Signup </router-link>
        <router-link :to="{ name: 'login' }" class="hover:underline"> Login </router-link>
      </template>
    </div>
  </app-section-wrapper>
  <RouterView />
  <footer
    class="bg-[#F2F0F1] mt-16 md:mt-20 lg:mt-32 pt-[80px] px-4 py-2 md:py-3 md:px-14 2xl:px-20 text-xs md:text-sm lg:text-lg mx-auto relative"
  >
    <news-letter-subscription class="w-full -mt-32 mb-8" />

    <div class="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 mt-8">
      <div class="col-span-2">
        <app-header class="mb-3 md:mb-6">Shop.co</app-header>
        <p class="text-sm text-gray-600 mb-4 md:mb-8">
          We have clothes that suit your style and which you're proud to wear. From women to men.
        </p>
        <div class="flex gap-3 mt-4">
          <span
            class="flex items-center justify-center h-7 w-7 bg-white rounded-full border border-gray-400"
          >
            <app-icon name="twitter" />
          </span>
          <span
            class="flex items-center justify-center h-7 w-7 bg-black rounded-full border border-gray-400"
          >
            <app-icon name="facebook" class="fill-white" />
          </span>
          <span
            class="flex items-center justify-center h-7 w-7 bg-white rounded-full border border-gray-400"
          >
            <app-icon name="instagram" />
          </span>
          <span
            class="flex items-center justify-center h-7 w-7 bg-white rounded-full border border-gray-400"
          >
            <app-icon name="github" />
          </span>
        </div>
      </div>
      <div class="sm:col-start-1 md:col-start-3">
        <h3 class="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-widest">Company</h3>
        <ul class="flex flex-col gap-1.5 text-gray-500">
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
      </div>
      <div class="sm:col-start-2 md:col-start-4">
        <h3 class="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-widest">Help</h3>
        <ul class="flex flex-col gap-1.5 text-gray-500">
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy & Policy</li>
        </ul>
      </div>
      <div class="sm:col-start-1 md:col-start-5">
        <h3 class="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-widest">Faq</h3>
        <ul class="flex flex-col gap-1.5 text-gray-500">
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payment</li>
        </ul>
      </div>
      <div class="sm:col-start-2 md:col-start-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-widest">
          Resources
        </h3>
        <ul class="flex flex-col gap-1.5 text-gray-500">
          <li>Free eBook</li>
          <li>Development Tutorial</li>
          <li>How to - Blog</li>
          <li>Youtube Playlist</li>
        </ul>
      </div>
    </div>
    <div class="bg-gray-200 w-full h-px mt-9 mb-4"></div>
    <div class="flex gap-2 flex-col md:flex-row justify-between items-center">
      <p class="text-gray-500 text-sm text-center md:text-start">
        Shop.co © 2025-2026. All Rights Reserved
      </p>
      <div class="flex gap-3">
        <span class="bg-white rounded-lg flex items-center justify-center"
          ><app-icon name="visa-badge" class="md:w-16 md:h-10"
        /></span>
        <span class="bg-white rounded-lg flex items-center justify-center"
          ><app-icon name="mastercard-badge" class="md:w-16 md:h-10"
        /></span>
        <span class="bg-white rounded-lg flex items-center justify-center"
          ><app-icon name="paypal-badge" class="w-16 h-10"
        /></span>
        <span class="bg-white rounded-lg flex items-center justify-center"
          ><app-icon name="applepay-badge" class="md:w-16 md:h-10"
        /></span>
        <span class="bg-white rounded-lg flex items-center justify-center"
          ><app-icon name="googlepay-badge" class="md:w-16 md:h-10 px-1.5 md:px-3"
        /></span>
      </div>
    </div>
  </footer>
</template>
