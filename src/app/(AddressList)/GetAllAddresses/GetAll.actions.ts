'use server'

import { GetUserToken } from "@/utils/utils";

export async function GetAllAddresses() {

const Mytoken =  await  GetUserToken();
    
  try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`,{
    headers:{
        token : Mytoken as string,
    }
  })
  const finalres = await res.json();
  console.log("finalresasress",finalres);
  
  return finalres;
    
  } catch (error) {
    console.log("error",error)
  }
}


