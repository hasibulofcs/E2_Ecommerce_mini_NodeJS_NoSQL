import { Router } from "express";
import { ProductRoutes } from "../modules/products/products.routes";
import { OrderRoutes } from "../modules/orders/orders.routes";

const router = Router();

router.use("/products", ProductRoutes);
router.use("/orders", OrderRoutes);

export const AppRoutes = router;
