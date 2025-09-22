import { subcategoryType } from "../_Types/subcategoryType";

export async function getAllSubCategories(id:string):Promise<subcategoryType[]|null>{
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,{cache:'force-cache'})
    const finalres = await res.json();
    return finalres.data;
    
  } catch (error) {
    console.log("error",error);
    return null
  }

}