"use client"
import React, { useState } from 'react'
import { resetpassApi } from './resetPass.actions';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

export default function ResetBtn() {

       const router =  useRouter();

const [email , setEmail]=  useState("");
const [newPassword , setnewPassword]=  useState("");




 async function handleResetPass(){
  const res = await resetpassApi(email,newPassword);
if (res && res.token) {
  toast.success("Password reset successful", {
    position: 'top-right',
    duration: 3000
  });

  signIn('credentials',{
    redirect:true,
    callbackUrl:'/',
    email,
    password:newPassword,
  })
}

   else{
        toast.error(res.message,{position:'top-right',duration:3000})

   }
 }
  return (
    <>
       <form
  onSubmit={(e) => {
    e.preventDefault();
    handleResetPass();
  }}
>
  <input
    type="email"
    placeholder="Enter Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="border w-full px-3 py-2 mb-3"
    required
  />
  <input
    type="password"
    placeholder="Enter New Password"
    value={newPassword}
    onChange={(e) => setnewPassword(e.target.value)}
    className="border w-full px-3 py-2 mb-3"
    required
  />
  <Button
    type="submit"
    className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 rounded-none bg-green-600 hover:bg-green-400 cursor-pointer my-5 text-sm sm:text-base"
  >
    Reset Password
  </Button>
</form>

    
    
    </>
  )
}
