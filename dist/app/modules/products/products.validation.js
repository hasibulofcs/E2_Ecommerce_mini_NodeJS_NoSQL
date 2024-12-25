"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsValidationSchema = exports.inventorySchema = exports.variantsSchema = void 0;
const zod_1 = require("zod");
exports.variantsSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
exports.inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
exports.productsValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(30),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(exports.variantsSchema),
    inventory: exports.inventorySchema,
});
