import getCourseById from "@/app/actions/getCourseById";
import UpdateCourse from "../../../../components/update-course";

interface IParams {
  courseId: string;
}

export default async function page({ params }: { params: IParams }) {
  const courses = await getCourseById(params);

  return (
    <div>
      <UpdateCourse
        name={courses?.name}
        imageSrc={courses?.imageSrc}
        author={courses?.author}
        price={courses?.price}
        courseId={courses?.id}
        description={courses?.description}
      />
    </div>
  );
}
