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




// export async function getAllProducts(
//   page: number = 1,
//   limit: number = 10
// ): Promise<ProductType[] | null> {
//   try {
//     const res = await fetch(
//       `https://ecommerce.routemisr.com/api/v1/products?page=${page}&limit=${limit}`,
//       { cache: "force-cache" } 
//     );

//     const finalres = await res.json();
//     return finalres.data; 
//   } catch (error) {
//     console.log("error", error);
//     return null;
//   }
// }
