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

const getAllProductsBySearchTerm = async (searchTerm: string) => {
  const result = await ProductModel.find({
    name: searchTerm,
  });
  return result;
};

const getProductById = async (_id: string) => {
  const result = await ProductModel.findById(_id);
  return result;
};

const updateProductById = async (id: string, data: IFProducts) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: id },
    { $set: data },
    { new: true }
  );
  return result;
};

const deleteProductById = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getAllProductsBySearchTerm,
  getProductById,
  updateProductById,
  deleteProductById,
};
