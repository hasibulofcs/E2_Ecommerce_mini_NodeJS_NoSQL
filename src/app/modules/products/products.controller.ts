import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      message: "Successful hit on create products route",
    });
  } catch (error) {
    next(error);
  }
};

export const ProductsController = {
  createProduct,
};
