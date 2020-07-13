<template>
  <view class="login-container">
    <view class="bg">
      <view class="bg-color"></view>
    </view>
    <view class="main">
      <view class="login-header">
        <view class="back-btn">
          <span class="iconfont icon-back"></span>
          <span>登录</span>
        </view>
      </view>
      <view class="login-logo"></view>
      <view class="login-card-wrapper">
        <view class="login-card">
          <view class="account-input">
            <view class="left-icon">
              <span class="iconfont icon-people"></span>
            </view>
            <view class="right-input">
              <input type="text" name="" id="" placeholder="请输入您的账号" />
            </view>
          </view>
          <view class="password-input">
            <view class="left-icon">
              <span class="iconfont icon-safety"></span>
            </view>
            <view class="right-input">
              <input type="password" name="" id="" placeholder="请输入您的密码" />
            </view>
          </view>
          <view class="submit-btn">
            <span>登录</span>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f0f0f0;
}

.bg,
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
}

.bg-color {
  height: 40%;
  background-color: #1c716c;
}

.login-header {
  height: 50px;
  padding: 0px 15px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.back-btn {
  color: #ffffff;
  flex-shrink: 0;
}

.login-logo {
  height: calc(28% - 50px);
}

.login-card-wrapper {
  flex-grow: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.login-card {
  flex-grow: 1;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 10px;
}

.account-input,.password-input {
  margin-top: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}

.left-icon {
  width: 20px;
  margin-right: 5px;
  flex-shrink: 0;
}

.right-input {
  padding: 8px 0px;
}

.submit-btn {
  color: #ffffff;
  height: 50px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c716c;
  border-radius: 25px;
}
</style>