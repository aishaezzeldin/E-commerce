import { CartProduct } from '@/app/_Types/cart'
import { priceType } from '@/app/_Types/priceType'
import React from 'react'

export default function PriceHandler({price,priceAfterDiscount}:priceType) {
  return (
      <div className="flex gap-2">
          {priceAfterDiscount ? (
            <>
              <span className='line-through text-red-700' >
                {price} EGP
              </span>
              <span className="">
                {priceAfterDiscount} EGP
              </span>
            </>
          ) : (
            <span>{price} EGP</span>
          )}
        </div>
  )
}

// export default function PriceHandler({price,priceAfterDiscount}:priceType) {
//   return (
//       <div className="flex gap-2">
//           {priceAfterDiscount ? (
//             <>
//               <span className='line-through text-red-700' >
//                 {price} EGP
//               </span>
//               <span className="">
//                 {priceAfterDiscount} EGP
//               </span>
//             </>
//           ) : (
//             <span>{price} EGP</span>
//           )}
//         </div>
//   )
// }


