<script setup lang="ts">
import { getProfileAPI, updateProfileAPI } from '@/services/profile'
import { useMemberStore } from '@/stores'
import type { Gender, ProfileInfo } from '@/types/profile'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const profileList = ref<ProfileInfo>({} as ProfileInfo)
const memberInfo = useMemberStore()
const getProfile = async () => {
  const res = await getProfileAPI()
  profileList.value = res.result
  console.log(res.result)
}
// 修改头像
const uploadAvatar = () => {
  // 调用拍照/选择图片
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: (res) => {
      const { tempFilePath } = res.tempFiles[0]
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: (success) => {
          if (success.statusCode === 200) {
            const avatar = JSON.parse(success.data).result.avatar
            profileList.value!.avatar = avatar
            uni.showToast({
              title: '头像修改成功',
              icon: 'success',
            })
          } else {
            uni.showToast({
              title: '头像修改失败',
              icon: 'error',
            })
          }
        },
      })
    },
  })
}
const genderChange: UniHelper.RadioGroupOnChange = (el) => {
  profileList.value.gender = el.detail.value as Gender
}
const birthdayChange: UniHelper.DatePickerOnChange = (el) => {
  profileList.value.birthday = el.detail.value
}
let fullLocationCode: [string, string, string] = ['', '', '']
const cityChange: UniHelper.RegionPickerOnChange = (el) => {
  profileList.value.fullLocation = el.detail.value.join('')
  fullLocationCode = el.detail.code!
}
const onSubmit = async () => {
  const { nickname, gender, birthday, profession } = profileList.value
  const res = await updateProfileAPI({
    nickname,
    gender,
    birthday,
    profession,
    provinceCode: fullLocationCode[0],
    cityCode: fullLocationCode[1],
    countryCode: fullLocationCode[2],
  })
  memberInfo.profile!.nickname = res.result.nickname
  uni.showToast({ icon: 'success', title: '保存成功' })
  setTimeout(() => {
    uni.navigateBack()
  }, 400)
}
onLoad(() => {
  getProfile()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content">
        <image class="image" :src="profileList?.avatar" mode="aspectFill" @tap="uploadAvatar" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profileList?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            class="input"
            type="text"
            placeholder="请输入昵称"
            v-model="profileList.nickname"
          />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="genderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profileList?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profileList?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            :start="profileList?.birthday"
            :end="new Date()"
            value="2000-01-01"
            @change="birthdayChange"
          >
            <view v-if="profileList?.birthday">{{ profileList?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            mode="region"
            :value="profileList?.fullLocation?.split(' ')"
            @change="cityChange"
          >
            <view v-if="profileList?.fullLocation">{{ profileList.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input
            class="input"
            type="text"
            placeholder="请填写职业"
            :value="profileList?.profession"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
