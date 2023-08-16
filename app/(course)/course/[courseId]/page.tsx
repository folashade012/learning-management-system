import getCourseById from "@/app/actions/getCourseById";
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
      <div>hey course page id</div>
    </Shell>
  );
}
