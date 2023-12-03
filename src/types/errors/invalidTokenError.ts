export class InvalidTokenError extends Error {
  constructor() {
    super();
    this.name = 'InvalidTokenError';
    this.message = 'Token is invalid.';
  }
}
