"use client";

import { usePathname } from "next/navigation";

import type { SidebarNavItem } from "@/app/types";
import { Checkbox } from "@/app/components/ui/checkbox";

interface SidebarProp {
  url: string;
  name: string;
}

export interface CourseSidebarProps {
  items: SidebarProp[];
}

export function CourseSidebar({ items }: CourseSidebarProps) {
  const pathname = usePathname();

  if (!items?.length) return null;

  return (
    <div className='flex w-full flex-col gap-2'>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className='flex w-full space-x-3 cursor-not-allowed items-center p-2 text-muted-foreground '
          >
            <Checkbox />
            <span className='text-sm'>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}
