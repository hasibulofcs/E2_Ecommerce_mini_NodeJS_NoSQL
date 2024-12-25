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

const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.query.email as string;
    let result = null;
    if (email) {
      result = await OrderServices.getOrderByEmail(email);
    } else result = await OrderServices.getAllOrders();

    res
      .status(result.length > 0 ? StatusCodes.OK : StatusCodes.NOT_FOUND)
      .json({
        success: result.length > 0 ? true : false,
        status: result.length > 0 ? StatusCodes.OK : StatusCodes.NOT_FOUND,
        message:
          result.length > 0
            ? "Orders fetched successfully"
            : "Couldn't find desired order for the corresponding email",
        count: Array.isArray(result)
          ? result.length
          : "Found no countable object like array",
        data: result,
      });
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createNewOrder,
  getAllOrders,
};
