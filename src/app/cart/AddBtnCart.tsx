"use client"
import { AddProducttocart } from '@/app/cart/cart.actions'
import { Button } from '@/components/ui/button'
import { faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

import { toast } from 'sonner'

export default  function AddBtnCart({id}:{id:string}) {

 const router =  useRouter()


 async function handleaddproduct(){
     const res = await AddProducttocart(id);
       if (res && res.status === "success") {
         toast( 
           <span
             onClick={() => router.push("/cart")}
             className="cursor-pointer inline-flex items-center gap-2"
             
           >
             Added To Your Cart — click to view
             <FontAwesomeIcon
               icon={faShoppingCart}
               className="w-5 h-5 text-green-600"
             />
           </span>,
           { position: "top-right", duration: 3000 ,classNames:{
              toast:"bg-gray-600 text-white rounded-lg shadow-lg",
           }}
         );
       } else {
         toast.error(" Failed To Add To Cart", {
           position: "top-right",
           duration: 3000,
         });
       }
  }

  return (
      <div className='flex  justify-center w-full  items-center'>
        <FontAwesomeIcon onClick={handleaddproduct}
              icon={faShoppingCart}
              size="2x"
              className="text-green-500 cursor-pointer hover:scale-110 transition"
            />

   </div>
  )
}






