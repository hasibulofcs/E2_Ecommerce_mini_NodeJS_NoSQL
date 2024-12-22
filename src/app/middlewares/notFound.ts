import { Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFound = (res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    status: StatusCodes.NOT_FOUND,
    message: "API not found!",
  });
};

export default notFound;
