import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from 'jwt-decode'

// type credentialTokenType = {
//     credentialToken:string

// }


const handler = NextAuth({
        providers:[
        Credentials({

            name:'freash cart',

          async authorize (credentials, req) {

            console.log("credentials",credentials)

              const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
                    method:'post',
                    body:JSON.stringify(credentials),
                    headers:{
                        "Content-Type":"application/json"
                    }

                });
                const finalres = await res.json();
                // console.log("finalresofsignin",finalres);
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
        // console.log("🔑 [JWT callback] before:", token);

            if(user){
                {}
            token.credentialToken = user.credentialToken ;
            token.userID = user.id;
            token.email = user.email;


            }
            // console.log("🔑 [JWT callback] after:", token);

            return token
            // console.log("params",params)

            
        },

        session({session,token}) {
            // console.log("sesionparams",params)
                // console.log("📦 [Session callback] before:", session);

            session.user.id = token.userID as string;
            session.user.email  = token.email as string;
            // console.log("📦 [Session callback] before:", session);

            return session
        },
    },


    session:{
        // maxAge:60*60
    }


})


export {handler as GET , handler as POST};





    // token: {
    // name: 'Ashraf Ezz Eldin',
    // email: 'ashrafezz1234@gmail.com',
    // picture: undefined,
    // sub: ''
    // }

//     user: {
//     id: '',
//     name: 'Ashraf Ezz Eldin',
//     email: 'ashrafezz1234@gmail.com'
//   },
//   account: {
//     providerAccountId: '',
//     type: 'credentials',
//     provider: 'credentials'
//   },
//   isNewUser: false,
//   trigger: 'signIn'
// }
