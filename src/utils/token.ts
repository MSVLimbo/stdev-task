import {jwtDecode} from "jwt-decode";

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const EXPIRATION_DATE_KEY = 'expiration_date';
const LOCAL_EXPIRATION_DATE_KEY = 'local_date';
const EXPIRATION_DELTA_IN_MS = 20 * 1000;

export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function getAccessTokenExpirationDate(): number {
  return Number(localStorage.getItem(EXPIRATION_DATE_KEY));
}

export function storeTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  const expirationDate = String(jwtDecode<{ exp: number }>(accessToken).exp);
  localStorage.setItem(EXPIRATION_DATE_KEY, expirationDate);
  localStorage.setItem(LOCAL_EXPIRATION_DATE_KEY, String(Date.now() - Number(expirationDate)));
}

export function removeTokenData(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(EXPIRATION_DATE_KEY);
  localStorage.removeItem(LOCAL_EXPIRATION_DATE_KEY);
}

export function removeLoggedInData(): void {
  sessionStorage.removeItem('casinoGameImgURL');
  sessionStorage.removeItem('draft-message');
  sessionStorage.removeItem('activeMessageId');
}

export function tokenIsValid(): boolean {
  const expirationDate = getAccessTokenExpirationDate();
  const localExpirationDate =
    Number(localStorage.getItem(LOCAL_EXPIRATION_DATE_KEY)) + Number(EXPIRATION_DELTA_IN_MS);

  return (
    !!getAccessToken() && !Number.isNaN(expirationDate) && localExpirationDate >= expirationDate
  );
}
