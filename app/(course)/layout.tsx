import { SiteFooter } from "@/app/components/layout/site-footer";

interface IParams {
  courseId: string;
}

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: IParams };
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex w-full flex-col overflow-hidden'>{children}</main>
      <SiteFooter />
    </div>
  );
}
