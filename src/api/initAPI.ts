import { privateClient } from './privateClient';
import { createTokenProviderInterceptor } from './interceptors/createTokenProviderInterceptor';
import { createTokenPreCheckingInterceptor } from './interceptors/createTokenPreCheckingInterceptor';
import { createInvalidTokenInterceptor } from './interceptors/createInvalidTokenInterceptor';
import { createErrorProcessingInterceptor } from './interceptors/createErrorProcessingInterceptor';
import { publicClient } from './publicClient';

export function initAPI(): void {
  // @ts-ignore
  privateClient.interceptors.request.use(createTokenProviderInterceptor());
  // @ts-ignore
  privateClient.interceptors.request.use(createTokenPreCheckingInterceptor());
  privateClient.interceptors.response.use(undefined, createInvalidTokenInterceptor(privateClient));
  privateClient.interceptors.response.use(undefined, createErrorProcessingInterceptor());

  publicClient.interceptors.response.use(undefined, createErrorProcessingInterceptor());
}
