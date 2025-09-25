"use client";
import React from 'react'
import { faKey, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { signupType } from '@/app/_Types/signupType'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import {schema} from './Register.schema'
import { zodResolver } from '@hookform/resolvers/zod';
import Registeraction from './register.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';




export default function RegisterForm() {
        const router = useRouter();
    
    
     const RHFobject =  useForm(
        {
            mode:'onBlur',
            resolver:zodResolver(schema)
        }
     );
     const {control,handleSubmit,formState:{errors},reset} = RHFobject;
    
    
      async function SubmitFun(data:signupType){
    const res = await Registeraction(data);


        if(res && res.message==="success")
   {
        toast.success(' Successfully Signed Up ',{position:'top-right',duration:3000})
                 reset({
                name: "",
                email: "",
                password: "",
                rePassword: "",
                phone: "",
            });
      router.push('../login')

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
                    <FormLabel htmlFor='user-icon' className='block  text-sm font-medium text-gray-900 dark:text-white'>Enter User Name</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="text"
                id="user-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter User Name"
            />
            <FontAwesomeIcon icon={faUser} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* User Email */}
                <FormField
                control={control}
                name="email"
                render={({field}) => (
                    <FormItem className='mb-6'>
                    <FormLabel htmlFor='email-address-icon' className='block text-sm font-medium text-gray-900 dark:text-white'>Enter User Email</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="email"
                id="email-address-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter User Email"
            />
            <FontAwesomeIcon icon={faEnvelope} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* User Password */}
                <FormField
                control={control}
                name="password"
                render={({field}) => (
                    <FormItem className='mb-6'>
                    <FormLabel htmlFor='password-icon' className='block text-sm font-medium text-gray-900 dark:text-white'>Enter User Password</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="password"
                id="password-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter User Password"
            />

            <FontAwesomeIcon icon={faKey} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                {/* User RePassword */}

                <FormField
                control={control}
                name="rePassword"
                render={({field}) => (
                    <FormItem className='mb-6'>
                    <FormLabel htmlFor='repassword-icon' className='block text-sm font-medium text-gray-900 dark:text-white'>Enter Repeated Password</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center">
            <Input
                {...field}
                type="password"
                id="repassword-icon"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-3 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter Repeated Password"
            />
            <FontAwesomeIcon icon={faLock} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" />
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
            <FontAwesomeIcon icon={faPhone} className="absolute inset-y-0 right-0 my-auto me-3 h-4 w-4 text-black" />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <Button type='submit'  className='cursor-pointer'>Sign Up</Button>

            </form>

        </Form>
    
    
    </>
  )
}


