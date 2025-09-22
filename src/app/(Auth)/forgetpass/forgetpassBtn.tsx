"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { forgetpasswordApi } from './forgetpass.actions'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function ForgetPassBtn() {

    const router = useRouter();

  const [email, setEmail] = useState("")

   async function handleforgetpass(){
    //  if (!email) return alert("No email found in session!");
    const res = await  forgetpasswordApi(email);
    console.log("Forget res" , res)

        


    if(res && res.statusMsg==="success")
   {
        toast.success(' Reset code sent to your email  ',{position:'top-right',duration:3000})
      router.push('../verfiycode')

    
   }
   else{
        // toast.error(' Reset code is invalid or has expired  ',{position:'top-right',duration:3000})

   }




    // console.log("PassRes",res)
    //  alert(res.message || "If this email exists, we sent a reset link.")
    }
  return (
    <>
        <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border w-full px-3 py-2 mb-3"
      />
     <Button onClick={handleforgetpass} className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 rounded-none bg-green-600 hover:bg-green-400 cursor-pointer my-5 text-sm sm:text-base">
        Request Password Reset
    </Button>
    
    </>
  )
}
