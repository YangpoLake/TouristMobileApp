export default class Config{
  /**
   * 请求API前缀
   */
  readonly MAIN_BASE_API: string = "/api/app_user";

  /**
   * 首页海报轮播图最大数量
   */
  readonly INDEX_BANNER_MAX_COUNT: number = 10;

  /**
   * 首页旅游攻略最大数量
   */
  readonly INDEX_STRATEGY_MAX_COUNT: number = 6;

  /**
   * 首页活动列表每页条数
   */
  readonly INDEX_ACTIVITY_PAGE_SIZE: number = 10;

  /**
   * 订单列表每页几条
   */
  readonly INDEX_ORDER_PAGE_SIZE: number = 10;

  /**
   * 订单状态枚举
   */
  readonly ORDER_STATUS_ENUM = {
    "all": 0,
    "pendding": 1,
    "notuse": 2,
    "complete": 3
  };

  /**
   * 发现页面攻略每页数
   */
  readonly FIND_STRATEGY_PAGE_SIZE: number = 10;

  /**
   * 发现页面活动每页数
   */
  readonly FIND_ACTIVITY_PAGE_SIZE: number = 10;
}