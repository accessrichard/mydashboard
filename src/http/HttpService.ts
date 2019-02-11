import axios, { AxiosPromise } from 'axios';
import config from '@/config';

export default class HttpService {
  constructor() {
    this.initializeAxios();
  }

  public get<T>(url: string): AxiosPromise<T> {
    return axios.get<T>(url);
  }

  public post(url: string, data?: any): AxiosPromise<any> {
    return axios.post(url, data);
  }

  public put(url: string, data?: any): AxiosPromise<any> {
    return axios.put(url, data);
  }

  private initializeAxios(): any {
    axios.defaults.baseURL = config.api;
  }
}
