import { HttpStatusCode } from 'axios';
import http from 'http';
import { ErrorObject } from '.';
import { BaseError } from './base.error';

export class NotFoundError extends BaseError {
  constructor({ message, exception }: ErrorObject = {}) {
    {
      super(HttpStatusCode.NotFound, message || http.STATUS_CODES[HttpStatusCode.NotFound]!, exception);
    }
  }
}
