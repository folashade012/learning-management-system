import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  courseId?: string;
}
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { courseId } = params;

  if (!courseId || typeof courseId !== "string") {
    throw new Error("Invalid Id");
  }

  const course = await prisma.course.deleteMany({
    where: {
      id: courseId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(course);
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const { courseId } = params;
  const json = await request.json();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  if (!courseId || typeof courseId !== "string") {
    throw new Error("Invalid Id");
  }

  const updated = await prisma.course.update({
    where: {
      id: courseId,
    },
    data: json,
  });

  return NextResponse.json(updated);
}
