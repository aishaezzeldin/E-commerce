import React from 'react'

import Link from 'next/link'
import LoginForm from './loginForm'

export default function Login() {



  return (
    <> 


    <div className='w-1/2 h-screen mx-auto py-10 '>
    <h5 className='text-center text-4xl text-green-800'>Login</h5>

    <h2 className='text-center text-xl pt-4'> Do Not Have Account Yet? <Link  href={'../register'} className='text-red-600'>Sign Up Now</Link> </h2>

    
      <div className="max-w-sm mx-auto my-7">

        <LoginForm/>
        
      </div>


    </div>
    
  
    </>
  )
}