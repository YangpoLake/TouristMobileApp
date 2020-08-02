<template>
  <view class="callus-container">
    <view class="header-container">
      <view class="left" @click="toBack"><text class="iconfont icon-back"></text></view>
      <view class="center">联系我们</view>
      <view class="right"></view>
    </view>
    <view class="mine-container">
      <view class="menu-container">
        <view class="menu">
          <view class="item">
            <view class="left">地址</view>
            <view class="right">浙江省杭州市富阳区富阳街道西环北路</view>
          </view>
          <view class="item">
            <view class="left">电话</view>
            <view class="right">15578900990</view>
          </view>
          <view class="item">
            <view class="left">联系人</view>
            <view class="right">富春山居</view>
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
    toBack() {
      uni.navigateBack({ delta: 1 })
    }
  }
})
</script>
<style scoped>
.callus-container {
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
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


.menu {
  display: flex;
  flex-direction: column;
}

.menu .item {
  padding: 20px 15px;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
}

.menu .item .left {
  color: #666666;
  font-size: 16px;
}

.menu .item .right {
  color: #333333;
  font-size: 16px;
}
</style>