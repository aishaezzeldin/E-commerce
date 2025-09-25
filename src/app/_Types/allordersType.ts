export type OrderType =  {
  _id: string;
  id: number;
  isDelivered: boolean;
  isPaid: boolean;
  paymentMethodType: string;
  totalOrderPrice: number;
  cartItems: {
    _id: string;
    count: number;
    price: number;
    product: {
      _id: string;
      title: string;
      imageCover: string;
    };
  }[];
  createdAt: string;
  updatedAt: string;
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
}
