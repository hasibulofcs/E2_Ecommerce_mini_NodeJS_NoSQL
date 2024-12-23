import mongoose, { Schema } from "mongoose";
import { IFInventory, IFProducts, IFTags } from "./products.interface";

const variantsSchema = new Schema<IFTags>({
  type: {
    type: String,
    require: [true, "Type is required"],
  },
  value: {
    type: String,
    require: [true, "Value is required"],
  },
});

const inventorySchema = new Schema<IFInventory>({
  quantity: {
    type: Number,
    require: [true, "Quantity is required"],
  },
  inStock: {
    type: Boolean,
    require: [true, "InStock is required"],
  },
});

const productsSchema = new Schema<IFProducts>({
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

const ProductModel = mongoose.model("products", productsSchema);

export default ProductModel;
