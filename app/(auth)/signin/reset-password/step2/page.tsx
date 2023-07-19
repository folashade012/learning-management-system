import { type Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetPasswordStep2Form } from "@/components/auth/reset-password-form-step2";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  title: "Reset Password",
  description: "Enter your email to reset your password",
};

export default function ResetPasswordStep2Page() {
  return (
    <div className='mx-auto mb-16 mt-20 justify-center max-w-lg'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Reset password</CardTitle>
          <CardDescription>
            Enter your email address and we will send you a verification code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordStep2Form />
        </CardContent>
      </Card>
    </div>
  );
}
