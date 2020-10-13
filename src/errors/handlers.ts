import { ErrorRequestHandler, response } from 'express';

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(error);

  return res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;