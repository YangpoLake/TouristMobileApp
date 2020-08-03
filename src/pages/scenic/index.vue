 <template lang="html">
<view class="scenic-container">
    <view class="header-container">
      <view class="left" @click="toPage('/pages/index/index')"><text class="iconfont icon-back"></text></view>
      <view class="center">景点概括</view>
      <view class="right">
      </view>
    </view>
    <view class="main-container">
      	<view class="video-container">
      	<video class="video1" src="http://ybh.douxz.work/xuanchuan1.mp4"></video></view>
        <view class="title"><text>富春山居景点1</text></view>
        <view class="content">       	
        集生态、文化、休闲、产业多功能于一体的田园综合体——阳陂湖终于要恢复了！9月16日上午，位于富阳区的阳陂湖生态修复治理项目项目正式开工。

据《富阳县水利志》记载，阳陂湖位于富阳城北十里临湖村（今湖塍村）。唐贞观十二年（公元638年），县令郝砆主持开凿，建阳陂湖东西两闸，灌溉农田万余亩……

从唐代开始修建，后几经扩湖修堤，阳陂湖面积最大时达到610余亩，在上世纪70年代前，一直是重要的蓄水灌溉水源。
        </view>
      <view class="video-container">
      	<video class="video1" src="http://ybh.douxz.work/xuanchuan1.mp4"></video></view>
     <view class="title"><text>富春山居景点2</text></view>
        <view class="content">
        集生态、文化、休闲、产业多功能于一体的田园综合体——阳陂湖终于要恢复了！9月16日上午，位于富阳区的阳陂湖生态修复治理项目项目正式开工。

据《富阳县水利志》记载，阳陂湖位于富阳城北十里临湖村（今湖塍村）。唐贞观十二年（公元638年），县令郝砆主持开凿，建阳陂湖东西两闸，灌溉农田万余亩……

从唐代开始修建，后几经扩湖修堤，阳陂湖面积最大时达到610余亩，在上世纪70年代前，一直是重要的蓄水灌溉水源。
        </view>
      </view>
  </view>
 </template>

<script lang="ts">
import Vue from 'vue'
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
})
</script>

 <style>
.scenic-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scenic-container .title{
  font-size: 20px;
  border-left:5px solid #006b65;
  margin-bottom:15px;
  margin-left:15px;
  margin-top:15px;
  padding-left:15px;
}
 
.main-container .video-container{
  margin-left: 15px;
  margin-right: 15px;
}
.video-container .video1{
  flex-grow: 1;
  width: 100%;
  height: 240px;
  border-radius:10px;
}
.main-container .content{
  font-size:15px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:26px;
  margin-bottom: 15px;
  padding:15px;
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
  /*justify-content: center;*/
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