// import React from 'react'
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faStar } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';
// import PriceHandler from '../PriceHandler/PriceHandler';
// import { Input } from '@/components/ui/input';
// import AddWishlist from '../../wishlist/AddWishlist';
// import AddBtn from '../../cart/AddBtnCart';
// import { getAllProducts } from './Product.actions';


// export default async function ProductCard() {

//     const AllProducts = await  getAllProducts(); 
//     return (
//     <>
//       <Input className="w-1/2 mx-auto my-10" />



//       <div className="grid grid-cols-4 gap-4 mx-2">
//         {AllProducts?.map((product) => (
          
//           <div
//             key={product.id}
//             className="border transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3"
//           >
//             <Link href={`../productdetails/${product.id}`}>
//               <Image
//                 height={200}
//                 width={200}
//                 src={product.imageCover}
//                 alt={product.title}
//                 className="w-full"
//               />

//               <div className="ps-3">
//                   <p className="text-green-400">{product.title}</p>

//                 <h5 className="">{product.category.name}</h5>
//                 <div className="flex justify-between items-center">
//                   <PriceHandler
//                     price={product.price}
//                     priceAfterDiscount={product.priceAfterDiscount}
//                   />
//                   <span className="flex items-center gap-1 pe-3 ">
//                     <FontAwesomeIcon
//                       icon={faStar}
//                       className="text-yellow-500 w-4 h-4"
//                     />
//                     {product.ratingsAverage}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//                <div className="ps-3 cursor-pointer ">

//                   <AddWishlist  id={product.id}/>
//                 </div>

//           <AddBtn id ={product.id}/>

//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// ---------------------------------------------------------------------------------------------------


// work and perfect 
import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import PriceHandler from '../PriceHandler/PriceHandler';
import { Input } from '@/components/ui/input';
import AddWishlist from '../../wishlist/AddWishlist';
import AddBtn from '../../cart/AddBtnCart';
import { getAllProducts } from './Product.actions';


export default async function ProductCard() {

    const AllProducts = await  getAllProducts(); 
    return (
    <>
      <Input className="w-1/2 mx-auto my-10" />


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-2">
  {AllProducts?.map((product) => (
    <div
      key={product.id}
      className="group border transition-transform duration-300 
                 hover:scale-105 hover:shadow hover:shadow-green-600 
                 border-gray-400 rounded-md m-3 relative overflow-hidden"
    >
      {/* Image + Overlay */}
      <div className="relative">
        <Image
          height={200}
          width={200}
          src={product.imageCover}
          alt={product.title}
          className="w-full rounded-t-md object-contain sm:object-cover"
        />

        {/* Hover Layer */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Background layer */}
          <div className="absolute inset-0 bg-gray-900 
                          opacity-0 group-hover:opacity-30 
                          transition-opacity duration-500">
          </div>

          {/* Icons */}
          <span className="relative text-white text-lg font-semibold flex gap-6 
                           opacity-0 group-hover:opacity-100 
                           translate-y-4 group-hover:translate-y-0 
                           transition-all duration-500">
            {/* AddToCart */}
            <div>
              <AddBtn id={product.id} />
            </div>

            {/* WishList */}
            <div>
              <AddWishlist id={product.id} />
            </div>

            {/* Details */}
            <div>
              <Link href={`../productdetails/${product.id}`}>
                <FontAwesomeIcon
                  icon={faEye}
                  size="2x"
                  className="text-green-500 cursor-pointer hover:scale-110 transition"
                />
              </Link>
            </div>
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="ps-3 py-3">
        <p className="text-green-400 line-clamp-1">{product.title}</p>
        <h5 className="text-sm text-gray-700">{product.category.name}</h5>
        <div className="flex justify-between items-center mt-2">
          <PriceHandler
            price={product.price}
            priceAfterDiscount={product.priceAfterDiscount}
          />
          <span className="flex items-center gap-1 pe-3 text-sm">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-4 h-4" />
            {product.ratingsAverage}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>


    </>
  );
}
// ---------------------------------------------------------------------------------------------------





















































