// import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { LoginForm } from "@/app/components/auth/login-form";
import { Shell } from "@/app/components/shell";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Sign in to your account",
// };

export default async function LoginPage() {
  // const user = await currentUser();
  // if (user) redirect("/");

  return (
    <Shell className='max-w-lg'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Login</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <LoginForm />
        </CardContent>
        <CardFooter className='flex flex-wrap items-center justify-between gap-2'>
          <div className='text-sm text-muted-foreground'>
            <span className='mr-1 hidden sm:inline-block'>
              Don&apos;t have an account?
            </span>
            <Link
              aria-label='Register'
              href='/register'
              className='text-primary underline-offset-4 transition-colors hover:underline'
            >
              Register
            </Link>
          </div>
          <Link
            aria-label='Reset password'
            href='/login/reset-password'
            className='text-sm text-primary underline-offset-4 transition-colors hover:underline'
          >
            Reset password
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  );
}
