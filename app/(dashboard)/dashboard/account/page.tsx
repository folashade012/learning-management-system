import type { Metadata } from "next";

import { Header } from "@/app/components/ui/header";
import { Shell } from "@/app/components/shell";
import { UserProfile } from "@/app/components/user-profile";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your account settings",
};

export default function AccountPage() {
  return (
    <Shell variant='sidebar'>
      <Header
        title='Account'
        description='Manage your account settings.'
        size='sm'
      />

      <div className='w-full overflow-hidden'>
        <UserProfile />
      </div>
    </Shell>
  );
}
