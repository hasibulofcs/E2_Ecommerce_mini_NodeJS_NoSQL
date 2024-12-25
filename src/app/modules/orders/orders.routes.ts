import { Router } from "express";
import { OrderController } from "./orders.controller";

const router = Router();

router.post("/", OrderController.createNewOrder);

export const OrderRoutes = router;
