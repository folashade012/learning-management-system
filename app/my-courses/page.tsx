import getCurrentUser from "../actions/getCurrentUser";
import getCurrentUserCourses from "../actions/getCurrentUserCourses";
import MyCourseClient from "./my-courses-client";

interface IParams {
  courseId?: string;
}

export default async function page({ params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return "Not Authorized for this page";
  }
  const courses = await getCurrentUserCourses();

  if (courses.length === 0) {
    return "No courses found to delete or update";
  }

  return (
    <div className='flex gap-6 px-12 py-8'>
      {courses.map((item) => (
        <MyCourseClient data={item} currentUser={currentUser} key={item.id} />
      ))}
    </div>
  );
}
