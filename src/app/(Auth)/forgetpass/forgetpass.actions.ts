"use server"

export async function forgetpasswordApi(email:string){
    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',{

            method:"post",
            
            body:JSON.stringify({email}),
            headers:{
                "Content-Type": "application/json"

            }
            

        })
        const finalres = await res.json();
        console.log('finalres',finalres)

        return finalres;
        
    } 
    
    
    catch (error) {
        console.log("error",error);
        
        
    }
}