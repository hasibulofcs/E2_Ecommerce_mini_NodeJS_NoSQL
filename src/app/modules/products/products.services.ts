import { IFProducts } from "./products.interface";
import ProductModel from "./products.model";

const createProduct = async (productsData: IFProducts) => {
  const result = await ProductModel.create(productsData);
  return result;
};

const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
};
