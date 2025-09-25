'use server'
import { categoryType } from "@/app/_Types/categoryType";

export async function getAllCategories():Promise<categoryType[]|null>
{
  try {
    const res = await  fetch('https://ecommerce.routemisr.com/api/v1/categories',{cache:'force-cache'});
    const finalres = await res.json();

    return finalres.data;
    
  } catch (error) {
    console.log('erroe',error)
    return null
  }
}