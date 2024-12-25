import mongoose, { Schema } from "mongoose";
import { IOrder } from "./orders.interface";
import validator from "validator";

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (result) => `${result.value} is not a valid email address`,
    },
  },
  productId: {
    type: String,
    min: [10, "product id must be of 10 characters."],
    required: [true, "product Id is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
});

const OrderModel = mongoose.model("orders", orderSchema);

export default OrderModel;
