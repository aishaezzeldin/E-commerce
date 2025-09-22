'use server'
import { GetUserToken } from "@/utils/utils";
import { addressType } from "../../_Types/addressType";


export async function AddAddress({ data }: { data: addressType }) {

const Mytoken =  await  GetUserToken();
    
  try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`,{
    method:"post",
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json',
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









