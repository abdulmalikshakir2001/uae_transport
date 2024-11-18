"use server";

import { signIn } from "@/auth";
import { loginSchema } from "@/lib/zod/schemas";



async function login(userLoginDetails: { email: string; password: string }) {
  const result = loginSchema.safeParse(userLoginDetails);

  if (!result.success) {
    console.log(result.error.format());
    throw new Error("Validation failed: " + JSON.stringify(result.error.format()));
  }

  
  try {
    await signIn("credentials", {
      email: userLoginDetails.email,
      password: userLoginDetails.password,
      redirect: false, // Prevent auto-redirect
    });

    // Trigger server-side redirect
    // redirect("/dashboard");
    return true
  } catch (error) {
    console.log(error);
    return false
  }  
  
    

  //   try {  

  //   // Return success response and redirect path
  //   return { success: true, redirectTo: "/dashboard" };
  // } catch (error) {
  //   const err = error as Error;
  //   return { success: false, error: err.message };
  // }

  
}

export default login;
