import axios from 'axios'
window.axios = axios

window.axios.defaults.withCredentials = true
window.axios.defaults.withXSRFToken = true
window.axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
window.axios.interceptors.request.use(async (config) => {
  if (['post', 'put', 'patch', 'delete'].includes(config.method.toLowerCase())) {
    try {
      await window.axios.get('/sanctum/csrf-cookie')
    } catch (error) {
      console.error('Failed to set CSRF cookie:', error)
      throw error
    }
  }
  return config
})
