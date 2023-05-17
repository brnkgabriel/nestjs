import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Requesting', req.url, 'from middleware')
    next()
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log("logger middleware function")
  next()
}