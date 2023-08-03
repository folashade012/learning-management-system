"use client";
import useBasket from "@/app/hooks/use-basket";
import { SafeUser } from "@/app/types";

import { Button } from "../../components/ui/button";

interface CartButtonProps {
  courseId: any;
  currentUser: SafeUser;
}

export default function CartButton({ courseId, currentUser }: CartButtonProps) {
  const { hasBasket, toggleBasket } = useBasket({
    currentUser,
    courseId,
  });

  return (
    <div>
      <Button onClick={toggleBasket}>
        {hasBasket ? "Remove From Cart" : "Add To Cart"}
      </Button>
    </div>
  );
}
