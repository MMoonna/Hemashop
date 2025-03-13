/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import Xtxswiper from '../components/Xtxswiper.vue'
import XtxGuess from '../components/XtxGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    Xtxswiper: typeof Xtxswiper
    XtxGuess: typeof XtxGuess
  }
}

// 组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
