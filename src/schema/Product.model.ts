import mongoose, { Schema } from "mongoose";
import {
  FurnitureSize,
  FurnitureStatus,
  FurnitureVolume,
  FurnitureCategory,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: FurnitureStatus,
      default: FurnitureStatus.DISCONTINUED,
    },

    productCollection: {
      type: String,
      enum: FurnitureCategory,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productSize: {
      type: String,
      enum: FurnitureSize,
      default: FurnitureSize.MEDIUM,
    },

    productVolume: {
      type: Number,
      enum: FurnitureVolume,
      default: FurnitureVolume.TWENTY_LITRES,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // createAt, updateAt
);

productSchema.index(
  { productName: 1, productSize: 1, productVolume: 1 },
  { unique: true }
);

export default mongoose.model("Product", productSchema);
