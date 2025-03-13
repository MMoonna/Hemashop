<template name="skeleton">
  <view class="sk-container">
    <scroll-view :refresher-enabled="true" :scroll-y="true">
      <view tag="components/Xtxswiper" class="scroll-view scroll-view">
        <view class="carousel Xtxswiper--carousel">
          <swiper
            :circular="true"
            :interval="3000"
            :current="0"
            :autoplay="false"
            style="height: 160px; z-index: 1"
          >
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator Xtxswiper--navigator" hover-class="none">
                <image class="image Xtxswiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator Xtxswiper--indicator">
            <text class="dot Xtxswiper--dot active Xtxswiper--active"></text>
            <text class="dot Xtxswiper--dot"></text>
            <text class="dot Xtxswiper--dot"></text>
            <text class="dot Xtxswiper--dot"></text>
            <text class="dot Xtxswiper--dot"></text>
          </view>
        </view>
      </view>
      <view tag="pages/index/components/Category">
        <view class="category Category--category">
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-590 sk-text">居家</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-781 sk-text">锦鲤</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-814 sk-text">服饰</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-294 sk-text">母婴</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-542 sk-text">个护</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-139 sk-text">严选</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-463 sk-text">数码</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-86 sk-text">运动</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-666 sk-text">杂项</text>
          </navigator>
          <navigator class="category-item Category--category-item" hover-class="none">
            <image class="icon Category--icon sk-image"></image>
            <text class="text Category--text sk-transparent sk-text-14-2857-205 sk-text">品牌</text>
          </navigator>
        </view>
      </view>
      <view tag="pages/index/components/hot">
        <view class="panel hot--panel hot hot--hot">
          <view class="item hot--item">
            <view class="title hot--title">
              <text class="title-text hot--title-text sk-transparent sk-text-14-2857-782 sk-text"
                >特惠推荐</text
              >
              <text class="title-desc hot--title-desc sk-transparent sk-text-14-2857-281 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator class="cards hot--cards" hover-class="none">
              <image class="image hot--image sk-image" mode="aspectFit"></image>
              <image class="image hot--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item hot--item">
            <view class="title hot--title">
              <text class="title-text hot--title-text sk-transparent sk-text-14-2857-883 sk-text"
                >爆款推荐</text
              >
              <text class="title-desc hot--title-desc sk-transparent sk-text-14-2857-778 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator class="cards hot--cards" hover-class="none">
              <image class="image hot--image sk-image" mode="aspectFit"></image>
              <image class="image hot--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item hot--item">
            <view class="title hot--title">
              <text class="title-text hot--title-text sk-transparent sk-text-14-2857-150 sk-text"
                >一站买全</text
              >
              <text class="title-desc hot--title-desc sk-transparent sk-text-14-2857-182 sk-text"
                >精心优选</text
              >
            </view>
            <navigator class="cards hot--cards" hover-class="none">
              <image class="image hot--image sk-image" mode="aspectFit"></image>
              <image class="image hot--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item hot--item">
            <view class="title hot--title">
              <text class="title-text hot--title-text sk-transparent sk-text-14-2857-788 sk-text"
                >新鲜好物</text
              >
              <text class="title-desc hot--title-desc sk-transparent sk-text-14-2857-7 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator class="cards hot--cards" hover-class="none">
              <image class="image hot--image sk-image" mode="aspectFit"></image>
              <image class="image hot--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
      <view tag="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-73 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-810 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-799 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-590 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-781 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-814 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-294 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-542 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-139 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-463 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-86 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-666 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-205 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-782 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-281 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-883 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-778 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-150 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-182 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-788 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-7 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-73 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
