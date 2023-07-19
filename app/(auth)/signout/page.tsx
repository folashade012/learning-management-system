import { LogOutButtons } from "@/components/auth/logout-buttons";
import Heading from "@/components/ui/heading";

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export default function SignOutPage() {
  return (
    <div className='mx-auto mb-16 mt-20 justify-center max-w-xs'>
      <Heading
        title='Sign out'
        description='Are you sure you want to sign out?'
        size='sm'
        className='text-center'
      />
      <LogOutButtons />
    </div>
  );
}
