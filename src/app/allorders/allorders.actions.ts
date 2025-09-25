'use server'

import { OrderType } from "../_Types/allordersType";


export async function getUserOrders(userID: string): Promise<OrderType[] | null> {

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`);

    

    if (!res.ok) {
      console.error("Failed to Get order:");
      return null;
    }
    

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error creating order:", err);
    return null;
  }
}