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
