export class NoRefreshTokenError extends Error {
  constructor() {
    super();
    this.name = 'NoRefreshTokenError';
    this.message = 'No refresh token.';
  }
}
