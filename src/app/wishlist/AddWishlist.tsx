"use client"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { AddToWishlist } from './wishlist.actions'
import { useRouter } from 'next/navigation'

export default function AddWishlist({id}:{id:string}) {
    const [isWishlisted, setIsWishlisted] = useState(false); 


     const router = useRouter();

async function handlewishlist() {
  const res = await AddToWishlist(id);


  if (res && res.status === "success") {
    setIsWishlisted(true);
    toast( 
      <span
        onClick={() => router.push("/wishlist")}
        className="cursor-pointer inline-flex items-center gap-2"
        
      >
        Added To Your Wishlist — click to view
        <FontAwesomeIcon
          icon={faHeart}
          className="w-5 h-5 text-green-600"
        />
      </span>,
      { position: "top-right", duration: 3000 ,classNames:{
         toast:"bg-gray-600 text-white rounded-lg shadow-lg",
      }}
    );
  } else {
    toast.error(" Failed To Add To Wishlist", {
      position: "top-right",
      duration: 3000,
    });
  }
}

  return (
        <span className="pe-3">
            <FontAwesomeIcon onClick={handlewishlist} icon={faHeart} size='2x'   className={`cursor-pointer transition-colors  ${
           isWishlisted ? "text-green-700" : "text-green-500"
         }`} />
        </span>


//  <span className="pe-3">
//       <FontAwesomeIcon
//         onClick={handlewishlist}
//         icon={faHeart}
//         className={`w-7 h-7 text-3xl cursor-pointer transition-colors duration-300 ${
//           isWishlisted ? "text-red-600" : "text-gray-400"
//         }`}
//       />
  )



}


