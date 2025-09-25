"use client";
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { addressType } from '../../_Types/addressType';
// import { AddAddress, GetAllAddresses, GetSpecificAddress } from './AddAddress.actions';
import { addressSchema } from './AddAddress.schema';
import { AddAddress } from './AddAddress.actions';

export default function AddressForm() {
        const router = useRouter();
    
    
     const RHFobject =  useForm(
        {
            mode:'onBlur',
            resolver:zodResolver(addressSchema)
        }
     );
     const {control,handleSubmit,formState:{errors},reset} = RHFobject;


    
async function SubmitFun(data:addressType){

    const res = await AddAddress({data});



        if(res && res.status==="success")
   {
        toast.success(res.message,{position:'top-right',duration:3000})
                 reset({
                name: "",
                details:"",
                city:"",
                phone: "",
            });
            router.push('/GetAllAddresses')


            return res.data;

   }
   else{
        toast.error(res.message,{position:'top-right',duration:3000})

   }

     }
  return (
    <>

        <Form {...RHFobject} >
            <form  onSubmit={handleSubmit(SubmitFun)} >

                {/* User Name */}
                <FormField
                control={control}
                name="name"
                render={({field}) => (
                    <FormItem className='mb-6'>
                    <FormLabel htmlFor='user-icon' className='block  text-sm font-medium text-gray-900 dark:text-white'></FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="text"
                id="user-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Vila/Appartment/Office"
            />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

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


            <Button type='submit'  className='cursor-pointer'>Save</Button>


            </form>

        </Form>
    
    
    </>
  )
}
