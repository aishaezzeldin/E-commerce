import React from "react";
import Image from "next/image";
import { getUserOrders } from "./allorders.actions";
import { GetUserToken } from "@/utils/utils";

export default async function HandleGetOrders() {
  const { userId } = await GetUserToken();

  if (!userId) {
    return <p className="text-red-600">No token found, please login.</p>;
  }

  const res = await getUserOrders(userId);

  if (!res || res.length === 0) {
    return <p className="text-gray-600">No orders found.</p>;
  }

  return (
    <div className="space-y-6">
      {res.map((order) => (
        <div key={order._id} className="border p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-green-700 mb-2">
            Order #{order.id}
          </h2>

          <p className="text-sm text-gray-600">
            Status:{" "}
            <span className="font-medium">
              {order.isDelivered ? "Delivered" : "Pending"}
            </span>
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Payment: <span className="font-medium">{order.paymentMethodType}</span>
          </p>

          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {order.cartItems.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 border rounded-md p-3 items-center"
              >
                <Image
                  src={item.product.imageCover}
                  alt={item.product.title}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.product.title}</h3>
                  <p className="text-sm text-gray-600">
                    Qty: {item.count} × EGP {item.price}
                  </p>
                  <p className="text-green-700 font-semibold">
                    Total: EGP {item.count * item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="mt-4 text-right font-bold text-lg">
            Order Total: EGP {order.totalOrderPrice}
          </div>
        </div>
      ))}
    </div>
  );
}
