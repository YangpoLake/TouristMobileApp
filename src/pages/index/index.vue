<template>
  <view class="index-container">
    <view></view>
    <view class="page-container">
      <home v-if="pageIndex === 'home'" :banner-list="bannerList" :strategy-list="strategyList" :activity-list="activityList" />
      <find v-if="pageIndex === 'find'" />
      <order v-if="pageIndex === 'order'" :order-list="orderList" @change-order-status="getOrders" />
      <mine v-if="pageIndex === 'mine'" />
    </view>
    <view class="tabs-container">
      <view class="tab" @click="changePage('home')">
        <img v-if="pageIndex === 'home'" src="~@/static/index_slices/icon_home_1@3x.png" alt="">
        <img v-else src="~@/static/mine_slices/icon_home@3x.png" alt="">
        <text :class="pageIndex === 'home' ? 'active' : ''">首页</text>
      </view>
      <view class="tab" @click="changePage('find')">
        <img v-if="pageIndex === 'find'" src="~@/static/index_slices/icon_find_1@3x.png" alt="">
        <img v-else src="~@/static/index_slices/icon_find@3x.png" alt="">
        <text :class="pageIndex === 'find' ? 'active' : ''">发现</text>
      </view>
      <view class="tab" @click="changePage('order')">
        <img v-if="pageIndex === 'order'" src="~@/static/order_slices/icon_order_1@3x.png" alt="">
        <img v-else src="~@/static/index_slices/icon_order@3x.png" alt="">
        <text :class="pageIndex === 'order' ? 'active' : ''">订单</text>
      </view>
      <view class="tab" @click="changePage('mine')">
        <img v-if="pageIndex === 'mine'" src="~@/static/mine_slices/icon_mine_1@3x.png" alt="">
        <img v-else src="~@/static/index_slices/icon_mine@3x.png" alt="">
        <text :class="pageIndex === 'mine' ? 'active' : ''">我的</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

import Home from "./home.vue";
import Order from "./order.vue";
import Mine from "./mine.vue";
import Find from "./find.vue";
import Config from "@/Config";

export default Vue.extend({
  components: { Home, Order, Mine, Find },
  data() {
    return {
      pageIndex: "home",
      orderStatus: new Config().ORDER_STATUS_ENUM.all,
      bannerList: [],
      strategyList: [],
      activityList: [],
      orderList: []
    }
  },
  onLoad() {
    this.getBanners();
    this.getStrategys();
    this.getActivitys();
    this.getOrders();
  },
  methods: {
    changePage(value: string) {
      this.pageIndex = value;
    },
    getBanners() {
      this.$mainApi.apiGetBannersByPage(0, new Config().INDEX_BANNER_MAX_COUNT).then((res) => {
        this.bannerList = res.data.data;
      });
    },
    getStrategys() {
      this.$mainApi.apiGetStrategysByPage(0, new Config().INDEX_STRATEGY_MAX_COUNT).then((res) => {
        this.strategyList = res.data.data;
;      });
    },
    getActivitys() {
      this.$mainApi.apiGetActivitysByPage(0, new Config().INDEX_ACTIVITY_PAGE_SIZE).then((res) => {
        this.activityList = res.data.data;
      });
    },
    getOrders(status?: number) {
      status ? this.orderStatus = status : "";
      this.$mainApi.apiGetOrdersByPage(0, new Config().INDEX_ORDER_PAGE_SIZE, this.orderStatus).then((res) => {
        this.orderList = res.data.data;
      });
    }
  }
});
</script>

<style scoped>
.index-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-container {
  flex-grow: 1;
  overflow: auto;
}

.tabs-container {
  height: 40px;
  flex-shrink: 0;
  padding: 5px 0px;
  background: #FFFFFF;
  box-shadow: 0px 12px 26px 3px rgba(0, 0, 0, 0.34);
  display: flex;
}

.tabs-container .tab {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs-container .tab img {
  width: 20px
}

.tabs-container .tab text {
  color: #9A9A9A;
  font-size: 12px;
}

.tabs-container .tab text.active {
  color: #333333;
}
</style>
