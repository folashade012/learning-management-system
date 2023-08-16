"use client";

import * as React from "react";
import Image from "next/image";
import { toast } from "sonner";

import { SafeUser, safeCourse } from "../types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";
import { Icons } from "./icons";
import { formatPrice } from "../libs/utils";
import { Button } from "./ui/button";

interface CourseCard {
  data: safeCourse;
  key: string;
  currentUser: SafeUser | null;
  isAddedToCart?: boolean;
}

export default function CourseCard({
  data,
  key,
  isAddedToCart = false,
}: CourseCard) {
  const [isPending, startTransition] = React.useTransition();
  return (
    <Link aria-label={`View ${data.name} details`} href={`/courses/${data.id}`}>
      <Card>
        <CardHeader className='border-b p-0'>
          {data?.imageSrc?.length ? (
            <Image
              src={data.imageSrc}
              alt={data.name}
              width={200}
              height={200}
              className='object-cover w-[320px] h-[150px] rounded-t-lg'
              loading='lazy'
            />
          ) : (
            <div
              aria-label='Placeholder'
              role='img'
              aria-roledescription='placeholder'
              className='flex h-full w-full items-center justify-center bg-secondary'
            >
              <Icons.placeholder
                className='h-9 w-9 text-muted-foreground'
                aria-hidden='true'
              />
            </div>
          )}
        </CardHeader>

        <CardContent className='grid gap-y-3 py-4 px-2'>
          <CardTitle className='line-clamp-1 capitalize'>{data.name}</CardTitle>
          <CardDescription className='line-clamp-1'>
            {data.author}
          </CardDescription>
          <CardTitle className='line-clamp-2 text-md'>
            {formatPrice(data.price, "GBP")}
          </CardTitle>
        </CardContent>

        <CardFooter className='p-4'>
          <div className='flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between'>
            <Button
              aria-label='Add to cart'
              size='sm'
              className='h-8 w-full rounded-sm'
              onClick={() => {
                startTransition(async () => {
                  try {
                    // await addToCartAction({
                    //   courseId: data.id,
                    // });
                    toast.success("Added to cart.");
                  } catch (error) {
                    error instanceof Error
                      ? toast.error(error.message)
                      : toast.error("Something went wrong, please try again.");
                  }
                });
              }}
              // disabled={isPending}
              disabled={true}
            >
              {isPending && (
                <Icons.spinner
                  className='mr-2 h-4 w-4 animate-spin'
                  aria-hidden='true'
                />
              )}
              {isAddedToCart ? "Remove from Cart" : " Add to cart"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
