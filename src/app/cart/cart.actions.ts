"use server"
import { GetUserToken } from "@/utils/utils";
import { CartResponse } from "../_Types/cart";



export async function DelAllProducts(){
    const Mytoken =  await  GetUserToken();

  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart',
      {
        method:'DELETE',
        headers:{
          token:Mytoken as string
        }
      }
    ) 
    const finalres = await res.json();
    // console.log("finalresofdelete ",finalres)

    return finalres
    
  }

  
  catch (error) {
    console.log("error",error)
    
  }
}


export async function AddProducttocart (productId:string) {

const Mytoken =  await  GetUserToken();
    
  try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
    method:"post",
    body:JSON.stringify({productId}),
    headers:{
        'Content-Type':'application/json',
        token : Mytoken as string,
    }
  })
  const finalres = await res.json();
  // console.log("finalres",finalres);
  
  return finalres;
    
  } catch (error) {
    console.log("error",error)
    return null
  }
}

export async function DelProductFromcart (id:string){
const Mytoken =  await  GetUserToken();


  try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    method:'Delete',
    headers:{
      token:Mytoken as string,
    }
  })

  const finalres = await res.json();
  return finalres
    
  } catch (error) {
    console.log("error",error)
    
  }



  
  // console.log("finalres",finalres)

}


export async function getUserCart():Promise<CartResponse | null>{
    const Mytoken =  await  GetUserToken();

      try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{

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
 return finalres.data as CartResponse ;

  }
  catch (error) {
    console.log("error",error)
    return null
  }
  }




