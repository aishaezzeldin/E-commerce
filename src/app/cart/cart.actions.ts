"use server"
import { GetUserToken } from "@/utils/utils";
import { AddToCartResponse} from "../_Types/cart";



export async function DelAllProducts(){
const {credentialToken} =  await  GetUserToken();


  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart',
      {
        method:'DELETE',
        headers:{
          token:credentialToken as string
        }
      }
    ) 
    const finalres = await res.json();

    return finalres
    
  }

  
  catch (error) {
    console.log("error",error)
    
  }
}


export async function AddProducttocart(productId: string) {
const {credentialToken} =  await  GetUserToken();

  if (!credentialToken) {
    console.error("No user token found");
    return null;
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
      method: "post",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-Type": "application/json",
        token: credentialToken as string,
      },
    });

    const finalres = await res.json();

    
    return finalres;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}


export async function DelProductFromcart (id:string){
const {credentialToken} =  await  GetUserToken();


  try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    method:'Delete',
    headers:{
      token:credentialToken as string ,
    }
  })

  const finalres = await res.json();
  return finalres
    
  } catch (error) {
    console.log("error",error)
    
  }

}


export async function getUserCart():Promise<AddToCartResponse | null>{
const {credentialToken} =  await  GetUserToken();


      try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{

    headers:{
         token : credentialToken as string,
    },
    
    
  })
  const finalres = await res.json();

 
 if(!finalres.data)
 {
  return null;
 }
 return finalres ;

  }
  catch (error) {
    console.log("error",error)
    return null
  }
  }

export async function updateUserCart (count:number ,productId: string )
{
const {credentialToken} =  await  GetUserToken();

    try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
            method:'put',
            body:JSON.stringify({count}),

            headers:{
              token:credentialToken as string,
                'Content-Type':'application/json',
            }

        }
    )
    const finalres = await res.json();
    return finalres

    } 
    catch (error) {
        console.log("error",error)
        
    }

}



