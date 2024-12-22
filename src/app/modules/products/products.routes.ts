import { Router } from "express";
import { ProductsController } from "./products.controller";

const router = Router();

router.get("/", ProductsController.createProduct);

export const ProductRoutes = router;
