<template>
  <view class="share-container">
    <view class="header-container">
      <view class="left" @click="toBack"><text class="iconfont icon-back"></text></view>
      <view class="center">分享</view>
      <view class="right"></view>
    </view>
    <view class="main-container">
      <view class="share-bg">
        <view class="share-btn"></view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toBack() {
      uni.navigateBack({ delta: 1 })
    }
  }
})
</script>
<style>
.share-container {
  width: 100vw;
  height: 100vh;
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

.share-bg {
  width: 100%;
  height: 100%;
  background: url("~@/static/other_slices/share-bg.png") no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.share-btn {
  width: 60%;
  height: 30%;
  margin-bottom: 25%;
  background: url("~@/static/other_slices/share-btn.png") no-repeat center;
  background-size: contain;
}
</style>