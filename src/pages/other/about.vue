<template>
  <view class="about-container">
    <view class="header-container">
      <view class="left" @click="toBack"><text class="iconfont icon-back"></text></view>
      <view class="center">关于</view>
      <view class="right"></view>
    </view>
    <view class="main-container">
      <view class="topcolor-container"></view>
      <view class="top-img-container">
        <img src="~@/static/mine_slices/img@3x.png" alt="">
      </view>
      <view class="menu-container">
        <view class="menu">
          <view class="item">
            <view class="left">了解我们</view>
            <view class="right">
              <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
            </view>
          </view>
          <view class="item" @click="toCallUsPage">
            <view class="left">联系方式</view>
            <view class="right">
              <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
            </view>
          </view>
          <view class="item" @click="toDocPage">
            <view class="left">服务条款</view>
            <view class="right">
              <img class="icon-right" src="~@/static/mine_slices/icon_right@3x.png" alt="">
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toCallUsPage() {
      uni.navigateTo({
        url: "/pages/other/callus"
      });
    },
    toBack() {
      uni.navigateBack({ delta: 1 })
    },
    toDocPage() {
      uni.navigateTo({
        url: "/pages/other/doc"
      });
    }
  }
})
</script>
<style scoped>
.about-container {
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
}

.header-container {
  color: #fff;
  height: 24px;
  padding: 15px;
  flex-shrink: 0;
  display: flex;
  background-color: #006b65;
}

.header-container .left,
.header-container .right {
  font-size: 16px;
  width: 100px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.header-container .center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  flex-grow: 1;
  overflow: auto;
  position: relative;
}

.topcolor-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  overflow: hidden;
}

.topcolor-container::after {
  content: "";
  width: 140%;
  height: 150px;
  position: absolute;
  left: -20%;
  top: 0;
  z-index: 1;
  border-radius: 0 0 50% 50%;
  background-color: #006b65;
}

.top-img-container {
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.top-img-container img {
  width: 80px;
  z-index: 2;
}

.menu-container {
  padding: 15px 15px 20px 15px;
  z-index: 2;
}

.menu {
  padding: 15px 0px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0px 8px 10px rgba(100, 100, 100, .4);
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.menu .item {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
}

.menu .item .left {
  color: #333333;
  font-size: 16px;
}

.menu .item .right img {
  width: 7px;
  height: 14px;
}
</style>