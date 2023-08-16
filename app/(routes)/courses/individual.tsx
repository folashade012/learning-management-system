"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { SafeUser } from "../../types";
import { formatPrice } from "@/app/lib/utils";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/app/components/ui/card";
import { Header } from "@/app/components/ui/header";
import CartButton from "@/app/components/ui/cart-button";

interface Props {
  author: string;
  price: string;
  imageSrc: string;
  name: string;
  description: string;
  courseId: any;
  currentUser: SafeUser;
}

export default function Induvidual({
  author,
  price,
  imageSrc,
  name,
  courseId,
  description,
  currentUser,
}: Props) {
  const router = useRouter();

  return (
    <section>
      <div className='bg-muted flex flex-col gap-12 md:flex-row px-6  lg:px-14 py-8 items-start justify-between'>
        <div className='mt-0 md:mt-20 flex flex-col gap-2'>
          <Header title={name} className='capitalize' />
          <h3 className='capitalize'>{author}</h3>
          <p className='capitalize'>{description}</p>
        </div>

        <div className='w-full  md:w-[400px]'>
          <Card>
            <Image
              src={imageSrc}
              alt='Image'
              width={200}
              height={200}
              className='w-full object-cover'
            />

            <CardContent className='grid gap-y-3 py-4'>
              <CardTitle className='line-clamp-2 text-md'>
                {formatPrice(price, "GBP")}
              </CardTitle>
            </CardContent>
            <CardFooter className='flex gap-1 justify-between'>
              <CartButton courseId={courseId} currentUser={currentUser} />
              <Button
                type='button'
                variant='outline'
                onClick={() => router.push(`/course/${courseId}`)}
              >
                Enroll now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
