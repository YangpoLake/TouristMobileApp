import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

import i18n from "./lang/index";
import filters from './filters';
import '@/iconfont/iconfont.css';
import MainApi from './service/MainApi';
import Config from './Config';

Vue.use(VueI18n);
Vue.prototype.$mainApi = new MainApi();
Vue.prototype.$config = new Config();
Vue.config.productionTip = false;

Object.keys(filters).forEach((key: any) => {
  Vue.filter(key, filters[key]);
});

Vue.prototype.$filters = filters;

new App({
  i18n
}).$mount();
