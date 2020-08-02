<template>
  <view class="comment-container">
    <view class="header-container">
      <view class="left" @click="toBack"><text class="iconfont icon-back"></text></view>
      <view class="center">评价</view>
      <view class="right"></view>
    </view>
    <view class="main-container">
      <view class="comment-list-container">
        <view class="comment-item-container" @click="toDetailPage">
          <!-- <view class="state-bar"></view> -->
          <view class="content">
            <view class="title">周舟船</view>
            <view class="message">而那静谧的山野,却千年万年的守候着。一样的山,一样的水,一 样的春夏秋冬,一样的风景,重重迭迭似曾...</view>
            <view class="time">2020.07.12</view>
          </view>
        </view>
        <view class="comment-item-container">
          <!-- <view class="state-bar"></view> -->
          <view class="content">
            <view class="title">周舟船</view>
            <view class="message">而那静谧的山野,却千年万年的守候着。一样的山,一样的水,一 样的春夏秋冬,一样的风景,重重迭迭似曾...</view>
            <view class="time">2020.07.12</view>
          </view>
        </view>
        <view class="comment-item-container">
          <!-- <view class="state-bar"></view> -->
          <view class="content">
            <view class="title">周舟船</view>
            <view class="message">而那静谧的山野,却千年万年的守候着。一样的山,一样的水,一 样的春夏秋冬,一样的风景,重重迭迭似曾...</view>
            <view class="time">2020.07.12</view>
          </view>
        </view>
      </view>
      <view class="form-container">
        <view class="form-item-label">提交评价</view>
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
.comment-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.form-container {
  height: 280px;
  padding: 15px;
  flex-shrink: 0;
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

.comment-list-container {
  flex-grow: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.comment-item-container {
  height: 150px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 15px #ccc;
  overflow: hidden;
}

.comment-item-container .state-bar {
  width: 15px;
  min-height: 100px;
  background-color: #aef9c5;
  flex-shrink: 0;
}

.comment-item-container .content {
  flex-grow: 1;
  padding: 15px;
}

.comment-item-container .content .title {
  color: #333;
  font-weight: bold;
}

.comment-item-container .content .message {
  font-size: 16px;
  margin-top: 5px;
}

.comment-item-container .content .time {
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  text-align: right;
}
</style>