<template>
  <view class="order-container">
    <view class="header-container">
      <view class="left"></view>
      <view class="center">订单</view>
      <view class="right"></view>
    </view>
    <view class="tabs-container">
      <view :class="{ tab: true, active: tabIndex === orderStatusEnum.all }" @click="onChange('all')">
        <view class="label">
          <text>全部</text>
          <view class="high-light"></view>
        </view>
      </view>
      <view :class="{ tab: true, active: tabIndex === orderStatusEnum.pendding }" @click="onChange('pendding')">
        <view class="label">
          <text>待支付</text>
          <view class="high-light"></view>
        </view>
      </view>
      <view :class="{ tab: true, active: tabIndex === orderStatusEnum.notuse }" @click="onChange('notuse')">
        <view class="label">
          <text>待使用</text>
          <view class="high-light"></view>
        </view>
      </view>
      <view :class="{ tab: true, active: tabIndex === orderStatusEnum.complete }" @click="onChange('complete')">
        <view class="label">
          <text>已完成</text>
          <view class="high-light"></view>
        </view>
      </view>
    </view>
    <view class="main-container">
      <view v-if="orderList.length > 0" class="orders-container">
        <view class="order" v-for="order in orderList" :key="order.id">
          <img :src="order.image_url" alt="">
          <view class="message">
            <view class="title">{{ order.title }}</view>
            <view class="detail">数量：{{ order.paid_through }}</view>
            <view class="detail">总价：{{ order.amount }}</view>
            <view class="detail">下单时间：{{ order.created_at | common_date_format }} </view>
          </view>
          <view class="status">
            <view class="pendding">待支付</view>
            <view class="complete">已完成</view>
          </view>
        </view>
      </view>
      <view v-else class="empty-container">
        <img src="~@/static/order_slices/empty.png" alt="">
        <text class="tips">当前订单为空，您可以选择商品下单</text>
        <view class="toselect-btn">前往选择商品</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Config from '../../Config';

export default Vue.extend({
  props: ["order-list"],
  data() {
    return {
      orderStatusEnum: new Config().ORDER_STATUS_ENUM,
      tabIndex: new Config().ORDER_STATUS_ENUM.all
    }
  },
  methods: {
    onChange(value: number) {
      this.tabIndex = value;
      this.$emit("change-order-status", value);
    }
  }
});
</script>

<style scoped>
.order-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F4F7F7;
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

.tabs-container {
  color: #333333;
  height: 24px;
  padding-top: 12px;
  display: flex;
}

.tabs-container .tab {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs-container .tab .label {
  font-size: 16px;
  display: flex;
  flex-direction: column;
}

.high-light {
  height: 4px;
  margin-top: 4px;
  border-radius: 3px;
}

.tabs-container .tab.active .label {
  color: #006b65;
}

.tabs-container .tab.active .high-light {
  background-color: #006b65;
}

.main-container {
  flex-grow: 1;
  overflow: auto;
}

.orders-container {
  padding: 15px;
}

.order {
  height: 82px;
  padding: 20px 15px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
}

.order img {
  width: 82px;
  height: 82px;
  background-color: #cccccc;
  border-radius: 5px;
  flex-shrink: 0;
}

.order .message {
  padding-left: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.order .message .title {
  color: #333333;
  font-size: 16px;
  font-weight: bolder;
}

.order .message .detail {
  color: #999999;
  font-size: 12px;
}

.order .status {
  font-size: 16px;
}

.order .status .pendding {
  color: #FF5400;
}

.order .status .complete {
  color: #999999;
}

.empty-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.empty-container img {
  width: 40%;
  margin-bottom: 15px;
}

.empty-container .tips {
  color: #9A9A9A;
  font-size: 16px;
}

.empty-container .toselect-btn {
  color: #FFFFFF;
  font-size: 14px;
  margin-top: 15px;
  padding: 10px;
  background-color: #006b65;
  border-radius: 6px;
}
</style>