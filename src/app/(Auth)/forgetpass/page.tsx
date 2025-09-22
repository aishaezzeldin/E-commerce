import { Button } from '@/components/ui/button'
import { faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ForgetPassBtn from './forgetpassBtn'

export default function forgetPass() {
  return (

    <>
    <div className="text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto   flex flex-col justify-center py-8 items-center px-4">
  
  {/* Lock Icon */}
  <div className="rounded-full w-16 h-16 bg-green-600 flex items-center justify-center">
    <FontAwesomeIcon icon={faLock} className="text-white w-8 h-8" />
  </div>

  {/* Paragraph */}
  <p className="my-6 w-full sm:w-3/4  sm:text-base text-3xl">
    You can request a password reset below. We will send a security code to the email address.
  </p>

  {/* Button */}
  <ForgetPassBtn />


   {/* Support text */}

  <p className="pt-8 text-sm sm:text-base">
    For further support, you may visit the Help Center or contact our customer service team.
  </p>

  {/* Footer */}
  <div className="flex pt-8 justify-center items-center gap-2 text-sm sm:text-base font-bold"> 
    Fresh Cart 
    <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
  </div>

</div>



    </>

  )
}

