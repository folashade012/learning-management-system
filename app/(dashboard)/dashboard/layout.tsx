import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import { ScrollArea } from "@/app/components/ui/scroll-area";
import { SidebarNav } from "@/app/components/layout/sidebar-nav";
import { SiteFooter } from "@/app/components/layout/site-footer";
import { SiteHeader } from "@/app/components/layout/site-header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await currentUser();

  if (!user) {
    redirect("/signin");
  }

  const sidebarNav = [
    {
      title: "Account",
      href: "/dashboard/account",
      icon: "user",
      items: [],
    },

    {
      title: "Purchases",
      href: "/dashboard/purchases",
      icon: "dollarSign",
      items: [],
    },
  ];

  return (
    <div className='flex min-h-screen flex-col'>
      <SiteHeader user={user} />
      <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
        <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block'>
          <ScrollArea className='py-6 pr-6 lg:py-8'>
            <SidebarNav items={sidebarNav} />
          </ScrollArea>
        </aside>
        <main className='flex w-full flex-col overflow-hidden'>{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
