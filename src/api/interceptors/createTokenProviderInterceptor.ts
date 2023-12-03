import { getAccessToken } from '../../utils/token';
import { FulfilledRequestInterceptor } from './types';

export function createTokenProviderInterceptor(): FulfilledRequestInterceptor {
  return config => {
    if (config?.headers) {
      config.headers = {
        Authorization: `Bearer ${getAccessToken()}`,
      };
    }
    return config;
  };
}
