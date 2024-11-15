import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
import { signIn } from '@/auth'
import { loginSchema } from "@/lib/zod/schemas";

  
export default function Page() {
  return (
    <div className='flex justify-center'>

    <Card className='w-1/2'>
  <CardHeader>
    <CardTitle>Login Form</CardTitle>
    
  </CardHeader>
  <CardContent >

  <form action={
    async function registration(formData: FormData) {
      'use server'
      const userLoginDetails = {
          email: formData.get('email'),
          password: formData.get('password'),
        }

        const result = loginSchema.safeParse(userLoginDetails);
          
          if (!result.success) {
            console.log(result.error.format());
            return;
          }
         await signIn('credentials', {
          email: userLoginDetails.email, 
          password: userLoginDetails.password, 
          redirect:true,
          redirectTo: '/dashboard',

        });
    }

  }>
    <div className='flex flex-col gap-4'>
  <Input type="email" placeholder="Email"  name="email"/>
  <Input type="password" placeholder="Password" name="password" />
  <Button>Button</Button>
  </div>
  </form>
  

  </CardContent>
  
</Card>
</div>


  )
}


