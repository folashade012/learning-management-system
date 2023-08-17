"use client";
import ReactPlayer from "react-player";

import { useState } from "react";

import { Shell } from "@/app/components/shell";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";

interface Section {
  url: string;
  name: string;
  description?: string;
}

interface CourseClientProp {
  sections: Section[];
}

export default function CourseClient({ sections }: CourseClientProp) {
  // url='https://res.cloudinary.com/dq8apcmwf/video/upload/v1692095131/xydxtcahyhfgmbcaew0y.mp4'

  const [section, setSection] = useState(sections[0]);

  function prev() {}

  function next() {}

  return (
    <Shell>
      <div className='w-full'>
        <ReactPlayer
          url={section.url}
          width={"853px"}
          height={"480px"}
          controls
        />
      </div>
      <Separator />
      <h1 className='font-bold capitalize text-lg'>{section.name}</h1>
      <div className='w-full flex  items-center space-x-10 lg:justify-between  lg:px-7'>
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </Shell>
  );
}
