"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        require: [true, "Type is required"],
    },
    value: {
        type: String,
        require: [true, "Value is required"],
    },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        require: [true, "Quantity is required"],
    },
    inStock: {
        type: Boolean,
        require: [true, "InStock is required"],
    },
});
const productsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        require: [true, "Description is required"],
        trim: true,
    },
    price: {
        type: Number,
        require: [true, "Price is required"],
        min: 0,
    },
    category: {
        type: String,
        require: [true, "Category is required"],
    },
    tags: {
        type: [String],
        require: false,
        default: [],
    },
    variants: {
        type: [variantsSchema],
        require: [true, "Variants is required"],
        default: [],
    },
    inventory: { type: inventorySchema },
});
const ProductModel = (0, mongoose_1.model)("products", productsSchema);
exports.default = ProductModel;
