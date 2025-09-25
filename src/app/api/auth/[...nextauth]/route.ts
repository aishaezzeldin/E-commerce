import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from 'jwt-decode'

const handler = NextAuth({
        providers:[
        Credentials({

            name:'freash cart',

          async authorize (credentials, req) {


              const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
                    method:'post',
                    body:JSON.stringify(credentials),
                    headers:{
                        "Content-Type":"application/json"
                    }

                });
                const finalres = await res.json();
                const decodedObject:{id:string} = jwtDecode(finalres.token);
                


                if (res.ok && finalres) {
                    return{
                        id:decodedObject.id,
                        name:finalres.user.name,
                        email:finalres.user.email,
                        credentialToken:finalres.token,  
                    }
                    }

               return null;

            },

            credentials:{
                email:{},
                password:{},
            }
        })
    ],

    pages:{
        signIn:'/login'
    },


    callbacks:{
        jwt({token,user}) {

            if(user){
                {}
            token.credentialToken = user.credentialToken ;
            token.userID = user.id;
            token.email = user.email;


            }

            return token            
        },

        session({session,token}) {
            session.user.id = token.userID as string;
            session.user.email  = token.email as string;
            return session
        },
    },

})


export {handler as GET , handler as POST};

