import getCourseById from "@/app/actions/getCourseById";
import Induvidual from "../../../components/individual";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Shell } from "@/app/components/shell";

interface IParams {
  courseId: string;
}

export default async function page({ params }: { params: IParams }) {
  const course = await getCourseById(params);
  const currentUser = await getCurrentUser();

  return (
    <Shell>
      <Induvidual
        courseId={course?.id}
        currentUser={currentUser}
        price={course?.price}
        imageSrc={course?.imageSrc}
        name={course?.name}
        author={course?.author}
        duration={course?.duration}
        description={course?.description}
      />
    </Shell>
  );
}
