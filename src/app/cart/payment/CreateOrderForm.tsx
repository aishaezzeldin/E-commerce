"use client";
import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { shipingschema } from './cashorder.schema';
import { cashorderType } from '@/app/_Types/cashorderType';
import { createCashOrder } from './cashorder.actions';
import { getUserCart } from '../cart.actions';


export default function CreateOrderForm() {
        const router = useRouter();
    const[cartId,setCartId]  = useState<null|string>(null)
    
    
    const RHFobject =  useForm(
        {
            mode:'onBlur',
            resolver:zodResolver(shipingschema)
        }
     );
     const {control,handleSubmit,formState:{errors},reset} = RHFobject;



     async function handlingGetCart(){
        const res = await getUserCart();
            if (res?.cartId) {
        setCartId(res.cartId);
        }
     }


useEffect(function(){

    handlingGetCart()


},[]);

    
async function SubmitFun(data: cashorderType) {
  if (!cartId) return toast.error("Cart not found");

  const res = await createCashOrder(cartId, data); // pass separately

//   console.log("order res:", res);

  if (res?.status === "success") {
    toast.success("success", { position: "top-right", duration: 3000 });
    reset({ details: "", city: "", phone: "" });
    // console.log("res.data", res.data);
// res.data {taxPrice: 0, shippingPrice: 0, totalOrderPrice: 2724, paymentMethodType: 'cash', isPaid: false, …}cartItems: Array(4)0: {count: 10, _id: '68d043ccd60729a936767ac3', product: '6428ead5dc1175abc65ca0ad', price: 149}1: {count: 5, _id: '68d0be70d60729a936790d0f', product: '6428eb43dc1175abc65ca0b3', price: 149}2: {count: 1, _id: '68d0be72d60729a936790d20', product: '6428ebc6dc1175abc65ca0b9', price: 191}3: {count: 2, _id: '68d10f53d60729a93679b5a5', product: '6428e997dc1175abc65ca0a1', price: 149}length: 4[[Prototype]]: Array(0)createdAt: "2025-09-23T09:35:35.296Z"id: 66841isDelivered: falseisPaid: falsepaymentMethodType: "cash"shippingPrice: 0taxPrice: 0totalOrderPrice: 2724updatedAt: "2025-09-23T09:35:35.296Z"user: "68cd247667868197251ce92a"__v: 0_id: "68d269e7cf081ebcc1c7aacb"[[Prototype]]: Object

    return res.data;
  } else {
    toast.error(res?.message || "Failed to create order", {
      position: "top-right",
      duration: 3000,
    });
  }
}
  return (
    <>

        <Form {...RHFobject} >
            <form  onSubmit={handleSubmit(SubmitFun)} >



                {/* User Address */}
                <FormField
                control={control}
                name="details"
                render={({field}) => (
                    <FormItem className='mb-6'>
                    <FormLabel htmlFor='user-icon' className='block  text-sm font-medium text-gray-900 dark:text-white'>Address Details</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="text"
                id="user-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter Address Details "
            />
            {/* <FontAwesomeIcon icon={faUser} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" /> */}
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />


                {/* User City */}
                <FormField
                control={control}
                name="city"
                render={({field}) => (
                    <FormItem className='mb-6'>
                    <FormLabel htmlFor='user-icon' className='block  text-sm font-medium text-gray-900 dark:text-white'>The City</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="text"
                id="user-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter The City "
            />
            {/* <FontAwesomeIcon icon={faUser} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" /> */}
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />


                {/* User Phone */}

                <FormField
                control={control}
                name="phone"
                render={({field}) => (
                    <FormItem className='mb-6'>
                    <FormLabel htmlFor='phone-icon' className='block text-sm font-medium text-gray-900 dark:text-white'>Enter User Phone</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="tel"
                id="phone-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter User Phone"
            />
            {/* <FontAwesomeIcon icon={faPhone} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" /> */}
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />


            <Button type='submit'  className='cursor-pointer'>Place Cash Order</Button>

            </form>

        </Form>
    
    
    </>
  )
}
