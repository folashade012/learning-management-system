import getQuizByCourseId from "@/app/actions/getQuizByCourseId";

import { Separator } from "@/app/components/ui/separator";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { MainNav } from "@/app/components/layout/main-nav";
import { CourseSidebar } from "@/app/components/layout/course-sidebar";
import QuizClient from "../../../components/quiz-client";

interface IParams {
  courseId: string;
}

export default async function page({ params }: { params: IParams }) {
  const course = await getQuizByCourseId(params);

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background'>
        <div className='container flex space-x-4 h-16 items-center'>
          <MainNav />
          <Separator orientation='vertical' />
          <div className='flex flex-1 items-center space-x-5'>
            <nav className='flex items-center space-x-2'>
              <h1 className='capitalize font-bold'>{course.name}</h1>
            </nav>
          </div>
        </div>
      </header>
      <div className='container'>
        <QuizClient quizzes={course?.quiz[0]} />
      </div>
    </div>
  );
}
