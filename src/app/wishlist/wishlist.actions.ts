"use server"
import { GetUserToken } from "@/utils/utils";
import { wishlistType } from "../_Types/wishlistType";




export async function DelFromWishlist(id:string)

{

const {credentialToken} =  await  GetUserToken();


    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
            method:'Delete',
            headers:{
                token:credentialToken as string,
            }
        })

        const finalreswish = await res.json();
         return finalreswish
    } 
    

    catch (error) {
        console.log("error",error)
        
    }
}

export async function AddToWishlist(productId:string){

const {credentialToken} =  await  GetUserToken();



  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',{
      method:"Post",
      body:JSON.stringify({productId}),
      headers:{
        'Content-Type':'application/json',
        token:credentialToken as string,
      }
    })

    const finalres = await res.json();

    return finalres
    
  } catch (error) {
    console.log("error",error)
    
  }
  
}

export async function getUserWishlist():Promise<wishlistType | null>{
    const {credentialToken} =  await  GetUserToken();


      try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{

    headers:{
         token : credentialToken as string,
    },
    cache:"no-store"
  })
  const finalres = await res.json();
 if(!finalres.data)
 {
  return null;
 }
 return finalres.data  ;

  }
  catch (error) {
    console.log("error",error)
    return null
  }
  }

