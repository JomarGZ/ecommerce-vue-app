<script setup>
import { useAuthStore } from '@/stores/authStore'
import { onMounted } from 'vue'

const auth = useAuthStore()
onMounted(() => auth.fetchUserData())
</script>
<template>
  <h2>Product page</h2>
</template>
