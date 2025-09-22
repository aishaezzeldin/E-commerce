import { ProductType } from "@/app/_Types/ProductType";

 export async function getAllProducts():Promise<ProductType[]|null>
{

  try {
    const res = await  fetch('https://ecommerce.routemisr.com/api/v1/products',{cache:'force-cache'})
    const finalres = await res.json();
  return finalres.data;  
  } catch (error) {
    console.log("error",error)
    return null
  }
};