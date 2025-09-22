export async function verfiycodeApi (resetCode:string)
{
    try {
            const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
        {
            method:'post',
            body:JSON.stringify({resetCode}),

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