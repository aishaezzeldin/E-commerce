import { brandType } from "./brandType";
import { categoryType } from "./categoryType";
import { priceType } from "./priceType";

export type ProductType =  {

    title:string,
    description:string
    id:string,
    imageCover:string
    price:number,
    priceAfterDiscount?:number,
    category:categoryType,
    brand:brandType,
    ratingsAverage:number,
};
