export interface IService {
  baseUrl: string;
  header?: object;
}

export interface IRequest {
  dataType?: "xml" | "html" | "script" | "json" | "jsonp" | "text";
  responseType?: "" | "arraybuffer" | "blob" | "document" | "json" | "text";
  url?: string;
  data?: any;
  header?: object;
  method?: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  success?: (res: any) => any;
  fail?: (res: any) => any;
}

export default class Service {
  constructor(option: IService) {
    this.baseUrl = option.baseUrl;
    this.header = this.header;
  }

  private baseUrl: string;

  private header?: object;

  private dataType: "xml" | "html" | "script" | "json" | "jsonp" | "text" = "json";

  private responseType: "" | "arraybuffer" | "blob" | "document" | "json" | "text" = "json";

  private requestBefore(config: any) {
    return config;
  }

  private requestError(error: any) {
    return error;
  }

  private responseAfter(response: any) {
    return response;
  }

  private responseError(error: any) {
    return error;
  }

  //拦截器
  public interceptors = {
    request: (before: (config: IRequest) => any, error: (error: any) => any) => {
      if (before) {
        this.requestBefore = before;
      }
      if (error) {
        this.requestError = error;
      }
    },
    response: (after: (config: any) => any, error: (error: any) => any) => {
      if (after) {
        this.responseAfter = after;
      }
      if (error) {
        this.responseError = error;
      }
    }
  }

  private isCompleteURL(url: string) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
  }

  public request(options: IRequest = {}) {
    try {
      options.dataType = options.dataType || this.dataType;
      options.responseType = options.responseType || this.responseType;
      options.url = this.isCompleteURL(options.url || "/") ? options.url : (this.baseUrl + options.url);
      options.data = options.data;
      options.header = { ...options.header, ...this.header };
      options.method = options.method || "GET";

      options = { ...options, ...this.requestBefore(options) };

      return new Promise<any>((resolve, reject) => {
        options.success = (res: any) => {
          resolve(this.responseAfter(res));
        }
        options.fail = (error: any) => {
          reject(this.responseError(error));
        }
        uni.request((options as any));
      })
    } catch (error) {
      return Promise.reject(this.requestError(error));
    }
  }

  public get(url: string, data: any, options: IRequest = {}) {
    options.url = url;
    options.data = data;
    options.method = 'GET';
    return this.request(options);
  }

  public post(url: string, data: any, options: IRequest = {}) {
    options.url = url;
    options.data = data;
    options.method = 'POST';
    return this.request(options);
  }

  public put(url: string, data: any, options: IRequest = {}) {
    options.url = url;
    options.data = data;
    options.method = 'PUT';
    return this.request(options);
  }

  public patch(url: string, data: any, options: IRequest = {}) {
    options.url = url;
    options.data = data;
    options.method = 'PATCH';
    return this.request(options);
  }

  public delete(url: string, data: any, options: IRequest = {}) {
    options.url = url;
    options.data = data;
    options.method = 'DELETE';
    return this.request(options);
  }
}