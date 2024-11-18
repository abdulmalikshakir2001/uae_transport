"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Page() {
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  
  return (
    <div className="max-w-xl m-auto mt-4">
      <Card>
        <CardHeader>
          {alertVisible && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Invalid credentials</AlertDescription>
            </Alert>
          )}

          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm onError={() => setAlertVisible(true)} />
        </CardContent>
      </Card>
    </div>
  );
}
