"use client"
import { AddProducttocart } from '@/app/cart/cart.actions'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getToken } from 'next-auth/jwt'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export default  function AddBtnCart({id}:{id:string}) {

 async function handleaddproduct(){

    
   const res = await AddProducttocart(id);

   if(res && res.status==="success")
   {
        toast.success(' Added To Your Cart  ',{position:'top-right',duration:3000})
    
   }
   else{
        toast.error(' Failed To Add To Cart  ',{position:'top-right',duration:3000})

   }
    
  }

  return (
      <div className='flex  justify-center w-full  items-center'>
      {/* <div className='flex justify-center items-center'> */}
       <Button onClick={handleaddproduct}  className=" w-60 cursor-pointer text-center  bg-green-500 hover:bg-green-700">
        <FontAwesomeIcon icon={faPlus}/>
         Add To Cart
         </Button>

   </div>
  )
}
