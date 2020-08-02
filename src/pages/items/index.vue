<template lang="html">
  <view class="items-container">
    <view class="header-container">
      <view class="left" @click="toPage('/pages/index/index')"><text class="iconfont icon-back"></text></view>
      <view class="center">游园项目</view>
      <view class="right"></view>
    </view>
    <view class="main-container">
      <view class="image-container">    	
        <img class="images" src="~@/static/items_slices/rowboats.jpg">
        <view class="content">
          <view>
            <span class="fontstyle">游船 </span>
            <span class="fontstyle2">¥</span>
            <span class="fontstyle3">70</span>
            <span class="fontstyle2">~¥</span>
            <span class="fontstyle3">150</span>
          </view>
          <view class="action">
            <button size="mini">预约</button>
          </view>
        </view>
      </view>
      <view class="image-container">  
        <img class="images"src="~@/static/items_slices/train.jpg">
        <view class="content">
          <view>
            <span class="fontstyle">小火车 </span>
            <span class="fontstyle2">¥</span>
            <span class="fontstyle3">39</span>
            <span class="fontstyle2">~¥</span>
            <span class="fontstyle3">75</span>
          </view>
          <view class="action">
            <button size="mini">预约</button>
          </view>
        </view>
      </view>

      <view class="image-container">  
        <img class="images"src="~@/static/items_slices/sightseeing_car.jpg">
        <view class="content">
          <view>
            <span class="fontstyle">观光车</span>
            <span class="fontstyle2">¥</span>
            <span class="fontstyle3">9.9</span>
            <span class="fontstyle2">~¥</span>
            <span class="fontstyle3">15</span>
          </view>
          <view class="action">
            <button size="mini">预约</button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["banner-list", "strategy-list", "activity-list"],
  data() {
    return {};
  },
  onShow() {},
  methods: {
    toPage(path: string) {
      uni.navigateTo({
        url: path,
      });
    },
  },
});
</script>

<style>
.items-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.items-container .title {
  font-size: 20px;
  border-left: 5px solid #006b65;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-top: 15px;
  padding-left: 15px;
}

.items-container .image-container {
  margin-left: 15px;
  margin-right: 15px;
}
.image-container {
  margin-bottom: 15px;
}
.image-container .content {
  display: flex;
}
.image-container .content .action button {
  padding: 0px 15px;
  margin-left: 5px;
}
.image-container .images {
  flex-grow: 1;
  width: 100%;
  height: 180px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.fontstyle {
  font-family: PingFangSC-Medium;
  font-size: 15px;
}
.fontstyle2 {
  font-family: Medium;
  font-size: 10px;
}

.fontstyle3 {
  font-family: PingFangSC-Medium;
  color: #ff6c00;
  font-size: 15px;
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
</style>