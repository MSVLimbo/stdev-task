interface ErrorProperties {
  code: number;
  key: string;
  details?: string | Record<string, any>;
}

export class HttpError extends Error {
  constructor(public readonly statusCode: number, public readonly properties: ErrorProperties) {
    super();
    this.name = 'HttpError';
  }
}
