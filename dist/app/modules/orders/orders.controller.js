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
exports.OrderController = exports.createNewOrder = void 0;
const orders_validation_1 = require("./orders.validation");
const http_status_codes_1 = require("http-status-codes");
const orders_services_1 = require("./orders.services");
const createNewOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const refinedData = orders_validation_1.orderValidationSchema.parse(data);
        const result = yield orders_services_1.OrderServices.createNewOrder(refinedData);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "order added successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createNewOrder = createNewOrder;
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        let result = null;
        if (email) {
            result = yield orders_services_1.OrderServices.getOrderByEmail(email);
        }
        else
            result = yield orders_services_1.OrderServices.getAllOrders();
        res
            .status(result.length > 0 ? http_status_codes_1.StatusCodes.OK : http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({
            success: result.length > 0 ? true : false,
            status: result.length > 0 ? http_status_codes_1.StatusCodes.OK : http_status_codes_1.StatusCodes.NOT_FOUND,
            message: result.length > 0
                ? "Orders fetched successfully"
                : "Couldn't find desired order for the corresponding email",
            count: Array.isArray(result)
                ? result.length
                : "Found no countable object like array",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.OrderController = {
    createNewOrder: exports.createNewOrder,
    getAllOrders,
};
