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
      message: "Product created successfully!",
      data: result,
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
    const { searchTerm } = req.query;
    let result = {};

    if (searchTerm) {
      result = await ProductServices.getProductBySearchTerm(
        searchTerm.toString()
      );
    } else {
      result = await ProductServices.getAllProducts();
    }

    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      message: `${searchTerm} search result`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params.productId;
    const result = await ProductServices.getProductById(_id);
    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.productId;
    const productData = productsValidationSchema.parse(req.body);
    const result = await ProductServices.updateProductById(id, productData);

    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.productId;
    await ProductServices.deleteProductById(id);
    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      message: "Product deleted successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductsController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
