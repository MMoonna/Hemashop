import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  const getMore = () => {
    guessRef.value?.loadMore()
  }
  return {
    guessRef,
    getMore,
  }
}
