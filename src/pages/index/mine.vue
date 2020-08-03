<template>
  <view class="mine-container">
    <view class="header-container">
      <view class="header">
        <view class="left"></view>
        <view class="center">我的</view>
        <view class="right"></view>
      </view>
      <view class="mineinfo">
        <img src="~@/static/index_slices/banner@3x.png">
        <view class="detail">
          <text>富春山居</text>
          <view>1567800998</view>
        </view>
      </view>
    </view>
    <view class="main-container">
      <view class="menu-container">
        <view class="menu-item" @click="toMobileCallPage">
          <img class="icon-left" src="~@/static/mine_slices/icon_01@3x.png" alt="">
          <view class="label">紧急报警</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="menu-item" @click="toCommentPage">
          <img class="icon-left" src="~@/static/mine_slices/icon_02@3x.png" alt="">
          <view class="label">我的评价</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="menu-item" @click="toSharePage">
          <img class="icon-left" src="~@/static/mine_slices/icon_03@3x.png" alt="">
          <view class="label">分享</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="dividing-line"></view>
        <view class="menu-item" @click="toHelpPage">
          <img class="icon-left" src="~@/static/mine_slices/icon_09.png" alt="" style="width: 18px; height: 18px; margin-right: 5px;">
          <view class="label">帮助中心</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="menu-item" @click="toFeedbackPage">
          <img class="icon-left" src="~@/static/mine_slices/icon_04@3x.png" alt="">
          <view class="label">反馈</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="menu-item" @click="toAboutPage">
          <img class="icon-left" src="~@/static/mine_slices/icon_06.png" alt="">
          <view class="label">关于</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="menu-item">
          <img class="icon-left" src="~@/static/mine_slices/icon_07.png" alt="">
          <view class="label">清除缓存</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="menu-item" @click="toDocPage">
          <img class="icon-left" src="~@/static/mine_slices/icon_08.png" alt="">
          <view class="label">用户协议</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
        <view class="menu-item">
          <img class="icon-left" src="~@/static/mine_slices/icon_05@3x.png" alt="">
          <view class="label">系统设置</view>
          <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toAboutPage() {
      uni.navigateTo({
        url: "/pages/other/about"
      });
    },
    toHelpPage() {
      uni.navigateTo({
        url: "/pages/other/help"
      });
    },
    toFeedbackPage() {
      uni.navigateTo({
        url: "/pages/other/feedback"
      });
    },
    toCommentPage() {
      uni.navigateTo({
        url: "/pages/other/comment"
      });
    },
    toDocPage() {
      uni.navigateTo({
        url: "/pages/other/doc"
      });
    },
    toMobileCallPage() {
      location.href = "tel:17621958573";
    },
    toSharePage() {
      uni.navigateTo({
        url: "/pages/other/share"
      });
    }
  }
})
</script>

<style scoped>
.mine-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header-container {
  background: url("~@/static/mine_slices/bg@3x.png") no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.header-container .header {
  color: #fff;
  height: 24px;
  padding: 15px;
  flex-shrink: 0;
  display: flex;
}

.header-container .header .left,
.header-container .header .right {
  font-size: 16px;
  width: 100px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container .header .center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container .mineinfo {
  display: flex;
  padding: 15px;
  padding-bottom: 48px;
}

.header-container .mineinfo img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}

.header-container .mineinfo .detail {
  color: #FFFFFF;
  font-size: 16px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-container {
  flex-grow: 1;
  overflow: auto;
}

.menu-container {
  display: flex;
  flex-direction: column;
  padding-top: 15px
}

.menu-container .menu-item {
  padding: 15px;
  display: flex;
  align-items: center;
}

.menu-container .menu-item .icon-left {
  width: 25px;
  height: 25px;
  flex-shrink: 0;
}

.menu-container .menu-item .label {
  font-size: 14px;
  flex-grow: 1;
}

.menu-container .menu-item .icon-right {
  width: 7px;
  height: 14px;
  flex-shrink: 0;
}

.dividing-line {
  height: 8px;
  background-color: #f4f7f7;
}
</style>