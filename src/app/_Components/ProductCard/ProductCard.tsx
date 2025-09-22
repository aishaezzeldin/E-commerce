import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from '@/components/ui/button';
import {faStar } from '@fortawesome/free-solid-svg-icons';
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
      <div className="grid grid-cols-4 gap-4 mx-2">
        {AllProducts?.map((product) => (
          <div
            key={product.id}
            className="border transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3"
          >
            <Link href={`../productdetails/${product.id}`}>
              <Image
                height={200}
                width={200}
                src={product.imageCover}
                alt={product.title}
                className="w-full"
              />
              <div className="ps-3">
                  <p className="text-green-400">{product.title}</p>


                {/* <div className="flex justify-between">
                  <p className="text-green-400">{product.title}</p>

                  <AddWishlist id={product.id}/>
                </div> */}

                <h5 className="">{product.category.name}</h5>
                <div className="flex justify-between items-center">
                  <PriceHandler
                    price={product.price}
                    priceAfterDiscount={product.priceAfterDiscount}
                  />
                  <span className="flex items-center gap-1 pe-3 ">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 w-4 h-4"
                    />
                    {product.ratingsAverage}
                  </span>
                </div>
              </div>
            </Link>
               <div className="ps-3 cursor-pointer ">

                  <AddWishlist  id={product.id}/>
                </div>

          <AddBtn id ={product.id}/>

          </div>
        ))}
      </div>
    </>
  );
}
    
//   return (
//     <>

//     <Input className='w-1/2 mx-auto my-10'/>
//     <div className=" grid grid-cols-4 gap-4 mx-2 ">
//       {AllProducts?.map(product=> 
//       <Link href={`../productdetails/${product.id}`} key={product.id} className="border transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3 " >

//         <Image height={200} width={200} src={product.imageCover} alt={product.title} className="w-full" />
//         <div className="ps-3" >
//           <div className='flex justify-between'>
//             <p className="text-green-400">{product.title}</p>  
//            <span className='pe-3'>
//         <FontAwesomeIcon icon={faHeart} className='w-6 h-6 '/>
//         </span> 
//           </div>
        
//         <h5 className="">{product.category.name}</h5>
//         <div className="flex justify-between items-center">

//         <PriceHandler price={product.price} 
//         priceAfterDiscount={product.priceAfterDiscount}
//         />

//         <span className="flex items-center gap-1 pe-3 ">
//           <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-4 h-4" />
//           {product.ratingsAverage}
//         </span>
      
//       </div>

  

//         </div>
      

//         <ButtonHandler/>
//       </Link> 
//     )} 


//     </div>
    
    
//     </>
//   )
// }
