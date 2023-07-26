import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, author, imageSrc, videoSrc, description, price } = body;

  if (!name || !author || !imageSrc || !price || !description) {
    return NextResponse.error();
  }

  const course = await prisma.course.create({
    data: {
      name,
      author,
      videoSrc,
      imageSrc,
      description,
      price,
      userId: user.id,
    },
  });

  return NextResponse.json(course);
}
