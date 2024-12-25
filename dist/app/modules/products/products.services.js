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
exports.ProductServices = void 0;
const products_model_1 = __importDefault(require("./products.model"));
const createProduct = (productsData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.create(productsData);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.find();
    return result;
});
const getProductBySearchTerm = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.find({
        name: { $regex: searchTerm, $options: "i" },
    });
    return result;
});
const getProductById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.findById(_id);
    return result;
});
const updateProductById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
    return result;
});
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.ProductServices = {
    createProduct,
    getAllProducts,
    getProductBySearchTerm,
    getProductById,
    updateProductById,
    deleteProductById,
};
