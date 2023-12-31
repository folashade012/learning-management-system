"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { useSearchParams } from "next/navigation";
import qs from "query-string";

import getAllCourses from "../actions/getAllCourses";

import { cn } from "@/app/lib/utils";
import { useDebounce } from "@/app/hooks/use-debounce";
import { Button } from "@/app/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/ui/command";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Icons } from "@/app/components/icons";

interface CourseProp {
  id: String;
  name: String;
  author: String;
}

export function Combobox() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = React.useState<CourseProp[] | null>(null);
  const [isPending, startTransition] = React.useTransition();

  const params = useSearchParams();

  React.useEffect(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      result: query,
    };

    // const url = qs.stringifyUrl(
    //   {
    //     url: "/",
    //     query: updatedQuery,
    //   },
    //   { skipNull: true }
    // );
    // router.push(`/course/${url}`);
  }, [query]);

  React.useEffect(() => {
    if (debouncedQuery.length === 0) setData(null);

    if (debouncedQuery.length > 0) {
      startTransition(async () => {
        // const data = await getAllCourses(debouncedQuery);
        setData(data);
      });
    }
  }, [debouncedQuery]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = React.useCallback((callback: () => unknown) => {
    setIsOpen(false);
    callback();
  }, []);

  React.useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant='outline'
        className='relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2'
        onClick={() => setIsOpen(true)}
      >
        <Icons.search className='h-4 w-4 xl:mr-2' aria-hidden='true' />
        <span className='hidden xl:inline-flex'>Search for anything...</span>
        <span className='sr-only'>Search for anything</span>
        <kbd className='pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex'>
          <span className='text-xs'>Ctrl</span>K
        </kbd>
      </Button>
      <CommandDialog position='top' open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder='Search for anything...'
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            No item found.
          </CommandEmpty>
          {isPending ? (
            <div className='space-y-1 overflow-hidden px-1 py-2'>
              <Skeleton className='h-4 w-10 rounded' />
              <Skeleton className='h-8 rounded-sm' />
              <Skeleton className='h-8 rounded-sm' />
            </div>
          ) : (
            <CommandGroup>
              {data?.map((item, index) => (
                <CommandItem
                  key={index}
                  onSelect={() =>
                    handleSelect(() => router.push(`/course/${item.id}`))
                  }
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
