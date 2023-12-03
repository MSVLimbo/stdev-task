import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ErrorInterceptor = (error: any) => any;

export type FulfilledRequestInterceptor = (
  config: AxiosRequestConfig,
) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

export type FulfilledResponseInterceptor = (
  response: AxiosResponse,
) => AxiosResponse | Promise<AxiosResponse>;
