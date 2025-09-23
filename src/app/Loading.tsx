import { Spinner } from '@/components/ui/shadcn-io/spinner'
import React from 'react'

export default function Loading() {
  return (
    <>
    <div className='h-screen w-full flex justify-center items-center' >
    <Spinner size={100}/>
    </div>
    
    </>
  )
}
