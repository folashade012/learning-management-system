import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prismadb";

interface IParams {
  sectionId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { sectionId } = params;

  if (!sectionId || typeof sectionId !== "string") {
    throw new Error("Invalid ID");
  }

  let completed = [...(currentUser.completed || [])];

  completed.push(sectionId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      completed,
    },
  });
  return NextResponse.json(user);
}
