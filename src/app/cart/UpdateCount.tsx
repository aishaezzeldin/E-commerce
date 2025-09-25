
"use client"
import { updateUserCart } from '@/app/cart/cart.actions'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function UpdateCount({ id, count }: { id: string; count: number }) {
  const router = useRouter();
  const [localCount, setLocalCount] = useState(count);

  async function handleUpdate(newCount: number) {
    if (newCount < 1) return; 
    setLocalCount(newCount);

    const res = await updateUserCart(newCount, id);

    if (res && res.status === "success") {
      toast.success('Updated', { position: 'top-right', duration: 3000 });
      router.refresh();
    } else {
      toast.error('Failed', { position: 'top-right', duration: 3000 });
    }
    console.log('res', res);
  }

  return (
    <div className="flex flex-1 items-center gap-2">
      <Button onClick={() => handleUpdate(localCount + 1)} className="cursor-pointer bg-green-500">+</Button>
      <p className="px-3">{localCount} </p>
      <Button onClick={() => handleUpdate(localCount - 1)} className="cursor-pointer bg-green-500">-</Button>
    </div>
  )
}



