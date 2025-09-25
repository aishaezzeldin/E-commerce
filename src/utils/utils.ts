'use server'
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



// return MyToken?.credentialToken;


  return {
    credentialToken: MyToken?.credentialToken, 
    userId:MyToken?.userID,
    name:MyToken?.name,
  };



}


//  Server  Decoded Token: {name: 'Aisha Ashraf Ezz-Eldin', email: 'aishaashraf8320@gmail.com', sub: '68cd247667868197251ce92a', credentialToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y…YxNn0.jS_3bnQaBO2xyULZjO7QaxugGAsA8HpKuZyaWkcI-xs', userID: '68cd247667868197251ce92a', …}credentialToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2QyNDc2Njc4NjgxOTcyNTFjZTkyYSIsIm5hbWUiOiJBaXNoYSBBc2hyYWYgRXp6LUVsZGluIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTg3OTI2MTYsImV4cCI6MTc2NjU2ODYxNn0.jS_3bnQaBO2xyULZjO7QaxugGAsA8HpKuZyaWkcI-xs"email: "aishaashraf8320@gmail.com"exp: 1761384649iat: 1758792649jti: "d0e6bd31-0b4e-4a18-98a3-ae8ce1fd070b"name: "Aisha Ashraf Ezz-Eldin"sub: "68cd247667868197251ce92a"userID: "68cd247667868197251ce92a"[[Prototype]]: Object
