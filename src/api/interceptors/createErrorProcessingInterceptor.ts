import { ErrorInterceptor } from './types';
import { HttpError } from '../../types/errors/httpError';

export function createErrorProcessingInterceptor(): ErrorInterceptor {
  return error => {
    if (error.message === 'Network Error' || JSON.parse(JSON.stringify(error)).status >= 500) {
      throw error;
    }
    if (error.isAxiosError && error?.response?.data) {
      throw new HttpError(error.response.status, error.response.data);
    }
    throw error;
  };
}
