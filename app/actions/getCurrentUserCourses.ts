import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getCurrUsersCourse() {
  const user = await getCurrentUser();

  const courses = await prisma.course.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const safeCourse = courses.map((course) => ({
    ...course,
    createdAt: course.createdAt.toDateString(),
  }));

  return safeCourse;
}
