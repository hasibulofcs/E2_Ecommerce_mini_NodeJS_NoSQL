import { Response } from "express";
import { StatusCodes } from "http-status-codes";

const globalErrorHandler = (err: any, res: Response) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const statusMessage = err.message || "Something went wrong!";

  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: statusMessage,
  });
};

export default globalErrorHandler;
