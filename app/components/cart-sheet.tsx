import Image from "next/image";
import { SafeUser } from "../types";

import { formatPrice } from "@/app/lib/utils";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Separator } from "@/app/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { Icons } from "@/app/components/icons";
import CartButton from "./ui/cart-button";

interface CartSheetProps {
  basketItems: any;
  currentUser: SafeUser | null;
}

export async function CartSheet({ basketItems, currentUser }: CartSheetProps) {
  const itemCount = Number(basketItems.length);

  const cartTotal = basketItems.reduce(
    (total: any, item: any) => total + Number(item.price),
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label='Open cart'
          variant='outline'
          size='icon'
          className='relative'
        >
          {itemCount > 0 && (
            <Badge
              variant='secondary'
              className='absolute -right-2 -top-2 h-6 w-6 rounded-full p-2'
            >
              {itemCount}
            </Badge>
          )}
          <Icons.cart className='h-4 w-4' aria-hidden='true' />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='px-1'>
          <SheetTitle>Cart {itemCount > 0 && `(${itemCount})`}</SheetTitle>
        </SheetHeader>
        <Separator />
        {itemCount > 0 ? (
          <>
            <div className='flex flex-1 flex-col gap-5 overflow-hidden'>
              <ScrollArea className='h-full'>
                <div className='flex flex-col gap-5 pr-6'>
                  {basketItems.map((item: any) => (
                    <div key={item.id} className='space-y-3'>
                      <div className='flex items-center space-x-4'>
                        <div className='relative h-16 w-16 overflow-hidden rounded'>
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            fill
                            className='absolute object-cover'
                            loading='lazy'
                          />
                        </div>
                        <div className='flex flex-1 flex-col gap-1 self-start text-sm'>
                          <span className='line-clamp-1'>{item.name}</span>
                          <span className='line-clamp-1 text-muted-foreground'>
                            {formatPrice(item.price)} ={" "}
                            {formatPrice(Number(item.price).toFixed(2))}
                          </span>
                        </div>
                        <CartButton
                          courseId={item.id}
                          currentUser={currentUser}
                        />
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className='grid gap-1.5 pr-6 text-sm'>
              <Separator className='my-2' />
              <div className='flex'>
                <span className='flex-1'>Total</span>
                <span>{formatPrice(cartTotal.toFixed(2))}</span>
              </div>
              <SheetFooter className='mt-1.5'>
                <Button
                  aria-label='Proceed to checkout'
                  size='sm'
                  className='w-full'
                >
                  Proceed to Checkout
                </Button>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-2'>
            <Icons.cart
              className='h-12 w-12 text-muted-foreground'
              aria-hidden='true'
            />
            <span className='text-lg font-medium text-muted-foreground'>
              Your cart is empty
            </span>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
