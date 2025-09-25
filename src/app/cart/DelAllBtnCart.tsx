"use client"
import { DelAllProducts } from '@/app/cart/cart.actions'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export default function DelAllBtnCart() {
    const router =  useRouter();
    

    async function handledelall(){

        const res = await DelAllProducts();
        console.log('res',res);

        if (res && (res.status === "success" || res.message === "success")) 

        {
            toast.success('All Product Removed' ,{position:'top-right',duration:3000});
            router.refresh();
        }
         else{
                toast.error(' Failed To Remove , Try Again Later  ',{position:'top-right',duration:3000})
           }
    }
    
    return (
    <div>
    <Button onClick={handledelall} className="px-4">
        Clear Cart 
    </Button>
    </div>
  )
}

