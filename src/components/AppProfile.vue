<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './icons/AppIcon.vue'
const isOpen = ref(false)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
const dropdownBtn = ref(null)

const handleClickOutSide = (event) => {
  const dropdownElement = dropdownBtn.value
  if (dropdownElement && !dropdownElement.contains(event.target)) {
    isOpen.value = false
  }
}
onMounted(() => document.addEventListener('click', handleClickOutSide))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutSide))
</script>
<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center focus:outline-none cursor-pointer"
      ref="dropdownBtn"
    >
      <app-icon name="user-circle" class="w-6 h-6 stroke-2" />
    </button>

    <!-- Dropdown menu -->
    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-black focus:outline-none z-10"
    >
      <div class="py-1">
        <router-link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Profile
        </router-link>
        <router-link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Orders
        </router-link>
        <button class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Sign out
        </button>
      </div>
    </div>
  </div>
</template>
