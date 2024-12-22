import { Router } from "express";
import { ProductRoutes } from "../modules/products/products.routes";

const router = Router();

router.use("/products", ProductRoutes);

export const AppRoutes = router;
