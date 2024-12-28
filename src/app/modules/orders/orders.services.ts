import ProductModel from "../products/products.model";
import { IOrder } from "./orders.interface";
import OrderModel from "./orders.model";

const createNewOrder = async (data: IOrder) => {
  const productAvailableQuantity = await ProductModel.findById(data.productId);
  let result = null;

  if (productAvailableQuantity!.inventory.quantity > 0) {
    result = await OrderModel.findOneAndUpdate(
      {
        email: data.email,
        productId: data.productId,
      },
      data,
      { upsert: true, new: true, runValidators: true }
    );

    // updating product inventory
    if (productAvailableQuantity!.inventory.quantity === 1) {
      await ProductModel.findByIdAndUpdate(data.productId, {
        $inc: { "inventory.quantity": -1 },
        $set: { "inventory.inStock": false },
      });
    } else {
      await ProductModel.findByIdAndUpdate(data.productId, {
        $inc: { "inventory.quantity": -1 },
      });
    }

    return result;
  } else {
    throw new Error("Insufficient quantity available in inventory");
  }
};

const getAllOrders = async () => {
  const result = await OrderModel.find();

  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await OrderModel.find({
    email: { $regex: email, $options: "i" },
  });

  return result;
};

export const OrderServices = {
  createNewOrder,
  getAllOrders,
  getOrderByEmail,
};
