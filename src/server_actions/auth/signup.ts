"use server";



import { registrationSchema } from "@/lib/zod/schemas";
import { prisma } from "@/utils/prisma";
import{hash}  from 'bcryptjs';
import { redirect } from 'next/navigation';


async function signup(userRegistrationDetails: {name:string; email: string; password: string }) {
  const result = registrationSchema.safeParse(userRegistrationDetails);

  if (!result.success) {
    console.log(result.error.format());
    throw new Error("Validation failed: " + JSON.stringify(result.error.format()));
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: userRegistrationDetails.email as string,
    },
  });

  // If user exists, throw an error
  if (existingUser) {
    return { status: 'duplicate_e', message: "User already exists" };

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

export default signup;
