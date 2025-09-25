import React from 'react'
import CreateOrderForm from './CreateOrderForm'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function paymentpage() {
  return (
    <div className="w-1/2 h-screen mx-auto py-10">
      <h5 className="text-center text-4xl text-green-800">Delivery Details</h5>

      <div className="max-w-sm mx-auto my-7">
        <CreateOrderForm/>
      </div>
    </div>
  );
}


