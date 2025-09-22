"use client";
import React from 'react'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './login.schema';
// import Loginaction from './login.actions';
import { signinType } from '@/app/_Types/signinType';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'sonner';
import Link from 'next/link';


export default  function LoginForm() {

      const { data: session, status } = useSession();

  console.log("⚡ Session from client:", session, "Status:", status);



    
     const RHFobject =  useForm(
        {
            mode:'onBlur',
            resolver:zodResolver(schema)
        }
     );
     const {control,handleSubmit,formState:{errors},reset} = RHFobject;
    
    
    async function SubmitFun(data:signinType){
        // const result = await Loginaction(data);
       const res = await signIn('credentials',{...data,redirect:false})

  if (res?.ok) {
    toast.success('Welcome Back',{position:'top-right',duration:3000})
      window.location.href = "/";
    }

    else{
        toast.error("Email or Password is in correct" , {position:'top-right',duration:3000})
    }

}
     
  return (
    <>

        <Form {...RHFobject} >
            <form  onSubmit={handleSubmit(SubmitFun)} >



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

                
            <Button type='submit'  className='cursor-pointer'>Login</Button>


            <Link href={'../forgetpass'} > Forget Your Password?</Link>

            </form>

        </Form>
    
    
    </>
  )
}



