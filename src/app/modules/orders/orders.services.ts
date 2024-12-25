import { IOrder } from "./orders.interface";
import OrderModel from "./orders.model";

const createNewOrder = async (data: IOrder) => {
  const result = await OrderModel.create(data);
  return result;
};

export const OrderServices = {
  createNewOrder,
};
