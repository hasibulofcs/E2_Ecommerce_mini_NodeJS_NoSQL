"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        validate: {
            validator: (value) => validator_1.default.isEmail(value),
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
orderSchema.index({ email: 1, productId: 1 }, { unique: true });
const OrderModel = (0, mongoose_1.model)("orders", orderSchema);
exports.default = OrderModel;
