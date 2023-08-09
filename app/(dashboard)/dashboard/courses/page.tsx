import type { Metadata } from "next";
import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCurrentUserCourses from "@/app/actions/getCurrentUserCourses";
import MyCourseClient from "./my-courses-client";

import { Header } from "@/app/components/ui/header";
import { Shell } from "@/app/components/shell";

export const metadata: Metadata = {
  title: "My Courses",
  description: "Manage your courses",
};

interface IParams {
  courseId?: string;
}

export default async function CoursesPage({ params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  const courses = await getCurrentUserCourses();

  if (!currentUser) {
    return "Not Authorized for this page";
  }

  if (courses.length === 0) {
    return "No courses found to delete or update";
  }

  return (
    <Shell variant='sidebar'>
      <Header title='My Courses' description='Manage your courses.' size='sm' />
      <div className='flex gap-6 px-12 py-8'>
        {courses.map((item) => (
          <MyCourseClient data={item} currentUser={currentUser} key={item.id} />
        ))}
      </div>
    </Shell>
  );
}
