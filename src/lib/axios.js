import router from '@/router'
import { useAuthStore } from '@/stores/authStore'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  withCredentials: true,
  withXSRFToken: true,
})

// axiosInstance.interceptors.request.use(async (config) => {
//   if (['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase())) {
//     try {
//       await axiosInstance.get('/sanctum/csrf-cookie')
//     } catch (error) {
//       console.error('CSRF Cookie Error:', error)
//       throw error
//     }
//   }
//   return config
// })

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const auth = useAuthStore()
    switch (error.response?.status) {
      case 401:
        auth.cleanState()
        router.push({ name: 'login' })
        break
      case 419:
        auth.cleanState()
        router.push({ name: 'login' })
        break
      case 500:
        auth.cleanState()
        router.push({ name: 'errors.500' })
        break
      case 404:
        router.push({ name: 'errors.404' })
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
