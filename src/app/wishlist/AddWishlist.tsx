"use client"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { toast } from 'sonner'
import { AddToWishlist } from './wishlist.actions'
// import { useRouter } from 'next/navigation'

export default function AddWishlist({id}:{id:string}) {


    async function handlewishlist(){
        const res  =  await AddToWishlist(id)
        if(res && res.status==="success")
   {
        toast.success(' Added To Your Wishlist  ',{position:'top-right',duration:3000})
    
   }
   else{
        toast.error(' Failed To Add To Wishlist  ',{position:'top-right',duration:3000})

   }

    }

  return (
        <span className="pe-3">
            <FontAwesomeIcon onClick={handlewishlist} icon={faHeart} className="w-7 h-7 text-3xl " />
        </span>
  )
}

