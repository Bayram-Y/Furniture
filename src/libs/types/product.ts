import { ObjectId } from "mongoose";

import {
  FurnitureSize,
  FurnitureStatus,
  FurnitureCategory,
  FurnitureVolume,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: FurnitureStatus;
  productCollection: FurnitureCategory;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: FurnitureSize;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: FurnitureCategory;
  search?: string;
}

export interface ProductInput {
  productStatus?: FurnitureStatus;
  productCollection: FurnitureCategory;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: FurnitureSize;
  productVolume?: FurnitureVolume;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: FurnitureStatus;
  productCollection?: FurnitureCategory;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: FurnitureSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
