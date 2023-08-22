"use client";

import type { SidebarNavItem } from "@/app/types";
import { Checkbox } from "@/app/components/ui/checkbox";
import { useEffect } from "react";

interface SidebarProp {
  id: string;
  url: string;
  name: string;
  courseId: string;
}

export interface CourseSidebarProps {
  items: SidebarProp[];
  completed: any;
}

export function CourseSidebar({ items, completed }: CourseSidebarProps) {
  function checkCompleted(id: string) {
    const exist = completed.includes(id);
    return exist;
  }
  if (!items?.length) return null;

  return (
    <div className='flex w-full flex-col gap-2'>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className='flex w-full space-x-3 cursor-not-allowed items-center p-2 text-muted-foreground '
          >
            <Checkbox checked={checkCompleted(item.id)} />
            <span>{index + 1}.</span>
            <span className='text-sm'>{item.name}</span>
          </div>
        );
      })}
      <h1 className='p-2 text-muted-foreground font-bold'>Quiz</h1>
    </div>
  );
}
