"use client";

import Link from "next/link";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Button, buttonVariants } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
// import { CartSheet } from "@/app/components/cart-sheet";
import { Combobox } from "@/app/components/combobox";
import { Icons } from "@/app/components/icons";
import { MainNav } from "@/app/components/layout/main-nav";

interface SiteHeaderProps {
  user: SafeUser | null;
  basketItems: any | null;
}

export function SiteHeader({ user, basketItems }: SiteHeaderProps) {
  const initials = `${user?.name?.charAt(0) ?? ""} ${
    user?.name?.charAt(1) ?? ""
  }`;
  const email = user?.email;

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background'>
      <div className='container flex h-16 items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <Combobox />
            {/* <CartSheet basketItems={basketItems} currentUser={user} /> */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='secondary'
                    className='relative h-8 w-8 rounded-full'
                  >
                    <Avatar className='h-8 w-8'>
                      <AvatarImage src={user?.imageUrl} alt={user.name ?? ""} />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56' align='end' forceMount>
                  <DropdownMenuLabel className='font-normal'>
                    <div className='flex flex-col space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        {user.name}
                      </p>
                      <p className='text-xs leading-none text-muted-foreground'>
                        {email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild disabled>
                      <Link href='/dashboard/account'>
                        <Icons.user
                          className='mr-2 h-4 w-4'
                          aria-hidden='true'
                        />
                        Account
                        <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild disabled>
                      <Link href='/create'>
                        <Icons.file
                          className='mr-2 h-4 w-4'
                          aria-hidden='true'
                        />
                        Create Course
                        <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild disabled>
                      <Link href='/dashboard/settings'>
                        <Icons.cap
                          className='mr-2 h-4 w-4'
                          aria-hidden='true'
                        />
                        My Learning
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <div onClick={() => signOut()}>
                      <Icons.logout
                        className='mr-2 h-4 w-4'
                        aria-hidden='true'
                      />
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href='/login'>
                <div
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Log In
                  <span className='sr-only'>Log In</span>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
