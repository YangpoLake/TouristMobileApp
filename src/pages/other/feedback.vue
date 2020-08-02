<template>
  <view class="feedback-container">
    <view class="header-container">
      <view class="left" @click="toBack"><text class="iconfont icon-back"></text></view>
      <view class="center">反馈</view>
      <view class="right"></view>
    </view>
    <view class="main-container">
      <view class="form-container">
        <view class="form-item-label">反馈建议</view>
        <view class="form-item-content">
          <textarea cols="30" rows="20"></textarea>
        </view>
        <view class="form-action-content">
          <button class="submit-btn">提交</button>
        </view>
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
<style scoped>
.feedback-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header-container {
  color: #333333;
  height: 24px;
  padding: 15px;
  flex-shrink: 0;
  display: flex;
  background-color: #FFFFFF;
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
}

.form-container {
  padding: 15px;
}

.form-container .form-item-label {
  font-size: 16px;
  color: #333333;
  margin-bottom: 5px;
}

.form-container .form-item-content {
  display: flex;
}

.form-container textarea {
  flex-grow: 1;
  border-radius: 8px;
  padding: 5px;
  background-color: #f4f7f7;
}

.form-action-content {
  margin-top: 15px;
}

.submit-btn {
  color: #FFF;
  background-color: #006b65;
}
</style>