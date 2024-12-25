import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

// Middleware for handling 404 errors
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    status: StatusCodes.NOT_FOUND,
    message: "API not found!",
  });
};

export default notFound;
