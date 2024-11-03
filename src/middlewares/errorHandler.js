import { HttpError } from 'http-errors';

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: '500: Server error, please try again later.',
    data: err.message || 'Unknown error occurred.',
  });
};

export default errorHandler;
