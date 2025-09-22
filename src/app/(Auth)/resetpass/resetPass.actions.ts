export async function resetpassApi (email:string ,newPassword:string  )
{
    try {
            const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
        {
            method:'put',
            body:JSON.stringify({newPassword , email}),

            headers:{
                'Content-Type':'application/json',
            }

        }
    )
    const finalres = await res.json();
    return finalres

    } 
    catch (error) {
        console.log("error",error)
        
    }

}