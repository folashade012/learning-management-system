"use client";

import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

// interface QuizCard {
//   data: any;
// }

// { data }: QuizCard

export default function QuizCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='line-clamp-1 capitalize'>title</CardTitle>
        </CardHeader>
      </Card>

      <div className='flex flex-col gap-6 mt-20'>
        <Card>
          <CardContent>Option 1</CardContent>
        </Card>
        <Card>
          <CardContent>Option 2</CardContent>
        </Card>
        <Card>
          <CardContent>Option 3</CardContent>
        </Card>
        <Card>
          <CardContent>Option 4</CardContent>
        </Card>
      </div>
    </div>
  );
}
