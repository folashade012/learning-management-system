"use client";

import * as React from "react";
import Link from "next/link";
import { Icons } from "@/app/components/icons";

export function MainNav() {
  return (
    <div className='flex gap-6'>
      <Link aria-label='Home' href='/' className='flex items-center space-x-2'>
        <Icons.brand className='h-8 w-8' aria-hidden='true' />
        <span className='hidden font-bold lg:inline-block'>Secure360</span>
      </Link>
    </div>
  );
}
