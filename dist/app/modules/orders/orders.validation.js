"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: (0, zod_1.string)()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    productId: (0, zod_1.string)(),
    price: (0, zod_1.number)(),
    quantity: (0, zod_1.number)(),
});
