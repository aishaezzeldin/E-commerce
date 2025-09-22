import { GetUserToken } from "@/utils/utils";
import { brandType } from "../_Types/brandType";
import { categoryType } from "../_Types/categoryType";
import { ProductdetailsType } from "../_Types/productdetails";
import { ProductType } from "../_Types/ProductType";
import { subcategoryType } from "../_Types/subcategoryType";
import { CartResponse } from "../_Types/cart";
import { wishlistType } from "../_Types/wishlistType";



//  export async function getAllProducts():Promise<ProductType[]|null>
// {

//   try {
//     const res = await  fetch('https://ecommerce.routemisr.com/api/v1/products',{cache:'force-cache'})
//     const finalres = await res.json();
//   return finalres.data;  
//   } catch (error) {
//     console.log("error",error)
//     return null
//   }
// };


// export async function getAllBrands():Promise<brandType[]|null>
// {
//   try {
//       const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands',{cache:'force-cache'})
//   const finalres = await res.json();
//   console.log("finalres",finalres)

//   return finalres.data
    
//   } catch (error) {
//   console.log("error",error)
//   return null
//   }

// }

// export async function getAllCategories():Promise<categoryType[]|null>
// {
//   try {
//     const res = await  fetch('https://ecommerce.routemisr.com/api/v1/categories',{cache:'force-cache'});
//     const finalres = await res.json();
//     return finalres.data;
    
//   } catch (error) {
//     console.log('erroe',error)
//     return null
//   }
// }


// export async function getAllSubCategories(id:string):Promise<subcategoryType[]|null>{
//   try {
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,{cache:'force-cache'})
//     const finalres = await res.json();
//     return finalres.data;
    
//   } catch (error) {
//     console.log("error",error);
//     return null
//   }

// }



// export async function getProductDetails(id:string):Promise<ProductType|null> {

//   try {
//   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,{cache:'force-cache'})
//   const finalres = await res.json();
//   return finalres.data;
    
//   } catch (error) {
//     console.log("error",error)
//     return null
//   }
// }


// export async function getUserCart():Promise<CartResponse | null>{
//     const Mytoken =  await  GetUserToken();

//       try {
//   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{

//     headers:{
//          token : Mytoken as string,
//     },
//     cache:"no-store"
//   })
//   const finalres = await res.json();
// //  console.log("finalres",finalres);
//  if(!finalres.data)
//  {
//   return null;
//  }
//  return finalres.data as CartResponse ;

//   }
//   catch (error) {
//     console.log("error",error)
//     return null
//   }
//   }



// export async function getUserWishlist():Promise<wishlistType | null>{
//     const Mytoken =  await  GetUserToken();

//       try {
//   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{

//     headers:{
//          token : Mytoken as string,
//     },
//     cache:"no-store"
//   })
//   const finalres = await res.json();
// //  console.log("finalres",finalres);
//  if(!finalres.data)
//  {
//   return null;
//  }
//  return finalres.data  ;

//   }
//   catch (error) {
//     console.log("error",error)
//     return null
//   }
//   }
















// export function filterID(AllBrands: brandType[] | null): brandType[] {
//   if (!AllBrands) return [];

//   const newList = new Set<string>();

//   return AllBrands.filter(brand => {
//     if (newList.has(brand._id)) {
//       return false; 
//     }
//     newList.add(brand._id);
//     return true; 
//   });
// }




