import { Router } from "express";
import { ProductsController } from "./products.controller";

const router = Router();

router.post("/create", ProductsController.createProduct);

export const ProductRoutes = router;
