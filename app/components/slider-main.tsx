"use client";

import { useState } from "react";
import { Icons } from "@/app/components/icons";

interface CarouselProps {
  images: string[] | [];
}
export default function SliderMain({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const currentImage = images[current];

  const prevImage = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? images.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextImage = () => {
    const isLastSlide = current === images.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  return (
    <div className='relative'>
      <div>
        <button
          onClick={prevImage}
          className='absolute left-[2%] top-[50%] z-[40]'
        >
          <Icons.chevronLeft className='h-8 w-8' aria-hidden='true' />
        </button>
        <img
          src={currentImage}
          alt={`Image ${current + 1}`}
          className='h-[500px] object-cover w-full rounded-md'
        />
        {current === 1 && (
          <div className='absolute top-[20%] left-[5%] bg-white dark:bg-black p-6 max-w-[450px] rounded-md'>
            <h1 className='my-4 text-[2rem] font-bold'>
              Learning that gets you
            </h1>
            <h4 className='text-[1.2rem]'>
              Skills for your present (and your future). Get started with us.
            </h4>
          </div>
        )}

        {current === 0 && (
          <div className='absolute top-[20%] left-[5%] bg-white dark:bg-black p-6 max-w-[450px] rounded-md'>
            <h1 className='my-4 text-[2rem] font-bold'>
              Unlock the power of learning.
            </h1>
            <h4 className='text-[1.2rem]'>
              Secure360 is trusted by alot of people around the world. Find out
              what we can do for you.
            </h4>
          </div>
        )}

        <button
          onClick={nextImage}
          className='absolute right-[2%] top-[50%] z-[40]'
        >
          <Icons.chevronRight className='h-8 w-8' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
}
