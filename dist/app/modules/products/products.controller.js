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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const http_status_codes_1 = require("http-status-codes");
const products_validation_1 = require("./products.validation");
const products_services_1 = require("./products.services");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = products_validation_1.productsValidationSchema.parse(req.body);
        const result = yield products_services_1.ProductServices.createProduct(product);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        let result = {};
        if (searchTerm) {
            result = yield products_services_1.ProductServices.getProductBySearchTerm(searchTerm.toString());
        }
        else {
            result = yield products_services_1.ProductServices.getAllProducts();
        }
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: `${searchTerm} search result`,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.productId;
        const result = yield products_services_1.ProductServices.getProductById(_id);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const productData = products_validation_1.productsValidationSchema.parse(req.body);
        const result = yield products_services_1.ProductServices.updateProductById(id, productData);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "Product updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        yield products_services_1.ProductServices.deleteProductById(id);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "Product deleted successfully",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ProductsController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
