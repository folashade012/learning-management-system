import getCurrentUser from "@/app/actions/getCurrentUser";

import { SiteFooter } from "@/app/components/layout/site-footer";
import { SiteHeader } from "@/app/components/layout/site-header";

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const currentUser = await getCurrentUser();

  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader user={currentUser} />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  );
}
