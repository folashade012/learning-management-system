"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Shell } from "@/app/components/shell";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import { Icons } from "@/app/components/icons";
import QuizCard from "@/app/components/quiz-card";

interface QuizClientProp {
  data: object;
}

export default function QuizClient({ data }: QuizClientProp) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [question, setQuestion] = useState(data);

  return (
    <>
      {loading ? (
        <div className='w-full h-screen grid place-content-center'>
          <Icons.spinner
            className='mr-2 h-8 w-8 mx-auto animate-spin'
            aria-hidden='true'
          />
        </div>
      ) : (
        <Shell>
          <QuizCard />
          <div className='w-full flex  items-center space-x-10 lg:justify-between  lg:px-7'>
            <Button>Prev</Button>
            <Button>Next</Button>
          </div>
        </Shell>
      )}
    </>
  );
}
