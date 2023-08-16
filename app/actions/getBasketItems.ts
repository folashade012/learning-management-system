import prisma from "@/app/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getBasketItems() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const basket = await prisma.course.findMany({
      where: {
        id: {
          in: [...(currentUser.basketIds || [])],
        },
      },
    });

    const safeBaskets = basket.map((basket) => ({
      ...basket,
      createdAt: basket.createdAt.toISOString(),
    }));

    return safeBaskets;
  } catch (error: any) {
    throw new Error(error);
  }
}
