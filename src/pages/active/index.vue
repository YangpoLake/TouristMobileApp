<template>
  <view class="active-container">
    <detail />
  </view>
</template>

<script>
import Detail from './detail';
export default {
  components: { Detail },
  onLoad(option) {
    condole.log("active-index", option);
  }
}
</script>

<style scoped>
.active-container {
  width: 100vw;
  height: 100vh;
}
</style>