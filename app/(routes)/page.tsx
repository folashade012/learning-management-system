import getAllCourses from "@/app/actions/getAllCourses";
import getCurrentUser from "@/app/actions/getCurrentUser";

import { Shell } from "@/app/components/shell";
import SliderMain from "@/app/components/slider-main";
import CourseCard from "@/app/components/course-card";
import { Header } from "../components/ui/header";

const images = ["/images/hero1.jpg", "/images/hero2.jpg"];

interface HomeProps {
  searchParams: string;
}

export default async function Home({ searchParams }: HomeProps) {
  const courses = await getAllCourses(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <Shell as='div' className='gap-12'>
      <section
        id='hero'
        aria-labelledby='hero-heading'
        className='mx-auto flex w-full items-center justify-center gap-4 text-center'
      >
        <SliderMain images={images} />
      </section>

      <section>
        <Header
          title={`let\'s start learning,  ${
            currentUser ? currentUser?.name : ""
          }`}
        />
        <div className='flex flex-wrap py-8 gap-6'>
          {courses.map((item: any) => (
            <CourseCard key={item.id} data={item} currentUser={currentUser} />
          ))}
        </div>
      </section>
    </Shell>
  );
}
