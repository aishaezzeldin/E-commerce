import React from 'react'
import RegisterForm from './RegisterForm'
import Link from 'next/link'

export default function Register() {



  return (
    <> 


    <div className='w-1/2 h-screen mx-auto py-10 '>
    <h5 className='text-center text-4xl text-green-800'>Sign Up</h5>

    <h2 className='text-center text-xl pt-4'>Already Have An Account? <Link  href={'../login'} className='text-red-600'>Login Now</Link> </h2>

    
      <div className="max-w-sm mx-auto my-7">

        <RegisterForm/>
        
      </div>


    </div>
    
  
    </>
  )
}



        {/* <div className='mb-6'>
          
        <label htmlFor="email-address-icon" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter User Email</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faEnvelope} className='w-4 h-4 text-black' />
          </div>
          <input type="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter User Email" />
        </div>

        </div>

        <div className='mb-6'>
             <label htmlFor="user-icon" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter User Name </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faUser} className='w-4 h-4 text-black' />
          </div>
          <input type="text" id="user-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter User Name" />
        </div>

        </div>

        <div className='mb-6'>
          <label htmlFor="password-icon" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter User Password </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FontAwesomeIcon icon={faKey} className='w-4 h-4 text-black' />
            </div>
            <input type="password" id="password-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter User Password" />
          </div>
          
        </div>

        <div className='mb-6'>
          <label htmlFor="repassword-icon" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter Repeated Password </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FontAwesomeIcon icon={faLock} className='w-4 h-4 text-black' />
            </div>
            <input type="password" id="repassword-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Repeated Password" />
          </div>
          
        </div>
        <div className='mb-6'>
          <label htmlFor="phone-icon" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Enter User Phone </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FontAwesomeIcon icon={faPhone} className='w-4 h-4 text-black' />
            </div>
            <input type="tel" id="phone-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter User Phone" />
          </div>
          
        </div>
        <Button/> */}



        {/* 
        
        {
    "name": "Ahmed Abd Al-Muti",
    "email":"ahmedmuttii4012@gmail.com",
    "password":"Ahmed@123",
    "rePassword":"Ahmed@123",
    "phone":"01010700701"
}
        
        
        */}


        {/* <form onSubmit={handleSubmit(SubmitFun)}>
            <Form {...RHFobject} >
          <FormField
            control={control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel htmlFor='user-icon' className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'>Enter User Name</FormLabel>
                <FormControl>
                  { <Input {...field} type="text" id="user-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter User Name'/>}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            </Form>


        </form> */}