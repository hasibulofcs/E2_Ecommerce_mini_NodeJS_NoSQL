import { IOrder } from "./orders.interface";
import OrderModel from "./orders.model";

const createNewOrder = async (data: IOrder) => {
  const result = await OrderModel.findOneAndUpdate(
    {
      email: data.email,
      productId: data.productId,
    },
    data,
    { upsert: true, new: true, runValidators: true }
  );

  // updating product inventory
  // if(result._id){
  //   await ProductModel.findByIdAndUpdate(result._id, {$set:{"inventory.quantity"}})
  // }

  return result;
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
