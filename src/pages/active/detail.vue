<template>
  <view class="detail-container">
    <view class="header-container">
      <view class="left"><text class="iconfont icon-back"></text></view>
      <view class="center">活动详情</view>
      <view class="right">
        <img src="~@/static/active_detail_slices/fenxiang@3x.png" alt="">
      </view>
    </view>
    <view class="main-container">
      <view class="detail-container">
        <view class="title">夏季避暑，清凉一夏</view>
        <view class="time">
          <img src="~@/static/active_detail_slices/time@3x.png" alt="">
          <text>2020.07.12</text>
        </view>
        <view class="content">
          六朝古都南京，在这个古老的城市，既有自然的秀美山水之景，又有历史文物之雅，可逛可玩的去处有很多，每年也都会有很多游
        </view>
      </view>
      <view class="previous-btn">上一章</view>
      <view class="next-btn">下一章</view>
    </view>
  </view>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header-container {
  color: #333333;
  height: 24px;
  padding: 15px;
  flex-shrink: 0;
  display: flex;
}

.header-container .left,
.header-container .right {
  font-size: 16px;
  width: 100px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container .right img {
  width: 16px;
  height: 16px;
}

.header-container .center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  flex-grow: 1;
  width: 100%;
  position: relative;
}

.detail-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
}

.detail-container .title {
  color: #333333;
  font-size: 16px;
}

.detail-container .time {
  color: #333333;
  display: flex;
}

.detail-container .time img {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.detail-container .time text {
  font-size: 12px;
  flex-grow: 1;
}

.previous-btn {
  position: absolute;
  left: 0px;
  bottom: 0px;
}

.next-btn {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
</style>