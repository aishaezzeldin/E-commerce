"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { verfiycodeApi } from './verfiycode.actions'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function VerfiypassBtn() {
   const router =  useRouter();

 const [resetCode , setresetCode]=   useState("")

 async  function  handleverfiycode()
 {
    const res = await verfiycodeApi(resetCode);
    console.log("virfy res" , res)


       if(res && res.status==="Success")
   {
        router.push('../resetpass')
    
   }
   else{
        toast.error(' Reset code is invalid or has expired  ',{position:'top-right',duration:3000})

   }

    // console.log("resverfiy",res)

 }

  return (
    <>

          <input
            type="text"
            placeholder="Enter The Code"
            value={resetCode}
            onChange={(e) => setresetCode(e.target.value)}
            className="border w-full px-3 py-2 mb-3"
          />
         <Button onClick={handleverfiycode} className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 rounded-none bg-green-600 hover:bg-green-400 cursor-pointer my-5 text-sm sm:text-base">
            Verfiy
        </Button>

    
    </>
  )
}
