import { useAsyncStates } from '@/composables/useAsyncState'
import axiosInstance from '@/lib/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter()
    const userData = ref(null)
    const isAuthenticated = ref(false)
    const { states, execute } = useAsyncStates(['login', 'logout', 'register', 'fetchUserData'])
    const setUserData = (data) => {
      userData.value = data
    }

    const cleanState = () => {
      userData.value = null
      isAuthenticated.value = false
    }

    const register = async (data) => {
      await execute('register', async () => {
        await axiosInstance.post('/api/register', data)
        isAuthenticated.value = true
        await fetchUserData()
      })
    }
    const login = async (data) => {
      return execute('login', async () => {
        await axiosInstance.post('/api/login', data)
        isAuthenticated.value = true
        await fetchUserData()
      })
    }
    const logout = async () => {
      if (!isAuthenticated.value) return
      return execute('logout', async () => {
        await axiosInstance.post('/api/logout')
        isAuthenticated.value = false
        userData.value = null
        router.push({ name: 'login' })
      })
    }

    const fetchUserData = async () => {
      if (!isAuthenticated.value) return
      const response = await axiosInstance.get('/api/user')
      if (response.status === 200) {
        setUserData(response.data)
      }
    }
    return {
      states,
      register,
      userData,
      isAuthenticated,
      login,
      logout,
      cleanState,
      fetchUserData,
    }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['userData', 'isAuthenticated'],
    },
  },
)
