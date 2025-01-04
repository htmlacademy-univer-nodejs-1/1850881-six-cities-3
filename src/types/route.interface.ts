import {NextFunction, Request, Response} from 'express';
import {HttpMethod} from './http-method.enum.js';
import {Middleware} from '../core/middlewares/middleware.interface.js';

export interface Route {
  path: string;
  method: HttpMethod;
  handler: (request: Request, response: Response, next: NextFunction) => void;
  middlewares?: Middleware[];
}
