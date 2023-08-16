import getCourseById from "@/app/actions/getCourseById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Shell } from "@/app/components/shell";
import CourseClient from "./course-client";
import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { MainNav } from "@/app/components/layout/main-nav";
import { CourseSidebar } from "@/app/components/layout/course-sidebar";

interface IParams {
  courseId: string;
}

export default async function page({ params }: { params: IParams }) {
  const course = await getCourseById(params);
  console.log(course);
  const currentUser = await getCurrentUser();

  function prev() {}

  function next() {}

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
      <div className='container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10'>
        <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block'>
          <ScrollArea className='py-6 pr-6 lg:py-8'>
            <CourseSidebar items={course?.sections} />
          </ScrollArea>
        </aside>
        <div>
          <Shell>
            <CourseClient url={course?.sections[0].url} />
            <Separator />
            <h1 className='font-bold capitalize text-lg'>
              {course.sections[0].name}
            </h1>
            <div className='w-full flex  items-center space-x-10 lg:justify-between  lg:px-7'>
              <Button onClick={prev}>Prev</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </Shell>
        </div>
      </div>
    </div>
  );
}
