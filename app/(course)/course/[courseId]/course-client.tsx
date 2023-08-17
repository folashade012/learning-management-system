"use client";
import ReactPlayer from "react-player";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Shell } from "@/app/components/shell";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import axios from "axios";

interface Section {
  id: string;
  url: string;
  name: string;
  description?: string;
}

interface CourseClientProp {
  sections: Section[];
  completed: any;
}

export default function CourseClient({
  sections,
  completed,
}: CourseClientProp) {
  const router = useRouter();
  const [section, setSection] = useState(sections[0]);

  const prev = () => {
    if (sections.length === 0) {
      return;
    }

    const currentIndex = sections.findIndex((item) => item.id === section.id);
    const previousSection = sections[currentIndex - 1];

    if (!previousSection) {
      return;
    }

    setSection(previousSection);
  };

  const next = useCallback(async () => {
    if (sections.length === 0) {
      return;
    }

    const currentIndex = sections.findIndex((item) => item.id === section.id);
    const nextSection = sections[currentIndex + 1];

    if (!nextSection) {
      return;
    }

    try {
      let request;

      if (completed.includes(section.id)) {
        setSection(nextSection);
      } else {
        request = () => axios.post(`/api/completed/${section.id}`);

        await request();
        toast.success("Section completed.");
        setSection(nextSection);
      }

      router.refresh();
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }, [sections, router]);

  return (
    <Shell>
      <h1 className='font-bold capitalize text-lg'>{section.name}</h1>
      <div className='w-full'>
        <ReactPlayer
          url={section.url}
          width={"853px"}
          height={"480px"}
          controls
        />
      </div>
      <Separator />
      <div className='w-full flex  items-center space-x-10 lg:justify-between  lg:px-7'>
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </Shell>
  );
}
