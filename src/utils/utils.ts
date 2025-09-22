import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


 export async function GetUserToken(){
   const TokenSession =( process.env.NODE_ENV === "production"?'__Secure-next-auth.session-token' : 'next-auth.session-token')
  const cookie = await cookies();
 const decodedToken =  cookie.get(TokenSession)?.value;
 const MyToken = await decode({
    token:decodedToken,
    secret:process.env.NEXTAUTH_SECRET!,
})


console.log("Decoded Token:", MyToken);

return MyToken?.credentialToken;


}