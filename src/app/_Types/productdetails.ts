export type ProductdetailsType =  {

    title:string,
    description:string,
    price:number,
    images:[string],
    id:string,
    priceAfterDiscount?:number,
    ratingsAverage:number,
    
};

// export type ProductdetailsType = {
//     title: string;
//     description: string;
//     price: number;
//     images: string[]; // Corrected to an array of strings
//     id: string;
//     priceAfterDiscount?: number;
//     ratingsAverage: number;
    
//     // Add the missing fields from the API response
//     sold: number;
//     subcategory: {
//         _id: string;
//         name: string;
//         slug: string;
//         category: string;
//     }[]; // This is an array of objects
//     ratingsQuantity: number;
//     _id: string; // The API uses _id
//     slug: string;
//     quantity: number;
//     imageCover: string;
//     category: {
//         _id: string;
//         name: string;
//         slug: string;
//         image: string;
//     };
//     brand: {
//         _id: string;
//         name: string;
//         slug: string;
//         image: string;
//     };
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
// };
