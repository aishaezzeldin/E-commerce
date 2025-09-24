"use client"
// import { DelProductFromcart } from '@/app/cart/cart.actions'
import { Button } from '@/components/ui/button'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'
import { DelFromWishlist } from './wishlist.actions'


// type DelBtnProps = {
//   cartId: string;
// };

export default function DelBtnWishlist({id}:{id:string}) {
   const router =  useRouter();

  async function handledelbtn(){
   const res = await DelFromWishlist(id)

    if(res && res.status === "success")
   {
        toast.success(' removed  ',{position:'top-right',duration:3000})
        router.refresh();
   }
   else{
        toast.error(' Failed   ',{position:'top-right',duration:3000})
   }
   console.log('reswish',res);
   }
    
    return (
    <>
        <Button onClick={handledelbtn} className="my-3 cursor-pointer bg-green-500 hover:bg-green-400">
                <FontAwesomeIcon icon={faTrash} className="w-5 h-5 mr-2" />
                remove
        </Button>
    </>

  )
}
