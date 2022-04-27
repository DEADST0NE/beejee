/* eslint-disable class-methods-use-this */
/* eslint no-param-reassign: ["error", { "props": false }] */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import storage, { JWT_KEY } from '../../storage';

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.initResponseInterceptors();
  }

  private handleRequest = (config: AxiosRequestConfig) => {
    if (config.headers && !('Authorization' in config.headers)) {
      config.headers.Authorization = `Bearer ${storage.get(JWT_KEY)}`;
    }
    return config;
  };

  private handleSuccessResponse = (response: AxiosResponse) => response;

  private initResponseInterceptors = (): void => {
    this.instance.interceptors.request.use(this.handleRequest);
    this.instance.interceptors.response.use<any>(this.handleSuccessResponse);
  };
}
