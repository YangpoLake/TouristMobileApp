<template>
  <view class="periphery-container">
    <web-view src="/periphery.html"></web-view>
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

<style>
.periphery-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>