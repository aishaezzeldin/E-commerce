
//الصح
// 'use server'
// import { signinType } from '@/app/_Types/signinType';
// import { cookies } from 'next/headers';

// export default async function Loginaction(data:signinType) {

// try {
//   const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin' , {
//     method:'post',
//     body:JSON.stringify(data),

//     headers:{
//         "Content-Type":"application/json"
//     }
//   });
//   const finalres = await res.json();
//   console.log("finalres",finalres)

//       if (res.ok && finalres.message === 'success') {
//       const cookieStore = cookies();
//       (await cookieStore).set('UserToken', finalres.token, {
//         httpOnly: true,
//         maxAge: 60 * 60,
//         sameSite: 'strict',
//       });
//       return { success: true, token: finalres.token, user: finalres.user };
//     } else {
//       return { success: false, error: finalres.message || 'Invalid email or password' };
//     }
//   } catch (error) {
//     console.error("error", error);
//     return { success: false, error: 'Something went wrong' };
//   }
// }
//---------------------------------------------------------------------------------------------

// 'use server'
// import { signinType } from '@/app/_Types/signinType';
// import { cookies } from 'next/headers';

// export default async function Loginaction(data: signinType) {
//   try {
//     const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: data.email,
//         password: data.password,
//       }),
//     });

//     const finalres = await res.json();
//     console.log("🔎 Raw API response:", finalres);

//     if (res.ok && finalres.message === 'success') {
//       const cookieStore = cookies();
//       (await cookieStore).set('UserToken', finalres.token, {
//         httpOnly: true,
//         maxAge: 60 * 60,
//         sameSite: 'strict',
//       });
//       return { success: true, token: finalres.token, user: finalres.user };
//     } else {
//       return { success: false, error: finalres.errors || finalres.message || 'Invalid credentials' };
//     }
//   } catch (error) {
//     console.error("❌ Network/Server error:", error);
//     return { success: false, error: 'Something went wrong' };
//   }
// }


  
















        // signIn('credentials',{...data,redirect:true,callbackUrl:'/'})
