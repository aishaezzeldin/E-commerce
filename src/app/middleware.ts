import { NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import React from 'react'

export default async function middleware(req:NextApiRequest) {
 const jwt = await getToken({req})

 if(jwt){
    return NextResponse.next();
 }
 return NextResponse.redirect(`${process.env.MYDOMAIN_BASE}/login`);


  
}

export const config={
    matcher:['/products','brands','categories']
}
