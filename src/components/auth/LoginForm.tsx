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

// Define the shape of the form values
interface LoginFormValues {
  email: string;
  password: string;
}

// Yup validation schema
const loginSchemaYup = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});



export default function LoginForm() {
  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ): Promise<void> => {
    // `values` type is LoginFormValues: { email: string; password: string }
    const { email, password } = values;
    login({ email, password })
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
                      <Link href="/register" className="text-zinc-800 opacity-50">
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
