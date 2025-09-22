// res [
//   {
//     sold: 3.0643459779910765e+303,
//     images: [
//       '1680403156555-3.jpeg',
//       '1680403156555-2.jpeg',
//       '1680403156554-1.jpeg',
//       '1680403156556-4.jpeg'
//     ],
//     subcategory: [ [Object] ],
//     ratingsQuantity: 18,
//     _id: '6428ead5dc1175abc65ca0ad',
//     title: 'Woman Shawl',
//     slug: 'woman-shawl',
//     description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
//     quantity: 220,
//     price: 149,
//     imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg',
//     category: {
//       _id: '6439d58a0049ad0b52b9003f',
//       name: "Women's Fashion",
//       slug: "women's-fashion",
//       image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg'
//     },
//     brand: {
//       _id: '64089bbe24b25627a253158b',
//       name: 'DeFacto',
//       slug: 'defacto',
//       image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png'
//     },
//     ratingsAverage: 4.8,
//     createdAt: '2023-04-02T02:39:17.204Z',
//     updatedAt: '2025-09-19T19:36:17.570Z',
//     __v: 0,
//     id: '6428ead5dc1175abc65ca0ad'
//   }
// ]

import { brandType } from "./brandType"
import { categoryType } from "./categoryType"


export type wishlistType = [
    {
        ratingsQuantity:number,
        title: string,
        description: string,
        quantity: number,
        price: number,
        imageCover: string,
        category:categoryType,
        brand:brandType,
        ratingsAverage:number,
        id:string
        _id:string

    }
]