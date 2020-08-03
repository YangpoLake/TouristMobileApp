<template>
  <view class="push-container">
    <view class="header-container">
      <view class="left" @click="toBack"><text class="iconfont icon-back"></text></view>
      <view class="center">团购详情</view>
      <view class="right"></view>
    </view>
    <view class="main-container">
      <view class="store-tip">
        <img src="～@/static/order_push_slices/1133.png" alt="">
        <text>富春山居</text>
      </view>
      <view class="title-container">
        单人游船票
      </view>
      <view class="store-tip">
        <text>随时退 ｜ 过期退 ｜ 需预约</text>
        <img src="～@/static/order_push_slices/1133.png" alt="">
        <text class="right">半年消费 4590</text>
      </view>
      <view class="mainimg-container">
        <img src="~@/static/items_slices/rowboats.jpg" alt="">
      </view>
      <view class="time-select-container">
        <view class="time-option-container active">
          <view class="data">2020-07-14</view>
          <view class="data">今天</view>
        </view>
        <view class="time-option-container">
          <view class="data">2020-07-15</view>
          <view class="data">星期三</view>
        </view>
        <view class="time-option-container">
          <view class="data">2020-07-16</view>
          <view class="data">星期四</view>
        </view>
        <view class="time-option-container">
          <view class="data">2020-07-17</view>
          <view class="data">星期五</view>
        </view>
        <view class="time-option-container">
          <view class="data">2020-07-18</view>
          <view class="data">星期六</view>
        </view>
        <view class="time-option-container">
          <view class="data">2020-07-19</view>
          <view class="data">星期日</view>
        </view>
      </view>
      <view class="form-container">
        <view class="form-item">
          <view class="label">数量</view>
          <view class="contrl">
            <view class="count-ctrl">
              <text class="iconfont icon-minus"></text>
              <text class="count">5</text>
              <text class="iconfont icon-plus"></text>
            </view>
          </view>
        </view>
        <view class="form-item">
          <view class="contrl">
            <textarea name="" id="" cols="30" rows="5" placeholder="套餐内容"></textarea>
          </view>
        </view>
        <view class="form-item">
          <view class="label">单人船票</view>
          <view class="contrl">
            <view class="list">
              <view class="item">
                <text class="type">一份</text>
                <text class="detail">200元</text>
              </view>
              <view class="item">
                <text class="type">总价</text>
                <text class="detail">200元</text>
              </view>
              <view class="item">
                <text class="type">团购价</text>
                <text class="detail im">79元</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="message-container">
        <text>通知：需要园区提前预约 预约电话 12346778（佩戴 口罩、携带身份证）<br />1、选择安全水域路线<br />2、每张门票限时使用2小时</text>
      </view>
    </view>
    <view class="footer-container">
      <view class="price">
        <text style="color: #999999; font-size: 14px;">¥</text>
        <text style="color: #FFB838">79</text>
        <text style="color: #999999; font-size: 14px; margin-left: 5px; text-decoration: line-through;">门市价 ¥200</text>
      </view>
      <view class="action-btn">立即抢购</view>
    </view>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
<style>
.push-container {
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
  overflow: auto;
}

.store-tip {
  display: flex;
  padding: 0px 15px;
}

.store-tip img {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
}

.store-tip text {
  color: #999999;
  font-size: 12px;
}

.store-tip .right {
  flex-grow: 1;
  text-align: right;
}

.title-container {
  color: #333333;
  font-size: 24px;
  padding: 5px 15px;
}

.mainimg-container {
  padding: 15px;
}

.mainimg-container img {
  width: 100%;
  border-radius: 8px;
}

.time-select-container {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.time-option-container {
  color: #333333;
  font-size: 12px;
  width: 24%;
  padding: 10px;
  border: 1px solid #999999;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 15px;
  background-color: #FFFFFF;
}

.time-option-container.active {
  color: #FFFFFF;
  background-color: #FFB838;
  border-color: #FFB838;
}

.form-container {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.form-container .form-item {
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
}

.form-container .form-item .label {
  color: #333333;
  font-size: 16px;
}

.count-ctrl {
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count-ctrl .iconfont {
  font-size: 16px;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  border-radius: 9px;
}

.count-ctrl .iconfont.icon-plus {
  color: #FFFFFF;
  background-color: #006b65;
}

.count-ctrl .count {
  color: #333333;
  font-size: 16px;
}

.uni-textarea-placeholder {
  font-size: 16px;
}

.list {
  display: flex;
  flex-direction: column;
}

.list .item {
  display: flex;
  justify-content: space-between;
}

.list .item .type {
  color: #666666;
  font-size: 16px;
}

.list .item .detail {
  color: #333333;
  font-size: 16px;
}

.list .item .detail.im {
  color: #FFB838;
}

.message-container {
  color: #666666;
  font-size: 16px;
  padding: 15px;
}
.footer-container {
  height: 40px;
  padding: 10px 15px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-container .pirce {
  color: #666666;
  font-size: 16px;
}

.footer-container .action-btn {
  color: #FFFFFF;
  font-size: 16px;
  background: #006b65;
  padding: 5px;
  border-radius: 8px;
}
</style>