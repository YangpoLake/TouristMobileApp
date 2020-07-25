import Vue from 'vue';
import MainApi from '../service/MainApi';
import Config from '../Config'

declare module 'vue/types/vue' {
  interface Vue {
    $mainApi: MainApi;
    $config: Config;
  }
}
