import { useSetFieldError } from 'vee-validate'
import * as zod from 'zod'
export const useFieldValidations = () => {
  const name = () => zod.string().min(1, 'Name is required')

  const email = () => zod.string().min(1, 'Email is required').email('Must be a valid email')
  const password = () =>
    zod.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters')
  return { name, email, password }
}
export const setError = (validationErrors, setFieldError) => {
  if (!validationErrors || typeof validationErrors !== 'object') {
    console.warn('Invalid validation errors format')
    return
  }
  Object.entries(validationErrors).forEach(([field, messages]) => {
    setFieldError(field, messages[0])
  })
}
