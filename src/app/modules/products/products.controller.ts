import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { productsValidationSchema } from "./products.validation";
import { ProductServices } from "./products.services";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = productsValidationSchema.parse(req.body);

    const result = await ProductServices.createProduct(product);

    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      result: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ProductServices.getAllProducts();

    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      result: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductsController = {
  createProduct,
  getAllProducts,
};
