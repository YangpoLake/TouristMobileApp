<template>
  <view class="home-container">
    <view class="header-container">
      <view class="left"></view>
      <view class="center">首页</view>
      <view class="right">晴/30℃</view>
    </view>
    <view class="main-container">
      <view class="topcolor-container"></view>
      <view class="swiper-container">
        <swiper
          class="swiper"
          :indicator-dots="true"
          :autoplay="true"
          :interval="2000"
          :duration="500"
        >
          <swiper-item v-for="banner in bannerList" :key="banner.id">
            <view class="swiper-item">
              <img :src="banner.images_url" alt />
            </view>
          </swiper-item>
        </swiper>
      </view>
      <view class="nav-container">
        <view class="nav">
          <view class="nav-item" @click="toPage('/pages/guide/index')">
            <img src="~@/static/index_slices/icon_01@3x.png" alt />
            <text>到达指引</text>
          </view>
          <view class="nav-item" @click="toPage('/pages/scenic/index')"> 
            <img src="~@/static/index_slices/icon_02@3x.png" alt />
            <text>景点概括</text>
          </view>
          <view class="nav-item">
            <img src="~@/static/index_slices/icon_03@3x.png" alt />
            <text>周边</text>
          </view>
          <view class="nav-item">
            <img src="~@/static/index_slices/icon_04@3x.png" alt />
            <text>游园项目</text>
          </view>
        </view>
      </view>
      <view class="strategy-container">
        <view class="title">
          <text>旅游攻略</text>
        </view>
        <view class="content">
          <view v-for="strategy in strategyList" :key="strategy.id" class="item">
            <img :src="strategy.image_url" alt />
            <text class="title">{{ strategy.title }}</text>
            <text class="message">{{ strategy.info }}</text>
          </view>
        </view>
      </view>
      <view class="active-container">
        <view class="title">
          <text>游园活动</text>
        </view>
        <view class="content">
          <view v-for="activity in activityList" :key="activity.id" class="item" @click="toPage('/pages/active/index?id=' + activity.id)">
            <img :src="activity.image_url" alt />
            <view class="message">
              <text class="title">{{ activity.title }}</text>
              <text class="detail">{{ activity.info }}</text>
            </view>
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
    return {
    };
  },
  onShow() {
  },
  methods: {
    toPage(path: string) {
      uni.navigateTo({
        url: path
      });
    }
  }
});
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.topcolor-container {
  width: 100%;
  height: 120px;
  position: absolute;
  top: 0;
  z-index: -1;
  overflow: hidden;
}

.topcolor-container::after {
  content: "";
  width: 140%;
  height: 120px;
  position: absolute;
  left: -20%;
  top: 0;
  z-index: -1;
  border-radius: 0 0 50% 50%;
  background: #006b65;
}

.header-container {
  color: #fff;
  height: 24px;
  padding: 15px;
  flex-shrink: 0;
  display: flex;
  background: #006b65;
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

.swiper-container {
  padding: 15px;
  padding-top: 0px;
}

.swiper-container .swiper {
  height: 164px;
  border-radius: 5px;
  overflow: hidden;
}

.swiper-container .swiper .swiper-item img {
  width: 100%;
}

.nav-container {
  padding: 15px;
  padding-top: 0px;
}

.nav-container .nav {
  padding: 15px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 7px 16px 5px rgba(212, 220, 220, 0.52);
  border-radius: 10px;
}

.nav-container .nav .nav-item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-container .nav .nav-item img {
  width: 40px;
}

.nav-container .nav .nav-item text {
  color: #333333;
  font-size: 14px;
  margin-top: 5px;
}

.strategy-container,
.active-container {
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
}

.strategy-container .title,
.active-container .title {
  font-size: 16px;
  border-left: 5px solid #006b65;
  margin-bottom: 15px;
  padding-left: 5px;
}

.strategy-container .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.strategy-container .content .item {
  width: 30%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.strategy-container .content .item img {
  width: 100%;
}

.strategy-container .content .item .title {
  color: #333333;
  font-size: 14px;
  font-weight: bolder;
  padding: unset;
  margin: unset;
  border: unset;
}

.strategy-container .content .item .message {
  color: #666666;
  font-size: 8px;
}

.active-container .content {
  display: flex;
  flex-direction: column;
}

.active-container .content .item {
  margin-bottom: 15px;
  display: flex;
}

.active-container .content .item img {
  width: 140px;
  margin-right: 15px;
  flex-shrink: 0;
}

.active-container .content .item .message {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.active-container .content .item .message .title {
  color: #333333;
  font-size: 16px;
  font-weight: bolder;
  padding: unset;
  margin: unset;
  border: unset;
}

.active-container .content .item .message .detail {
  color: #666666;
  font-size: 12px;
  margin-top: 5px;
}
</style>
