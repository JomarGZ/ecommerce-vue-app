import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import { useAuthStore } from '@/stores/authStore'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import Error404 from '@/views/errors/Error404.vue'
import ProductIndexView from '@/views/products/IndexView.vue'

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
          meta: { requiresAuth: false },
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
          meta: { requiresAuth: false },
        },
        {
          path: 'login',
          name: 'login',
          component: LoginView,
          meta: { requiresAuth: false },
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
          name: 'errors.401',
          component: Error404,
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
