<template>
  <view class="find-container">
    <view class="header-container">
      <view class="left"></view>
      <view class="center">发现</view>
      <view class="right"></view>
    </view>
    <view class="main-container">
      <view class="tabs-container">
        <view
          :class="{ 'tab-item': true, 'active': tabIndex === 'strategy' }"
          @click="changeTabIndex('strategy')"
        >游园攻略</view>
        <view
          :class="{ 'tab-item': true, 'active': tabIndex === 'activity' }"
          @click="changeTabIndex('activity')"
        >游园活动</view>
      </view>
      <view class="content-container">
        <view v-if="tabIndex === 'strategy'" class="strategy-container">
          <view v-for="strategy in steategysList" :key="strategy.id" class="item" @click="toPage('/pages/active/index?id=' + strategy.id)">
            <img :src="strategy.image_url" alt />
            <text class="title">{{ strategy.title|common_ellipsis(4) }}</text>
            <text class="message">{{ strategy.info|common_ellipsis(20) }}</text>
          </view>
        </view>
        <view v-if="tabIndex === 'activity'" class="active-container">
          <view v-for="activity in activityList" :key="activity.id" class="item" @click="toPage('/pages/active/index?id=' + activity.id)">
            <img :src="activity.image_url" alt />
            <view class="message">
              <text class="title">{{ activity.title|common_ellipsis(4) }}</text>
              <text class="detail">{{ activity.info|common_ellipsis(20) }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import Vue from "vue";
import Config from "../../Config";

export default Vue.extend({
  data() {
    return {
      tabIndex: "strategy",
      strategysPage: 1,
      steategysList: [],
      activityPage: 1,
      activityList: [],
    };
  },
  mounted() {
    this.changeTabIndex("strategy");
    this.getStrategyByPage();
    this.getActivityByPage();
  },
  methods: {
    changeTabIndex(tab: string) {
      this.tabIndex = tab;
    },
    getStrategyByPage() {
      this.$mainApi
        .apiGetStrategysByPage(1, new Config().FIND_STRATEGY_PAGE_SIZE)
        .then((res) => {
          this.steategysList = res.data.data;
        });
    },
    getActivityByPage() {
      this.$mainApi
        .apiGetActivitysByPage(1, new Config().FIND_ACTIVITY_PAGE_SIZE)
        .then((res) => {
          this.activityList = res.data.data;
        });
    },
    toPage(path: string) {
      uni.navigateTo({
        url: path
      });
    }
  },
});
</script>
<style scoped>
.find-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f7f7;
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
  display: flex;
}

.tabs-container {
  width: 100px;
  flex-shrink: 0;
}

.tabs-container .tab-item {
  font-size: 16px;
  padding: 15px;
  text-align: center;
}

.tabs-container .tab-item.active {
  background-color: #ffffff;
}

.content-container {
  height: 100%;
  flex-grow: 1;
  display: flex;
  background-color: #ffffff;
}

.strategy-container {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.strategy-container .item {
  width: 45%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.strategy-container .item img {
  width: 100%;
}

.strategy-container .item .title {
  color: #333333;
  font-size: 14px;
  font-weight: bolder;
  padding: unset;
  margin: unset;
  border: unset;
}

.strategy-container .item .message {
  color: #666666;
  font-size: 8px;
}

.active-container {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.active-container .item {
  margin-bottom: 15px;
  display: flex;
}

.active-container .item img {
  width: 140px;
  margin-right: 15px;
  flex-shrink: 0;
}

.active-container .item .message {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.active-container .item .message .title {
  color: #333333;
  font-size: 16px;
  font-weight: bolder;
  padding: unset;
  margin: unset;
  border: unset;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.active-container .item .message .detail {
  color: #666666;
  font-size: 12px;
  margin-top: 5px;
}
</style>
