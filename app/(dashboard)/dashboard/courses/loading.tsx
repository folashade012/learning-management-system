import { Skeleton } from "@/app/components/ui/skeleton";
import { Header } from "@/app/components/ui/header";
import { Shell } from "@/app/components/shell";

export default function PurchasesLoading() {
  return (
    <Shell variant='sidebar'>
      <Header title='My Courses' description='Manage your courses.' size='sm' />
      <div className='grid gap-10 rounded-lg border p-4'>
        <div className='space-y-2'>
          <Skeleton className='h-5 w-20' />
          <Skeleton className='h-4 w-72' />
        </div>
        <Skeleton className='h-8 w-40' />
      </div>
    </Shell>
  );
}
