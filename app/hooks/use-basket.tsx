import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import React, { useCallback, useMemo } from "react";

import { SafeUser } from "../types";

interface IUseBasket {
  courseId: string;
  currentUser: SafeUser | null;
}

const useBasket = ({ courseId, currentUser }: IUseBasket) => {
  const router = useRouter();

  const hasBasket = useMemo(() => {
    const list = currentUser?.basketIds || [];
    return list.includes(courseId);
  }, [currentUser, courseId]);

  const toggleBasket = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return router.push("/login");
      }

      try {
        let request;

        if (hasBasket) {
          request = () => axios.delete(`/api/basket/${courseId}`);
        } else {
          request = () => axios.post(`/api/basket/${courseId}`);
        }

        await request();

        if (hasBasket) toast.success("Removed Successfully");
        else toast.success("Added successfully");
        router.refresh();
      } catch (error: any) {
        toast.error("Something went wrong.");
        throw new Error(error);
      }
    },
    [currentUser, hasBasket, courseId]
  );

  return {
    hasBasket,
    toggleBasket,
  };
};

export default useBasket;
