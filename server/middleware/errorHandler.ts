import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../error';

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  if (err instanceof BaseError) {
    res.status(err.code).json({ ...err.getResponse() });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
