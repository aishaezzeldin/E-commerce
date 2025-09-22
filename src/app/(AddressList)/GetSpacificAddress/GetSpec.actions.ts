// import { AddressResponse } from "@/app/_Types/addressType";
'use server'
import { GetUserToken } from "@/utils/utils";

export async function GetSpecificAddress(id:string)  {

const Mytoken =  await  GetUserToken();
    
  try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`,{
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
// import { AddressResponse } from "@/app/_Types/addressType";
// import { GetUserToken } from "@/utils/utils";

// export async function GetSpecificAddress(id:string) :Promise<AddressResponse | null> {

// const Mytoken =  await  GetUserToken();
    
//   try {
//   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`,{
//     headers:{
//         token : Mytoken as string,
//     }
//   })
//   const finalres = await res.json();
//   console.log("finalresasress",finalres);
  
//   return finalres;
    
//   } catch (error) {
//     console.log("error",error)
//     return null;
//   }
// }