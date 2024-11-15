import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { prisma } from "@/utils/prisma";
  import { redirect } from 'next/navigation';
  import{hash}  from 'bcryptjs';
  import { registrationSchema } from "@/lib/zod/schemas";
export default function Page() {
  return (
    <div className='flex justify-center'>

    <Card className='w-1/2'>
  <CardHeader>
    <CardTitle>Register</CardTitle>
    
  </CardHeader>
  <CardContent >

  <form action={
     async function registration(formData: FormData) {
        'use server'
        const userRegistrationDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
          }

          const result = registrationSchema.safeParse(userRegistrationDetails);
          
          if (!result.success) {
            console.log(result.error.format());
            return;
          }



          const existingUser = await prisma.user.findUnique({
            where: {
              email: userRegistrationDetails.email as string,
            },
          });
        
          // If user exists, throw an error
          if (existingUser) {
            console.log('user already exists')
            return ;
          }

          const hashedPassword  =  await hash (userRegistrationDetails.password as string,10)
          await prisma.user.create({
            data: {
              name:userRegistrationDetails.name as string,
              email:userRegistrationDetails.email as string,
              password: hashedPassword,
            },
          })
        redirect('/login')
          
          


      }
  }>
    <div className='flex flex-col gap-4'>
  <Input type="text" placeholder="Name" name='name' />
  <Input type="email" placeholder="Email"  name='email' />
  <Input type="password" placeholder="Password" name='password' />
  <Button type='submit'>Sign up </Button>
  </div>
  </form>
  

  </CardContent>
  
</Card>
</div>


  )
}


