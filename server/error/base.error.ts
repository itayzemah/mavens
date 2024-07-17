import { HttpStatusCode } from 'axios';
import http from 'http';

export abstract class BaseError extends Error {
  constructor(
    public code: HttpStatusCode,
    public message: string,
    public exception: Error = { name: 'error', message: '' }
  ) {
    super(message);
  }

  public getResponse(): {} {
    return {
      error: http.STATUS_CODES[this.code],
      status: this.code,
      message: this.message,
    };
  }
}
