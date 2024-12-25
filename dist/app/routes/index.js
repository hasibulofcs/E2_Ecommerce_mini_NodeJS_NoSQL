"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const products_routes_1 = require("../modules/products/products.routes");
const orders_routes_1 = require("../modules/orders/orders.routes");
const router = (0, express_1.Router)();
router.use("/products", products_routes_1.ProductRoutes);
router.use("/orders", orders_routes_1.OrderRoutes);
exports.AppRoutes = router;
