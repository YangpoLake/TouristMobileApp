import MainService from "./MainService";

export default class MainApi {
  private service = new MainService().service;

  /**
   * 获取个人信息
   */
  public apiGetSelf() {
    return this.service.get("/account", {});
  }

  /**
   * 发送登录验证码
   * @param mobileNumber 手机号
   */
  public apiSendLoginSms(mobileNumber: string) {
    return this.service.post("/sms/login_code", { mobile_number: mobileNumber });
  }

  /**
   * 验证码登录
   * @param mobileNumber 手机号
   * @param code 短信验证码
   */
  public apiSmsLogin(mobileNumber: string, code: string) {
    return this.service.post("/login/sms", {
      mobile_number: mobileNumber,
      code
    });
  }

  /**
   * 分页获取活动
   * @param page 页数
   * @param pageSize 每页个数
   */
  public apiGetActivitysByPage(page: number, pageSize: number) {
    return this.service.get("/activity", {
      page,
      size: pageSize
    })
  }

  /**
   * 获取活动详情
   * @param id 活动ID
   */
  public apiGetActivityDetail(id: string) {
    return this.service.get("/activity/" + id, {});
  }

  /**
   * 添加反馈信息
   * @param content 反馈内容
   */
  public apiPostFeedback(content: string) {
    return this.service.post("/feedback", { content });
  }

  /**
   * 添加反馈信息的评论
   * @param content 
   */
  public apiPostFeedbackComment(content: string) {
    return this.service.post("/feedback/comment", { content });
  }

  /**
   * 分页获取反馈信息的评论列表
   * @param page 页数
   * @param pageSize 每页个数
   */
  public apiGetFeedbackCommentsByPage(page: number, pageSize: number) {
    return this.service.get("/feedback/comment", {
      page,
      size: pageSize
    });
  }

  /**
   * 分页获取首页轮播图
   * @param page 页数
   * @param pageSize 每页个数
   */
  public apiGetBannersByPage(page: number, pageSize: number) {
    return this.service.get("/index/banner", {
      page,
      size: pageSize
    });
  }

  /**
   * 添加订单
   * @param productId 产品id
   * @param payMethod 支付方式 0: 支付宝; 1: 微信;
   * @param appointmentDate 预约日期
   */
  public apiPostOrder(productId: number, payMethod: number, appointmentDate: string) {
    return this.service.post("/order", {
      product_id: productId,
      paid_through: payMethod,
      appointment_date: appointmentDate
    });
  }

  /**
   * 分页获取订单
   * @param page 页数
   * @param pageSize 每页个数
   * @param status 订单状态 0: 未支付; 1: 已支付; 2: 已取消; 3: 已使用;
   */
  public apiGetOrdersByPage(page: number, pageSize: number, status: number) {
    return this.service.get("/order", {
      page,
      size: pageSize,
      status
    })
  }

  /**
   * 获取产品分类
   */
  public apiGetProductCategorys() {
    return this.service.get("/product/category", {});
  }

  /**
   * 分页获取产品
   * @param page 页数
   * @param pageSize 每页个数
   * @param categoryId 分类ID
   */
  public apiGetProductsByPage(page: number, pageSize: number, categoryId: string) {
    return this.service.get("/product", {
      page,
      size: pageSize,
      category: categoryId
    });
  }

  /**
   * 获取产品详情
   * @param id 产品ID
   */
  public apiGetProductDetail(id: string) {
    return this.service.get("product/" + id, {});
  }

  /**
   * 分页获取攻略
   * @param page 页数
   * @param pageSize 每页个数
   */
  public apiGetStrategysByPage(page: number, pageSize: number) {
    return this.service.get("/strategy", {
      page,
      size: pageSize
    });
  }

  /**
   * 获取攻略详情
   * @param id 攻略id
   */
  public apiGetStrategyDetail(id: string) {
    return this.service.get("/strategy/" + id, {});
  }
}
