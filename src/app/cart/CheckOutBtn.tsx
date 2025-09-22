"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
// import RegisterForm from '../address/AddressForm';

export default function CheckOutBtn() {
 const router = useRouter();


 function handleAddAddress(){
  // RegisterForm()
  // router.push('../(AddressList)/AddAddress')
      router.push('/AddAddress');
      // router.push('../')



 }
  return (
    <>

      <Button onClick={handleAddAddress} className="block w-full md:w-2/3 mx-auto my-6 cursor-pointer">
        COMPLETE ORDER
      </Button> 
    
    </>
  )
}
