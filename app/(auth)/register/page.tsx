import { type Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Shell } from "@/app/components/shell";
import { RegisterForm } from "@/app/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Sign up for an account",
};

export default async function SignUpPage() {
  return (
    <Shell className='max-w-lg'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Register</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <div className='text-sm text-muted-foreground'>
            Already have an account?{" "}
            <Link
              aria-label='Login'
              href='/login'
              className='text-primary underline-offset-4 transition-colors hover:underline'
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  );
}
