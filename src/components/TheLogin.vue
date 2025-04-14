<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { ErrorMessage, Field, Form } from 'vee-validate'
import * as zod from 'zod'
import FormLabel from '@/components/FormLabel.vue'
import { useAuthStore } from '@/stores/authStore'
import { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { setError, useFieldValidations } from '@/composables/useFieldValidations'
const auth = useAuthStore()
const router = useRouter()
const { email, password } = useFieldValidations()
const validationSchema = toTypedSchema(
  zod.object({
    email: email(),
    password: password(),
  }),
)

const onSubmit = async (values, { setFieldError, resetForm }) => {
  try {
    await auth.login(values)
    resetForm()
    router.push({ name: 'home' })
  } catch (e) {
    if (e instanceof AxiosError && e.response?.status === 422) {
      const validationErrors = e.response?.data?.errors
      setError(validationErrors, setFieldError)
    } else {
      console.error('An unexpected error occurred:', e)
    }
    console.log(e)
  }
}
</script>

<template>
  <app-section-wrapper>
    <div class="grid grid-cols-2 gap-2">
      <div></div>
      <div class="m-5 p-10">
        <app-header>Login</app-header>
        <Form
          v-slot="{ errors }"
          :validation-schema="validationSchema"
          @submit="onSubmit"
          class="flex flex-col gap-4 mt-5"
        >
          <div class="flex flex-col gap-1">
            <form-label name="email" required />
            <Field
              name="email"
              type="email"
              class="border p-2 rounded"
              :class="`border ${errors.email ? 'border-red-500' : 'border-gray-400'}`"
            />
            <ErrorMessage name="email" class="text-red-500 text-sm" />
          </div>

          <div class="flex flex-col gap-1">
            <form-label name="password" required />
            <Field
              name="password"
              type="password"
              class="border p-2 rounded"
              :class="`border ${errors.password ? 'border-red-500' : 'border-gray-400'}`"
            />
            <ErrorMessage name="password" class="text-red-500 text-sm" />
          </div>
          <app-dark-button :isLoading="auth.states?.login?.loading">Login</app-dark-button>
        </Form>
      </div>
    </div>
  </app-section-wrapper>
</template>
