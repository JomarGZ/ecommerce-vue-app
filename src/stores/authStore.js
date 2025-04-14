import { useAsyncStates } from '@/composables/useAsyncState'
import axiosInstance from '@/lib/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter()
    const getInitialState = () => ({
      user: {},
      roles: [],
      permissions: [],
    })
    const userData = ref(getInitialState())

    const isAuthenticated = ref(false)
    const { states, execute } = useAsyncStates(['login', 'logout', 'register', 'fetchUserData'])
    const setUserData = (data) => {
      console.log('setUserData', data.data)
      userData.value = {
        user: data.user || {},
        roles: data.roles || [],
        permissions: data.permissions || [],
      }
      isAuthenticated.value = true
    }
    const cleanState = () => {
      userData.value = getInitialState
      isAuthenticated.value = false
    }

    const register = async (data) => {
      await execute('register', async () => {
        await axiosInstance.get('/sanctum/csrf-cookie')
        await axiosInstance.post('/api/register', data)
        await fetchUserData()
      })
    }
    const login = async (data) => {
      return execute('login', async () => {
        await axiosInstance.get('/sanctum/csrf-cookie')
        await axiosInstance.post('/api/login', data)
        await fetchUserData()
      })
    }
    const logout = async () => {
      if (!isAuthenticated.value) return
      return execute('logout', async () => {
        await axiosInstance.get('/sanctum/csrf-cookie')
        await axiosInstance.post('/api/logout')
        cleanState()
        router.push({ name: 'login' })
      })
    }

    const fetchUserData = async () => {
      const response = await axiosInstance.get('/api/user')
      if (response.status === 200) {
        setUserData(response.data?.data)
      }
    }

    const hasPermission = (permission) => {
      if (!isAuthenticated.value) return false

      return userData.value?.permissions?.includes(permission)
    }
    const hasRole = (role) => {
      if (!isAuthenticated.value) return false

      return userData.value?.roles?.includes(role)
    }
    const hasAnyPermission = (permissions) => {
      if (!isAuthenticated.value) return false

      return permissions.some((permission) => hasPermission(permission))
    }
    return {
      states,
      register,
      hasRole,
      hasPermission,
      hasAnyPermission,
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
