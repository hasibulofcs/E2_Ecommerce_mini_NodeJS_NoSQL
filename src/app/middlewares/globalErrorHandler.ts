import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

// Correctly typed error handler
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  console.log(`in global error handler.`, err instanceof ZodError);

  // Handle Zod validation errors
  if (err instanceof ZodError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      statusCode: StatusCodes.BAD_REQUEST,
      message: "Validation error",
      errors: err.errors.map((e) => ({
        path: e.path,
        message: e.message,
      })),
    });
  }

  // Default error handling
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const statusMessage = err.message || "Something went wrong!";

  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: statusMessage,
  });
};

export default globalErrorHandler;
