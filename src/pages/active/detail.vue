<template>
  <view class="detail-container">
    <view class="header-container">
      <view class="left" @click="toBack"><text class="iconfont icon-back"></text></view>
      <view class="center">活动详情</view>
      <view class="right">
        <img src="~@/static/active_detail_slices/fenxiang@3x.png" alt="">
      </view>
    </view>
    <view class="main-container">
      <view class="content-container">
        <view class="title">富阳人心心念念的阳陂湖回来了 千年古湿地即将重现</view>
        <view class="time">
          <img src="~@/static/active_detail_slices/time@3x.png" alt="">
          <text>2019-09-16 14:31</text>
        </view>
        <view class="content">
          <img src="https://stc-new.8531.cn/assets/20190916/1568615465225_5d7f2c29159bb8067435f6c4.jpeg" alt="">
          <text>集生态、文化、休闲、产业多功能于一体的田园综合体——阳陂湖终于要恢复了！9月16日上午，位于富阳区的阳陂湖生态修复治理项目项目正式开工。

据《富阳县水利志》记载，阳陂湖位于富阳城北十里临湖村（今湖塍村）。唐贞观十二年（公元638年），县令郝砆主持开凿，建阳陂湖东西两闸，灌溉农田万余亩……

从唐代开始修建，后几经扩湖修堤，阳陂湖面积最大时达到610余亩，在上世纪70年代前，一直是重要的蓄水灌溉水源。</text>
          <img src="https://stc-new.8531.cn/assets/20190916/1568615465269_5d7f2c29159bb8067435f6c5.jpeg" alt="">
          <text>然而，在快速工业化、城市化过程中，阳陂湖生态环境逐步退化。

随着人们对建设富阳江北城市公园的呼声越来越高，2018年，经过多次周密论证和科学规划，富阳区提出对阳陂湖生态环境进行修复，将其打造成为生态自然、别有风味的城市文化湿地公园。</text>
        </view>
      </view>
      <view class="previous-btn">上一章</view>
      <view class="next-btn">下一章</view>
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
  align-items: center;
}

.header-container .right {
  flex-direction: row-reverse;
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

.content-container {
  padding: 15px;
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
}

.content-container .title {
  color: #333333;
  font-size: 24px;
}

.content-container img {
  width: 100%;
}

.content-container .time {
  color: #333333;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-container .time img {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.content-container .time text {
  color: #666666;
  font-size: 16px;
  flex-grow: 1;
}

.content-container .content {
  font-size: 14px;
}

.previous-btn {
  color: #FFFFFF;
  padding: 15px 30px;
  background-color: #006b65;
  border-radius: 28px;
  position: fixed;
  left: 15px;
  bottom: 30px;
}

.next-btn {
  color: #FFFFFF;
  padding: 15px 30px;
  background-color: #006b65;
  border-radius: 28px;
  position: fixed;
  right: 15px;
  bottom: 30px;
}
</style>