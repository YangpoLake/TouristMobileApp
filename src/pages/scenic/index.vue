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
      	<video class="video1" src="https://vdept.bdstatic.com/4a70565051744c6468795953644e4d54/6d68614c44517175/71bd01e37ef3369d9086b31dd6fadf585c121a2f5667a808386af843729fbe623097fda2b3b33162622ca7c89fdc568c.mp4?auth_key=1596014057-0-0-26b256539ae26b6cc8e37bcee2e3c503"></video></view>
        <view class="title"><text>富春山居景点1</text></view>
        <view class="content">       	
        六朝古都南京，在这个古老的城市，既有自然的秀美山水之景，又有历史文物之雅，可逛可玩的去处有很多，每年也都会有很多游人前来，而我也是一个前来南京游玩最后选择留在这里的旅人，还记得我第一次到南京的时候，给我初次印象就是这个不适合走马观花，更加适合生活，这里的风土人情，历史文化不是你一次两次就能深刻体会的。
        </view>
      <view class="video-container">
      	<video class="video1" src="https://vdept.bdstatic.com/4a70565051744c6468795953644e4d54/6d68614c44517175/71bd01e37ef3369d9086b31dd6fadf585c121a2f5667a808386af843729fbe623097fda2b3b33162622ca7c89fdc568c.mp4?auth_key=1596014057-0-0-26b256539ae26b6cc8e37bcee2e3c503"></video></view>
     <view class="title"><text>富春山居景点2</text></view>
        <view class="content">
        六朝古都南京，在这个古老的城市，既有自然的秀美山水之景，又有历史文物之雅，可逛可玩的去处有很多，每年也都会有很多游人前来，而我也是一个前来南京游玩最后选择留在这里的旅人，还记得我第一次到南京的时候，给我初次印象就是这个不适合走马观花，更加适合生活，这里的风土人情，历史文化不是你一次两次就能深刻体会的。
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