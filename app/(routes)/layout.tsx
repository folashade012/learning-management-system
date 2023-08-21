import getCurrentUser from "@/app/actions/getCurrentUser";
import getBasketItems from "../actions/getBasketItems";

import { SiteFooter } from "@/app/components/layout/site-footer";
import { SiteHeader } from "@/app/components/layout/site-header";

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const currentUser = await getCurrentUser();
  const basketItems = await getBasketItems();

  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader user={currentUser} basketItems={basketItems} />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  );
}
