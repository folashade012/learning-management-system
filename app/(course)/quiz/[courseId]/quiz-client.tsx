"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Shell } from "@/app/components/shell";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useRouter } from "next/navigation";

interface QuizClientProp {
  quizzes: any;
}

export default function QuizClient({ quizzes }: QuizClientProp) {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Answer is correct.");
    } else {
      toast("Answer is wrong.", {
        style: {
          background: "red",
        },
        className: "my-toast text-white",
        descriptionClassName: "my-toast-description",
      });
    }

    setTimeout(function () {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizzes.questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      {showScore ? (
        <div className='w-full h-screen grid place-content-center gap-4'>
          <h1 className='font-bold text-lg'>
            You scored {score} out of {quizzes.questions.length}
          </h1>
          <div className='w-full flex  items-center space-x-10 justify-center  lg:px-7'>
            <Button
              onClick={() => {
                resetQuiz;
              }}
            >
              Retake quiz
            </Button>

            <Button
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </Button>
          </div>
        </div>
      ) : (
        <Shell>
          <div>
            <Card>
              <CardHeader className='flex flex-row items-center'>
                <CardTitle className='mr-5 text-center divide-y divide-zinc-600/50'>
                  <div>{currentQuestion + 1}</div>
                  <div className='text-base text-slate-400'>
                    {quizzes.questions.length}
                  </div>
                </CardTitle>
                <CardTitle className='line-clamp-1 capitalize text-sm lg:text-base'>
                  {quizzes.questions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
            </Card>

            <div className='flex flex-col gap-6 mt-20'>
              {quizzes.questions[currentQuestion].answers.map(
                (answer: any, index: number) => (
                  <Card
                    key={index}
                    className='cursor-pointer flex items-center pl-2 gap-3 hover:bg-black hover:text-white'
                    onClick={() => {
                      handleAnswerOptionClick(answer.correct);
                    }}
                  >
                    <Card className='h-8 w-8 text-sm flex items-center justify-center'>
                      {index + 1}
                    </Card>
                    <CardContent className='p-2 font-normal'>
                      {answer.text}
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </Shell>
      )}
    </>
  );
}
