import { brandType } from "../_Types/brandType";

export async function getAllBrands():Promise<brandType[]|null>
{
  try {
      const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands',{cache:'force-cache'})
  const finalres = await res.json();

  return finalres.data
    
  } catch (error) {
  console.log("error",error)
  return null
  }

}