"use client"
import { Button } from '@/components/ui/button'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'
import { DeleteAddress } from './DeleteAddress.actions'


// type DelBtnProps = {
//   cartId: string;
// };

export default function DelBtnAddress({id}:{id:string}) {
   const router =  useRouter();

  async function handledelbtn(){
   const res = await DeleteAddress(id)

    if(res && res.status === "success")
   {
        toast.success(' removed  ',{position:'top-right',duration:3000})
        router.refresh()
   }
   else{
        toast.error(' Failed   ',{position:'top-right',duration:3000})
   }
   console.log('res',res);
   }
    
    return (
    <>
        <Button onClick={handledelbtn} className="my-3 cursor-pointer bg-green-300 hover:bg-green-500">
                <FontAwesomeIcon icon={faTrash} className="w-5 h-5 mr-2" />
                remove
        </Button>
    </>

  )
}
