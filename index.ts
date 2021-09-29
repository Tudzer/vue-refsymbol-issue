import { ref, readonly } from 'vue'

export function useCounter () {
  const count = ref(0)

  function increment () {
    count.value++
  }

  return {
    count: readonly(count),
    increment
  }
}