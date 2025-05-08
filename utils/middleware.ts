import { Request, Response, NextFunction, ErrorRequestHandler, RequestHandler } from 'express';
import logger from './logger';

export const requestLogger: RequestHandler = (request: Request, response: Response, next: NextFunction): void => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
};

export const unknownEndpoint: RequestHandler = (request: Request, response: Response): void => {
  response.status(404).send({ error: 'unknown endpoint' });
};

interface CustomError extends Error {
  name: string;
  statusCode?: number;
}

export const errorHandler: ErrorRequestHandler = (
  error: CustomError,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    response.status(400).send({ error: 'malformatted id' });
    return;
  }
  if (error.name === 'ValidationError') {
    response.status(400).json({ error: error.message });
    return;
  }
  if (error.name === 'JsonWebTokenError') {
    response.status(401).json({ error: 'invalid token' });
    return;
  }
  if (error.name === 'TokenExpiredError') {
    response.status(401).json({ error: 'token expired' });
    return;
  }

  next(error);
};

const middleware = {
  requestLogger,
  unknownEndpoint,
  errorHandler
} as const;

export default middleware;