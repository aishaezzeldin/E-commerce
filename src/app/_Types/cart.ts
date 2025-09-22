import { ProductType } from "./ProductType";

export type CartProduct = {
  _id: string;
  count: number;
  price: number;
  description:string,
  // product: {
  //   _id: string;
  //   title: string;
  //   imageCover: string;
  //   description:string,

  //   category: {
  //     _id: string;
  //     name: string;
  //   };
  //   brand: {
  //     _id: string;
  //     name: string;
  //   };
  // };
  product:ProductType,
};

export type CartResponse = {
  _id: string;
  user: string;
  products: CartProduct[];
  totalCartPrice: number;
};
