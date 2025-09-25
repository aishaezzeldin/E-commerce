'use server'
import { GetUserToken } from "@/utils/utils";

export async function GetSpecificAddress(id:string)  {

const {credentialToken} =  await  GetUserToken();

    
  try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`,{
    headers:{
        token : credentialToken as string,
    }
  })
  const finalres = await res.json();
  
  return finalres;
    
  } catch (error) {
    console.log("error",error)
  }
}
