"use client";

import * as React from "react";
import Link from "next/link";

export function MainNav() {
  return (
    <div className='hidden gap-6 lg:flex'>
      <Link
        aria-label='Home'
        href='/'
        className='hidden items-center space-x-2 lg:flex'
      >
        <span className='hidden font-bold lg:inline-block'>Secure360</span>
      </Link>
    </div>
  );
}
