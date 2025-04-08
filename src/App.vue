<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import AppAnnouncement from './components/AppAnnouncement.vue'
import AppIcon from './components/icons/AppIcon.vue'
import AppProfile from './components/AppProfile.vue'
import AppSearchBar from './components/AppSearchBar.vue'
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

  <!-- Sidebar -->
  <div
    class="fixed top-0 md:hidden block left-0 h-full w-full bg-white z-50 transform transition-transform ease-in-out duration-300 shadow-lg"
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex justify-between items-center p-4 border-b">
      <app-search-bar class="flex" />
      <button @click="closeSidebar">
        <app-icon name="x-mark" class="w-6 h-6 stroke-2" />
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

  <app-section-wrapper class="md:py-6">
    <div class="flex gap-4 items-center">
      <button class="inline-block lg:hidden" @click="toggleSidebar">
        <app-icon name="bars-3" class="stroke-2" />
      </button>
      <h2 class="uppercase xl:text-4xl lg:text-3xl text-2xl font-bold font-integral">Shop.co</h2>
    </div>
    <ul class="gap-4 text-sm md:text-lg lg:text-xl text-gray-800 hidden lg:flex">
      <li><router-link to="#">On Sale</router-link></li>
      <li><router-link to="#">New Arrivals</router-link></li>
      <li><router-link to="#">Brands</router-link></li>
    </ul>
    <div class="flex gap-3 items-center">
      <app-search-bar class="hidden sm:flex items-center w-xs md:w-sm xl:w-xl" />
      <router-link to="#">
        <app-icon name="shopping-cart" class="w-6 h-6 stroke-2" />
      </router-link>
      <app-profile />
    </div>
  </app-section-wrapper>
  <RouterView />
</template>
