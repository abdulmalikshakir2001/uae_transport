import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import { findUserByEmail } from '@/models/user';

import {compare} from 'bcryptjs'
export const { handlers, signIn, signOut, auth } = NextAuth({
  

  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      CredentialsProvider({
        name: "Credentials",

        
        credentials: {
      email: { label: "Email", type: "email" },
      password: {label: "Password", type: "password" }
        },
        authorize: async (credentials)=> {
          
          
            const email = credentials.email as string ;
            const password = credentials.password as string ;
            
            

            const user = await findUserByEmail(email);
            if(!user)  throw new Error("Invalid credentials")
           

            

            
          
            const isMatch =  await compare(password , user.password );
            // console.log('password result is : ',isMatch)
            if(!isMatch)  throw new Error("Password not matched")
           

            return {name:user.name, email:user.email,id:user.id};
            
            

          

          

          
   
   
  
   
          // return user object with their profile data
   
        },
      }),
  ],

  pages: {
    signIn: '/login',
   
  }
})