import { Skeleton } from "@/app/components/ui/skeleton";
import { Header } from "@/app/components/ui/header";
import { Shell } from "@/app/components/shell";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/app/components/ui/card";

export default function PurchasesLoading() {
  return (
    <Shell>
      <section>
        <Skeleton className='h-[40px] w-[100px]' />

        <div className='bg-muted flex flex-col gap-12 md:flex-row px-6  lg:px-14 py-8 items-start justify-between rounded-md mt-4'>
          <div className='mt-0 md:mt-20 flex flex-col gap-2'>
            <Skeleton className='h-5 w-72' />
            <Skeleton className='h-4 w-20' />
            <Skeleton className='h-12 w-72' />
          </div>

          <div className='w-full  md:w-[400px]'>
            <Card>
              <Skeleton className='h-[200px] w-[400px]' />

              <CardContent className='grid gap-y-3 py-4'>
                <CardTitle className='line-clamp-2 text-md'>
                  <Skeleton className='h-4 w-20' />
                </CardTitle>
              </CardContent>
              <CardFooter className='flex gap-1 justify-between'>
                <Skeleton className='h-[40px] w-[100px]' />
                <Skeleton className='h-[40px] w-[100px]' />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Shell>
  );
}
