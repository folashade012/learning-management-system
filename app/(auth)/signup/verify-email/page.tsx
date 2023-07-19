import { type Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VerifyEmailForm } from "@/components/auth/verify-email-form";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  title: "Verify Email",
  description: "Verify your email address to continue with your sign up",
};

export default function VerifyEmailPage() {
  return (
    <div className='mx-auto mb-16 mt-20 justify-center  max-w-lg'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Verify email</CardTitle>
          <CardDescription>
            Verify your email address to complete your account creation
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <VerifyEmailForm />
        </CardContent>
      </Card>
    </div>
  );
}
