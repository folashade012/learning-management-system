import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.error();
  }

  const body = await request.json();

  console.log("user", user);

  console.log(body);

  const { name, author, imageSrc, description, price } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

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

  console.log(course);

  return NextResponse.json(course);
}
