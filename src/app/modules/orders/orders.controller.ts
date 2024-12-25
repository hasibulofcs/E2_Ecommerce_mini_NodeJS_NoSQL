import { NextFunction, Request, Response } from "express";
import { orderValidationSchema } from "./orders.validation";
import { StatusCodes } from "http-status-codes";
import { OrderServices } from "./orders.services";

export const createNewOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const refinedData = orderValidationSchema.parse(data);

    const result = await OrderServices.createNewOrder(refinedData);

    res.status(StatusCodes.OK).json({
      success: true,
      status: StatusCodes.OK,
      message: "order added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createNewOrder,
};
