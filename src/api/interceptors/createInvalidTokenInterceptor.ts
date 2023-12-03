import { Axios } from 'axios';
import { ErrorInterceptor } from './types';
import { InvalidTokenError } from '../../types/errors/invalidTokenError';
import { removeTokenData } from '../../utils/token';
import { Auth } from '../auth';
import { authPath } from '../auth/path';

export function createInvalidTokenInterceptor(httpClient: Axios): ErrorInterceptor {
  return error => {
    if (shouldRefreshAccessToken(error)) {
      return Auth.refreshAccessToken().then(
        () => httpClient.request(error.config),
        () => {
          removeTokenData();
          throw error;
        },
      );
    }
    throw error;
  };
}

function shouldRefreshAccessToken(error: any): boolean {
  const { config } = error;
  return (
    error instanceof InvalidTokenError ||
    (error?.detail && !config.url?.endsWith(authPath.REFRESH_ACCESS_TOKEN))
  );
}
