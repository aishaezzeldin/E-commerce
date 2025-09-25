import { ProductType } from "../_Types/ProductType";

export async function getProductDetails(id:string):Promise<ProductType|null> {

  try {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,{cache:'force-cache'})
  const finalres = await res.json();
  return finalres.data;
    
  } catch (error) {
    console.log("error",error)
    return null
  }
}