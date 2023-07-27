import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.error();
  }

  const body = await request.json();
  console.log(body);

  const { name, author, imageSrc, description, price } = body;

  if (!name || !author || !imageSrc || !price || !description) {
    return NextResponse.error();
  }

  const course = await prisma.course.create({
    data: {
      name,
      author,
      imageSrc,
      description,
      price,
      userId: user.id,
    },
  });

  return NextResponse.json(course);
}
