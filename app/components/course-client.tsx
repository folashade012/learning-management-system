"use client";
import ReactPlayer from "react-player";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

import { Shell } from "@/app/components/shell";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import { Icons } from "@/app/components/icons";

interface Section {
  id: string;
  url: string;
  name: string;
  description?: string;
}

interface CourseClientProp {
  sections: Section[];
  completed: any;
  courseId: string | undefined;
}

export default function CourseClient({
  sections,
  completed,
  courseId,
}: CourseClientProp) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState(sections[0]);

  useEffect(() => {
    setLoading(true);
    const currentID = completed[completed.length - 1];
    const currentIndex = sections.findIndex((item) => item.id === currentID);

    console.log(currentIndex + 1);
    console.log(sections.length);

    if (currentIndex + 1 === sections.length) {
      setSection(sections[currentIndex]);
    } else {
      const progress = sections[currentIndex + 1];
      setSection(progress);
    }

    setLoading(false);
  }, [completed, sections]);

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
      return router.push(`/quiz/${courseId}`);
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
    <>
      {loading ? (
        <div className='w-full h-screen grid place-content-center'>
          <Icons.spinner
            className='mr-2 h-8 w-8 mx-auto animate-spin'
            aria-hidden='true'
          />
        </div>
      ) : (
        <div>
          <Shell>
            <h1 className='font-bold capitalize text-lg'>{section.name}</h1>
            <div className='w-full relative pt-[56.25%]'>
              <ReactPlayer
                className='absolute top-0 left-0'
                url={section.url}
                width='100%'
                height='100%'
                controls
              />
            </div>
          </Shell>

          <Separator />
          <Shell>
            <div className='w-full flex  items-center space-x-10 lg:justify-between  lg:px-7'>
              <Button onClick={prev}>Prev</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </Shell>
        </div>
      )}
    </>
  );
}
