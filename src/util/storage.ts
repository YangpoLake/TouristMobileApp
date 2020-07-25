import i18n from '@/lang';

const TOKEN = Symbol('token');
const LANGUAGE = Symbol('language');
const USER = Symbol('USER');

export const token = {
  set: (token: string) => {
    try {
      uni.setStorageSync(TOKEN.toString(), token);
    } catch (error) {
      uni.showToast({
        title: i18n.t("util_storage.set_failed").toString(),
        duration: 2000,
        icon: "none"
      });
    }
  },
  get: () => {
    try {
      return uni.getStorageSync(TOKEN.toString());
    } catch (error) {
      uni.showToast({
        title: i18n.t("util_storage.get_failed").toString(),
        duration: 2000,
        icon: "none"
      });
    }
  }
};

export const language = {
  set: (language: string) => {
    try {
      uni.setStorageSync(LANGUAGE.toString(), language);
    } catch (error) {
      uni.showToast({
        title: i18n.t("util_storage.set_failed").toString(),
        duration: 2000,
        icon: "none"
      });
    }
  },
  get: () => {
    try {
      return uni.getStorageSync(LANGUAGE.toString());
    } catch (error) {
      uni.showToast({
        title: i18n.t("util_storage.get_failed").toString(),
        duration: 2000,
        icon: "none"
      });
    }
  }
};

export const user = {
  set: (user: any) => {
    try {
      uni.setStorageSync(USER.toString(), JSON.stringify(user));
    } catch (error) {
      uni.showToast({
        title: i18n.t("util_storage.set_failed").toString(),
        duration: 2000,
        icon: "none"
      });
    }
  },
  get: () => {
    try {
      return uni.getStorageSync(USER.toString());
    } catch (error) {
      uni.showToast({
        title: i18n.t("util_storage.get_failed").toString(),
        duration: 2000,
        icon: "none"
      });
    }
  }
}