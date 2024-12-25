import { number, string, z } from "zod";

export const orderValidationSchema = z.object({
  email: string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  productId: string(),
  price: number(),
  quantity: number(),
});
