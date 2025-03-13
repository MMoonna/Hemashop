<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import bar from './components/bar.vue'
import Category from './components/Category.vue'
import hot from './components/hot.vue'
import skeleton from './components/skeleton.vue'
import { getHomeBannerAPI, gethomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { HomeBanner, HomeCategory, HomeHot } from '@/types/home'
// import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/component'
const bannerList = ref<HomeBanner[]>([])
const categoryList = ref<HomeCategory[]>([])
const hotList = ref<HomeHot[]>([])
const guessRef = ref<XtxGuessInstance>()
const triggered = ref(false)

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const gethomeCategoryData = async () => {
  const res = await gethomeCategoryAPI()
  categoryList.value = res.result
}
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
const onScrolltolower = () => {
  guessRef.value?.loadMore()
}
const refreshData = async () => {
  triggered.value = true
  guessRef.value?.restData()
  await Promise.all([
    getHomeBannerData(),
    gethomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.loadMore(),
  ])
  triggered.value = false
}
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), gethomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>
<template>
  <bar />
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    refresher-enabled
    @refresherrefresh="refreshData"
    :refresher-triggered="triggered"
  >
    <skeleton v-if="isLoading" />
    <template v-else>
      <Xtxswiper :list="bannerList" />
      <Category :list="categoryList" />
      <hot :list="hotList" />
      <XtxGuess ref="guessRef"
    /></template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
