"use server";

import { signIn } from "@/auth";
import { loginSchema } from "@/lib/zod/schemas";

async function login(userLoginDetails: { email: string; password: string }) {
  const result = loginSchema.safeParse(userLoginDetails);

  if (!result.success) {
    console.log(result.error.format());
    throw new Error("Validation failed: " + JSON.stringify(result.error.format()));
  }

  await signIn("credentials", {
    email: userLoginDetails.email,
    password: userLoginDetails.password,
    redirect: true,
    redirectTo: "/dashboard",
  });
}

export default login;
