'use server'
import { signupType } from '@/app/_Types/signupType';
import { cookies } from 'next/headers';

export default async function Registeraction(data:signupType) {

try {
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup' , {
    method:'post',
    body:JSON.stringify(data),

    headers:{
        'Content-Type':'application/json'
    }
  });
  const finalres = await res.json();
  console.log("finalres",finalres)
  return finalres
    

  if(finalres.message =='success'){
    const cookie = await  cookies();
    cookie.set('UserToken' , finalres.token,{
        httpOnly:true,
        maxAge:60*60,
        sameSite:'strict',
    });
  }

  } catch (error) {
    console.log("error",error)
  }
   

}

