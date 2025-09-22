import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


 export async function GetUserToken(){
  const cookie = await cookies();
 const decodedToken =  cookie.get('next-auth.session-token')?.value;
 const MyToken = await decode({
    token:decodedToken,
    secret:process.env.NEXTAUTH_SECRET!,
})


console.log("Decoded Token:", MyToken);

return MyToken?.credentialToken;


}