import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import { useAuthStore } from '@/stores/authStore'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import Error404 from '@/views/errors/Error404.vue'
import ProductIndexView from '@/views/products/IndexView.vue'
import Error500Vue from '@/views/errors/Error500.vue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
          meta: { requiresGuest: true },
        },
        {
          path: 'login',
          name: 'login',
          component: LoginView,
          meta: { requiresGuest: true },
        },
      ],
    },
    {
      path: '/products',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'products.index',
          component: ProductIndexView,
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: '/error-pages',
      component: BlankLayout,
      children: [
        {
          path: '404',
          name: 'errors.404',
          component: Error404,
          meta: { requiresAuth: false },
        },
        {
          path: '500',
          name: 'errors.500',
          component: Error500Vue,
          meta: { requiresAuth: false },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.isAuthenticated) {
    next({ name: 'login' })
  } else if (to.matched.some((record) => record.meta.requiresGuest) && auth.isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
})
export default router
