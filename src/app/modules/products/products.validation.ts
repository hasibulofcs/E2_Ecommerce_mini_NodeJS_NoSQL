import { z } from "zod";

export const variantsSchema = z.object({
  type: z.string(),
  value: z.string(),
});

export const inventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

export const productsValidationSchema = z.object({
  name: z.string().min(3).max(10),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantsSchema),
  inventory: inventorySchema,
});
