import axios, { AxiosInstance } from 'axios';

export class BaseApiAdapter {
  protected axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }
}
