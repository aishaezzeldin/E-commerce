import { brandType } from "../_Types/brandType";

export async function getSubBrand(id:string):Promise<brandType|null>
{
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
        const finalres = await res.json();
        return finalres;
        
    } 
    
    catch (error) {
        console.log("error",error);
        return null;
        
    }
} 