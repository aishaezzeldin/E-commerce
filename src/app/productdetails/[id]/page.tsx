// import AddBtnCart from '@/app/cart/AddBtnCart';
// import PriceHandler from '@/app/_Components/PriceHandler/PriceHandler';
// import { propsType } from '@/app/_Types/propsType';
// import {  faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AddWishlist from '@/app/wishlist/AddWishlist';
// import { getProductDetails } from '../productdetails.actions';
// export default async function ProductDetails({params}:propsType) {

//   console.log("params",params)

//     const details = await getProductDetails(params.id);
    
//   return (
//   <>

//   <div className=' flex justify-center items-center'>


//   <div>
//     <img className='w-2/3'  src={details?.imageCover} alt={details?.title} />
//   </div>

//   <div className='py-3' >


//     <div className='flex justify-between'>
//     <h5 className='text-3xl '>{details?.title}</h5>

//        <span className="flex  items-center gap-1 pe-3 ">
//           <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-4 h-4" />
//           {details?.ratingsAverage}
//         </span>

//     </div>

//     <h3 className='text-2xl'>{details?.description}</h3>
//     <PriceHandler price={details?.price} priceAfterDiscount={details?.priceAfterDiscount} />

//     <div className='flex justify-between '>
//     <AddBtnCart id={details?.id} />

//     <AddWishlist id={details?.id}/>

//     </div>
//   </div>

//     </div>
      

//   </>
//   )
// }
import AddBtnCart from '@/app/cart/AddBtnCart';
import PriceHandler from '@/app/_Components/PriceHandler/PriceHandler';
import { propsType } from '@/app/_Types/propsType';
import {  faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddWishlist from '@/app/wishlist/AddWishlist';
import { getProductDetails } from '../productdetails.actions';


export default async function ProductDetails({ params }: propsType) {

  const {id} = params;


    const details = await getProductDetails(id);
    
  return (
  <>

  <div className=' flex justify-center items-center'>


  <div>
    <img className='w-2/3'  src={details?.imageCover} alt={details?.title} />
  </div>

  <div className='py-3' >


    <div className='flex justify-between'>
    <h5 className='text-3xl '>{details?.title}</h5>

       <span className="flex  items-center gap-1 pe-3 ">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-4 h-4" />
          {details?.ratingsAverage}
        </span>

    </div>

    <h3 className='text-2xl'>{details?.description}</h3>

    {details && (
  <>
    <h3 className="text-2xl">{details.description}</h3>

    <PriceHandler 
      price={details.price ?? 0} 
      priceAfterDiscount={details.priceAfterDiscount ?? undefined} 
    />

    <div className="flex justify-between">
      <AddBtnCart id={details.id ?? ""} />
      <AddWishlist id={details.id ?? ""} />
    </div>
  </>
)}


        {/* {details?.price !== undefined && (
      <PriceHandler 
        price={details.price} 
        priceAfterDiscount={details.priceAfterDiscount} 
      />
    )}

    <div className='flex justify-between '>
      {details?.id !== undefined && (
        <>
          <AddBtnCart id={details?.id} />

          <AddWishlist id={details?.id}/>
        </>

    )} */}
    {/* <AddBtnCart id={details?.id} />

    <AddWishlist id={details?.id}/> */}

    </div>
  </div>

    {/* </div> */}
      

  </>
  )
}









































































































// import { getProductDetails } from '@/app/functions'
// import React from 'react'

// export default async function ProductDetails({params}:{params:{id:string}}) {

//     const productData  = await getProductDetails(params.id);
//     const details = productData[0];

//     return (
//         <div className="container mx-auto p-4">
//             {details ? (
//                 <div className="flex flex-col md:flex-row gap-8">
//                     {/* Left side: Images */}
//                     <div className="md:w-1/2">
//                         <img 
//                             src={details.imageCover} 
//                             alt={details.title} 
//                             className="w-full h-auto rounded-lg shadow-lg" 
//                         />
//                         <div className="flex gap-2 mt-4 overflow-x-auto">
//                             {details.images.map((image, index) => (
//                                 <img 
//                                     key={index} 
//                                     src={image} 
//                                     alt={`${details.title} image ${index + 1}`} 
//                                     className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right side: Details */}
//                     <div className="md:w-1/2 flex flex-col justify-center">
//                         <h1 className="text-4xl font-bold text-gray-800">{details.title}</h1>
//                         <p className="mt-2 text-lg text-gray-600">{details.description}</p>
                        
//                         <div className="mt-4 flex items-center">
//                             <span className="text-3xl font-bold text-green-600">
//                                 {details.price} EGP
//                             </span>
//                             {/* You can add logic for discounted price here if the data includes it */}
//                         </div>

//                         <div className="mt-4 text-gray-700">
//                             <p><strong>Category:</strong> {details.category.name}</p>
//                             <p><strong>Brand:</strong> {details.brand.name}</p>
//                             <p><strong>Rating:</strong> {details.ratingsAverage} ★ ({details.ratingsQuantity} ratings)</p>
//                             <p><strong>Items Sold:</strong> {details.sold.toLocaleString()}</p>
//                         </div>
                        
//                         <button className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-500">Product not found.</p>
//             )}
//         </div>
//     )
// }