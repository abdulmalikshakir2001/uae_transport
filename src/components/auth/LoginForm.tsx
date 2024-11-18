"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Hoverbg from "@/components/Hoverbg";
import Link from "next/link";
import login from "@/server_actions/auth/login";

import { useRouter } from "next/navigation";




// Define the shape of the form values
interface LoginFormValues {
  email: string;
  password: string;
}
interface LoginFormProps {
  onError: () => void;
}

// Yup validation schema
const loginSchemaYup = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});



export default function LoginForm({ onError }:LoginFormProps) {
  const router = useRouter();
  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ): Promise<void> => {
    // `values` type is LoginFormValues: { email: string; password: string }
    const { email, password } = values;

const loginRes =await  login({ email, password })

if(loginRes){
  router.push('/dashboard')
}
else{
onError()
}



    
     


    
    // if (response.status === false) {
    //   onError(); 
    // }

    try {
      // Call your signIn function or any API
      console.log("Form Submitted:", values);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik<LoginFormValues>
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchemaYup}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Field
                type="email"
                name="email"
                id="email"
                as={Input}
                className="mt-3"
                
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Field
                type="password"
                name="password"
                id="password"
                as={Input}
                className="mt-3"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <Hoverbg>
                      <Link href="/signup" className="text-zinc-800 opacity-50">
                        Need an account?
                      </Link>
                    </Hoverbg>

                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                  </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
