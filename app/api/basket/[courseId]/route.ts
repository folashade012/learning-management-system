import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  courseId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { courseId } = params;

  if (!courseId || typeof courseId !== "string") {
    throw new Error("Invalid ID");
  }

  let basketIds = [...(currentUser.basketIds || [])];

  basketIds.push(courseId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      basketIds,
    },
  });
  return NextResponse.json(user);
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
    throw new Error("Invalid ID");
  }

  let basketIds = [...(currentUser.basketIds || [])];
  basketIds = basketIds.filter((id) => id !== courseId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      basketIds,
    },
  });
  return NextResponse.json(user);
}
