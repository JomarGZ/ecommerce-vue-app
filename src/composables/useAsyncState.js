import { reactive } from 'vue'

export function useAsyncStates(operations) {
  const states = reactive({})

  operations.forEach((op) => {
    states[op] = {
      loading: false,
      error: null,
    }
  })

  const execute = async (operation, asyncFn) => {
    states[operation].loading = true
    states[operation].error = null

    try {
      const result = await asyncFn()
      return result
    } catch (err) {
      states[operation].error = err

      throw err
    } finally {
      states[operation].loading = false
    }
  }

  return {
    states,
    execute,
  }
}
