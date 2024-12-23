import { Router } from "express";
import { ProductsController } from "./products.controller";

const router = Router();

router.post("/", ProductsController.createProduct);
router.get("/", ProductsController.getAllProducts);

export const ProductRoutes = router;
