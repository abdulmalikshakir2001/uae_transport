"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Hoverbg from "@/components/Hoverbg";
import Link from "next/link";
import signup from "@/server_actions/auth/signup";
import Error from "@/components/Error";


// Define the shape of the form values
interface RegistrationFormValues {
  name:string
  email: string;
  password: string;
}

// Yup validation schema
const loginSchemaYup = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});



export default function SignupForm() {
  const [errorEmail, setErrorEmail] = useState(false);


  const handleSubmit = async (
    values: RegistrationFormValues,
    { setSubmitting }: FormikHelpers<RegistrationFormValues>
  ): Promise<void> => {
    
    const { name , email, password } = values;
    const res  =  await  signup({name, email, password })
    console.log(res)
    if(res.status === 'duplicate_e'){
      setErrorEmail(true)

    }
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
    <Formik<RegistrationFormValues>
      initialValues={{ name:"",email: "", password: "" }}
      validationSchema={loginSchemaYup}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting,setFieldValue }) => (
        <Form>
          <div className="flex flex-col gap-4">
          <div>
              <Label htmlFor="name">Name</Label>
              <Field
                type="text"
                name="name"
                id="name"
                as={Input}
                className="mt-3"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>


            <div>
              <Label htmlFor="email">Email</Label>
              <Field
                type="email"
                name="email"
                id="email"
                as={Input}
                className="mt-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("email", e.target.value);
                  setErrorEmail(false); // Reset the errorEmail state
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
              {errorEmail  && <Error message="Email already exists" /> }
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
                      <Link href="/login" className="text-zinc-800 opacity-50">
                        Already have an account?
                      </Link>
                    </Hoverbg>

                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Sign up"}
                    </Button>
                  </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}






