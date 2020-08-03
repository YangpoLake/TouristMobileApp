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
              <img src="~@/static/mobile_login_slices/icon_phone@3x.png" alt="">
            </view>
            <view class="right-input">
              <input type="text" name="" id="" placeholder="请输入您的手机号" v-model="mobileNumber" />
            </view>
          </view>
          <view class="password-input">
            <view class="left-icon">
              <img src="~@/static/mobile_login_slices/con_yanzheng@3x.png" alt="">
            </view>
            <view class="right-input">
              <input type="text" name="" id="" placeholder="请输入验证码" v-model="smsCode" />
              <text v-if="waitTime <= 0" type="text" class="captcha-btn" @click="sendSms">获取验证码</text>
              <text v-else class="captcha-btn disabled">{{ waitTime }}</text>
            </view>
          </view>
          <view class="submit-btn" @click="login">
            <span>登录</span>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
import { token, user } from '../../util/storage';

export default Vue.extend({
  data() {
    return {
      mobileNumber: "",
      smsCode: "",
      waitTime: 0,
      intervaler: 0
    }
  },
  onLoad() {
  },
  mounted() {
    this.mobileNumber = "18899887788";
    this.sendSms();
  },
  methods: {
    sendSms() {
      this.$mainApi.apiSendLoginSms(this.mobileNumber).then((res) => {
        this.smsCode = res.data.code.toString();
        this.waitTime = 60;
        this.intervaler = setInterval(() => {
          this.waitTime --;
          if (this.waitTime <= 0) {
            clearInterval(this.intervaler);
          }
        }, 1000);
      });
    },
    login() {
      this.$mainApi.apiSmsLogin(this.mobileNumber, this.smsCode).then((res) => {
        token.set(res.data);
        this.getSelfInfo();
      })
    },
    getSelfInfo() {
      this.$mainApi.apiGetSelf().then(res => {
        user.set(res.data);
        this.toIndexPage();
      });
    },
    toIndexPage() {
      uni.navigateTo({
        url: '/pages/index/index',
      });
    }
  }
});
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
  background-color: #009F96;
  background: url('~@/static/mobile_login_slices/background.png') no-repeat center;
  background-size: cover;
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
  flex-grow: 1;
  padding: 8px 0px;
  display: flex;
}

.right-input .captcha-btn {
  color: #009F96;
  font-size: 16px;
}

.right-input .captcha-btn .disabled {
  color: #999999;
}

.right-input input {
  flex-grow: 1;
}

.left-icon img {
  width: 100%;
  margin-bottom: -4px;
}

.submit-btn {
  color: #ffffff;
  height: 50px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009F96;
  border-radius: 25px;
}
</style>