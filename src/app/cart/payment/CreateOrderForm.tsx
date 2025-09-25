"use client";
import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { shipingschema } from './payment.schema';
import { cashorderType } from '@/app/_Types/cashorderType';
import { createCashOrder, createOnlineOrder } from './payment.actions';
import { getUserCart } from '../cart.actions';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import DelAllBtnCart from '../DelAllBtnCart';




export default function CreateOrderForm() {
        const router = useRouter();
        const [PaymentMethod, setPaymentMethod] = useState<null|string>(null);
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
    console.log("Method",PaymentMethod)
  if (!cartId) return toast.error("Cart not found");
  if(PaymentMethod==='Cash')
  {
    const res = await createCashOrder(cartId, data); 
      if (res?.status === "success") {
    toast.success("success", { position: "top-right", duration: 3000 });
    reset({ details: "", city: "", phone: "" });
    router.push('/allorders')
    return res.data;

}
    else {
    toast.error(res?.message || "Failed to create order", {position: "top-right",duration: 3000,});
    }
  }

  else if (PaymentMethod==='Online')
  {
    const res = await createOnlineOrder(cartId, data); 
        console.log('onlineres',res)

      if (res?.status === "success") { 
        window.location.href=res.session.url;
    toast.success("success", { position: "top-right", duration: 3000 });
    reset({ details: "", city: "", phone: "" });
    return res.data;}
    else {
    toast.error(res?.message || "Failed to create order", {position: "top-right",duration: 3000,});
    }
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

              <RadioGroup onValueChange={(val)=>setPaymentMethod(val)} className='flex justify-between items-center' >
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Cash" id="Cash" />
                <Label htmlFor="Cash">Cash Payment</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Online" id="Online" />
                <Label htmlFor="Online">Online Payment</Label>
            </div>
            </RadioGroup>


            <Button type='submit'  className='cursor-pointer mt-3'>Place Cash Order</Button>

            </form>

        </Form>
    
    
    </>
  )
}
