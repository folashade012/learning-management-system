"use client";

import { toast } from "sonner";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

interface QuizCardProps {
  question: any;
}

export default function QuizCard({ question }: QuizCardProps) {
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect === true) {
      console.log("correct");
    }
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='line-clamp-1 capitalize text-sm lg:text-base'>
            {question.question}
          </CardTitle>
        </CardHeader>
      </Card>

      <div className='flex flex-col gap-6 mt-20'>
        {question.answers.map((answer: any, index: number) => (
          <Card
            key={index}
            className='cursor-pointer flex items-center pl-2 gap-3 hover:bg-background hover:text-foreground'
            onClick={() => {
              handleAnswerOptionClick(answer.correct);
            }}
          >
            <Card className='h-8 w-8 text-sm flex items-center justify-center'>
              {index + 1}
            </Card>
            <CardContent className='p-2 font-normal'>{answer.text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
