import { type Metadata } from "next";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Shell } from "@/app/components/shell";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset Password",
};

export default async function ResetPasswordPage() {
  return (
    <Shell className='max-w-lg'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Reset Password</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4'>
          {/* reset password form */}
        </CardContent>
      </Card>
    </Shell>
  );
}
