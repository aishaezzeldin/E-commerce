"use server"
import { GetUserToken } from "@/utils/utils";
import { wishlistType } from "../_Types/wishlistType";




export async function DelFromWishlist(id:string)

{

const Mytoken =  await  GetUserToken();

    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
            method:'Delete',
            headers:{
                token:Mytoken as string,
            }
        })

        const finalreswish = await res.json();
        console.log("finalreswish",finalreswish)
         return finalreswish
    } 
    

    catch (error) {
        console.log("error",error)
        
    }
}

export async function AddToWishlist(productId:string){

const Mytoken =  await  GetUserToken();


  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',{
      method:"Post",
      body:JSON.stringify({productId}),
      headers:{
        'Content-Type':'application/json',
        token:Mytoken as string,
      }
    })

    const finalres = await res.json();
    // console.log("finalres",finalres)

    return finalres
    
  } catch (error) {
    console.log("error",error)
    
  }
  
}

export async function getUserWishlist():Promise<wishlistType | null>{
    const Mytoken =  await  GetUserToken();

      try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{

    headers:{
         token : Mytoken as string,
    },
    cache:"no-store"
  })
  const finalres = await res.json();
//  console.log("finalres",finalres);
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

