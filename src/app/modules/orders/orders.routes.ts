import { Router } from "express";
import { OrderController } from "./orders.controller";

const router = Router();

router.post("/", OrderController.createNewOrder);
router.get("/", OrderController.getAllOrders);

export const OrderRoutes = router;
