import { authPath } from '../auth/path';
import { removeLoggedInData, tokenIsValid } from '../../utils/token';
import { FulfilledRequestInterceptor } from './types';

export function createTokenPreCheckingInterceptor(): FulfilledRequestInterceptor {
  // @ts-ignore
  return config => {
    if (
      config.url?.endsWith(authPath.REFRESH_ACCESS_TOKEN) ||
      config.url?.endsWith(authPath.LOGOUT)
    ) {
      return config;
    }
    if (tokenIsValid()) {
      return config;
    }
    removeLoggedInData();
    return null;
  };
}
