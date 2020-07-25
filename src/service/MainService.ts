import Service from "./modules/Service";
import Config from "../Config";
import { token, language } from "../util/storage";
import i18n from "../lang/index";

const debounce = require("lodash");

export default class MainService {
  public service = new Service({
    baseUrl: new Config().MAIN_BASE_API,
    header: {}
  });

  private responseStatus401 = debounce((res: any) => {
    uni.navigateTo({
      url: "/login"
    });
    uni.showToast({
      title: i18n.t("main_service.response_failed").toString(),
      duration: 2000,
      icon: "none"
    });
  });
  private responseStatus504 = debounce(() => {
    uni.showToast({
      title: i18n.t("main_service.response_failed").toString(),
      duration: 2000,
      icon: "none"
    });
  });
  private responseStatus500 = debounce(() => {
    uni.showToast({
      title: i18n.t("main_service.response_failed").toString(),
      duration: 2000,
      icon: "none"
    });
  });
  private responseFailedDefault = debounce(() => {
    uni.showToast({
      title: i18n.t("main_service.response_failed").toString(),
      duration: 2000,
      icon: "none"
    });
  });

  constructor() {
    console.log("process.env.MAIN_BASE_API: ", JSON.stringify(process as any));
    this.service.interceptors.request((config) => {
      // Add X-Access-Token header to every request, you can add other custom headers here
      if (token.get()) {
        (config.header as any)["X-Access-Token"] = token.get();
        (config.header as any).Authorization = "Bearer " + token.get();
        (config.header as any)["Content-Type"] = "application/json;charset=UTF-8";
        (config.header as any)["Accept-Language"] = language.get() === "zh" ? "zh-Hans" : "en-US"; // 让每个请求携带中英文标志
      }
      return config;
    }, (error) => {
      uni.showToast({
        title: i18n.t("main_service.request_failed").toString(),
        duration: 2000,
        icon: "none"
      });
      return Promise.reject(error);
    });
    
    this.service.interceptors.response((response) => {
      console.log(response);
      const res = response.data;
      if (!/[2][0-9]*/.test(response.statusCode.toString())) {
        uni.showToast({
          title: res.message || "Error",
          duration: 2000,
          icon: "none"
        });
        if (response.status === 401) {
          token.set("");
          location.reload(); // To prevent bugs from vue-router
        }
        return Promise.reject(new Error(res.message || "Error"));
      } else {
        return response.data;
      }
    }, (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            this.responseStatus401(error.response);
            break;
          case 504:
            this.responseStatus504();
            break;
          case 500:
            this.responseStatus500();
            break;
          default:
            this.responseFailedDefault();
            break;
        }
      }
      return Promise.reject(error);
    })
  }
}
