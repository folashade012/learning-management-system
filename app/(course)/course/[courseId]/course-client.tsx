"use client";
import ReactPlayer from "react-player";

interface IVideo {
  url: string;
}

export default function CourseClient({ url }: IVideo) {
  // url='https://res.cloudinary.com/dq8apcmwf/video/upload/v1692095131/xydxtcahyhfgmbcaew0y.mp4'

  return (
    <div className='w-full'>
      <ReactPlayer url={url} width={"853px"} height={"480px"} controls />
    </div>
  );
}
