import { ProductType } from "./ProductType";

export type CartProduct = {
  _id: string;
  count: number;
  price: number;
  product: ProductType;
};

export type CartResponse = {
  _id: string;
  products: CartProduct[];
  totalCartPrice: number;
};

export type AddToCartResponse = {
  numOfCartItems: number;
  cartId: string;
  data: CartResponse;
};
