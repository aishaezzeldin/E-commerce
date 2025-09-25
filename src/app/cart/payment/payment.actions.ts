'use server'

import { cashorderType } from "@/app/_Types/cashorderType";
import { GetUserToken } from "@/utils/utils";
import { revalidatePath } from "next/cache";




// export async function createCashOrder({cartId,shippingAddress,}: {cartId: string;shippingAddress: cashorderType;}){

export async function createCashOrder(cartId: string,shippingAddress : cashorderType) {
  // const Mytoken = await GetUserToken();
  const {credentialToken} =  await  GetUserToken();

  if (!credentialToken) {
    console.error("No user token found");
    return null;
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: credentialToken,
      },
      body: JSON.stringify(shippingAddress),
    });

    console.log("res.res", res);
    

    if (!res.ok) {
      console.error("Failed to create order:");
      return null;
    }
    

    const data = await res.json();
    console.log("res.data", data);


    if(data.status==='success'){
    revalidatePath('/cart');
    }

    return data;
  } catch (err) {
    console.error("Error creating order:", err);
    return null;
  }
}
export async function createOnlineOrder(cartId: string,shippingAddress : cashorderType) {
  // const Mytoken = await GetUserToken();
  const {credentialToken} =  await  GetUserToken();

  if (!credentialToken) {
    console.error("No user token found");
    return null;
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: credentialToken,
      },
      body: JSON.stringify(shippingAddress),
    });

    

    if (!res.ok) {
      console.error("Failed to create order:");
      return null;
    }
    

    const data = await res.json();
    console.log("res.online", data);


    if(data.status==='success'){
    revalidatePath('/cart');
    }

    return data;
  } catch (err) {
    console.error("Error creating order:", err);
    return null;
  }
}


// export async function createcashorder(addressFromApi: {name: string;details: string;phone: string;city: string}) {

//     const Mytoken =  await  GetUserToken();
//  if (!Mytoken) {
//     console.error("No user token found");
//     return null;
//   }

//   // map the data to the new shape
//   const body = {
//     shippingAddress: {
//       details: addressFromApi.details,
//       phone: addressFromApi.phone,
//       city: addressFromApi.city,
//     }
//   };

//   try {
//     const res = await fetch("https://ecommerce.routemisr.com/api/v1/addresses", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         token: Mytoken
//       },
//       body: JSON.stringify(body)
//     });

//     if (!res.ok) {
//       console.error("Failed to transfer address:", res.status, await res.text());
//       return null;
//     }

//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error("Error transferring address:", err);
//     return null;
//   }
// }