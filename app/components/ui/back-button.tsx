"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/app/components/ui/button";
import { Icons } from "@/app/components/icons";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.back();
      }}
    >
      <Icons.chevronLeft className='mr-2 h-4 w-4' aria-hidden='true' />
      Back
    </Button>
  );
}
