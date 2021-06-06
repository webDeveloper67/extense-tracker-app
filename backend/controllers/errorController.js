import ErrorResponse from './../utils/ErrorResponse.js'

const validatorErrorHandler = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new ErrorResponse(message, 400);
};

const mongoDuplicateKey = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);

  const message = `Duplicate field value: ${value}`;
  return new ErrorResponse(message, 400)
}

const devErrors = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err
  });
};

const proErrors = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    console.error('Error', err);

    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!!'
    });
  }
};

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    devErrors(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    // validatorError - duplication
    if(error.name === 'ValidationError') {
      error = validatorErrorHandler(error);
    }

    if(error.code === 11000) {
      error = mongoDuplicateKey(error)
    }

    proErrors(error, res);
  }
};


export default errorHandler