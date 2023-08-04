import type { Metadata } from "next";

import getCurrentUser from "@/app/actions/getCurrentUser";

import { Header } from "@/app/components/ui/header";
import { Shell } from "@/app/components/shell";
import Profile from "./profile";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your account settings",
};

export default async function AccountPage() {
  const currentUser = await getCurrentUser();

  return (
    <Shell variant='sidebar'>
      <Header
        title='Account'
        description='Manage your account settings.'
        size='sm'
      />

      <div className='w-full overflow-hidden'>
        <Profile
          name={currentUser?.name}
          email={currentUser?.email}
          userId={currentUser?.id}
        />
      </div>
    </Shell>
  );
}
