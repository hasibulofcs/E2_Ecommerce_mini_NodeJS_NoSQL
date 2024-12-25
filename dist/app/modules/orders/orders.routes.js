"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const orders_controller_1 = require("./orders.controller");
const router = (0, express_1.Router)();
router.post("/", orders_controller_1.OrderController.createNewOrder);
router.get("/", orders_controller_1.OrderController.getAllOrders);
exports.OrderRoutes = router;
