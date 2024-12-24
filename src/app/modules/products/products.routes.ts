import { Router } from "express";
import { ProductsController } from "./products.controller";

const router = Router();

router.post("/", ProductsController.createProduct);
router.get("/", ProductsController.getAllProducts);
router.get("/:productId", ProductsController.getProductById);
router.put("/:productId", ProductsController.updateProductById);
router.delete("/:productId", ProductsController.deleteProductById);

export const ProductRoutes = router;
