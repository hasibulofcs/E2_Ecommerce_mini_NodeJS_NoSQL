"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const orders_model_1 = __importDefault(require("./orders.model"));
const createNewOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.default.findOneAndUpdate({
        email: data.email,
        productId: data.productId,
    }, data, { upsert: true, new: true, runValidators: true });
    // updating product inventory
    // if(result._id){
    //   await ProductModel.findByIdAndUpdate(result._id, {$set:{"inventory.quantity"}})
    // }
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.default.find();
    return result;
});
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.default.find({
        email: { $regex: email, $options: "i" },
    });
    return result;
});
exports.OrderServices = {
    createNewOrder,
    getAllOrders,
    getOrderByEmail,
};
