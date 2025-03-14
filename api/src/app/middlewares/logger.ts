import { RequestHandler } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { Service } from "typedi";

import { LoggerService, LogLevel } from "../../logger/service";

@Service()
@Middleware({ type: "after" })
export class LoggerMiddleware implements ExpressMiddlewareInterface {
  constructor(private loggerService: LoggerService) {}

  use: RequestHandler = (req, res, next) => {
    let logLevel: LogLevel = "info";
    const { statusCode } = res;
    if (statusCode < 100 && statusCode >= 400) {
      logLevel = "error";
    }

    this.loggerService.log(logLevel, {
      message: `${res.statusCode} ${req.method} ${req.url}`,
    });
    next();
  };
}
