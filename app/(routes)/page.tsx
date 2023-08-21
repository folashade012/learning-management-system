import getAllCourses from "@/app/actions/getAllCourses";
import getCurrentUser from "@/app/actions/getCurrentUser";

export const dynamic = "force-dynamic";

import { Shell } from "@/app/components/shell";
import SliderMain from "@/app/components/slider-main";
import CourseCard from "@/app/components/course-card";
import { Header } from "../components/ui/header";
import { Separator } from "../components/ui/separator";

interface HomeProps {
  searchParams: string | null;
}

export default async function Home({ searchParams }: HomeProps) {
  const courses = await getAllCourses(searchParams);
  const currentUser = await getCurrentUser();

  const images = ["/images/hero1.jpg", "/images/hero2.jpg"];

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
        <div className='max-w-5xl mx-auto'>
          <Header title='About Platform' className='mx-auto' />

          <div className='flex flex-col justify-center gap-3 my-5'>
            <p>
              Cybersecurity awareness is essential in our evolving digital
              environment. Our platform, which caters to students, educators,
              and inquisitive minds alike, is your entry point to a thorough
              investigation of cyber security.
            </p>
            <p>
              Understanding the mechanics of developing threats like phishing,
              malware, and ransomware is essential for effective digital
              defense. Our courses talks more on these dangers so you can
              successfully understand them. Practical Learning: Our platform
              goes beyond theory to link academia with practical problems.
              Practice applying information by participating in simulations,
              interactive laboratories, and case studies based on real-life
              occurrences.
            </p>
            <p>
              Learn from Experts: Gain knowledge from academics, and
              practitioners in the field of cyber security who can break down
              difficult concepts into easy-to-understand explanations. Diverse
              Curriculum: Our curriculum covers a variety of topics, from
              fundamentals to advanced methods. Whether you're a professional or
              a beginner, you'll always learn and get new ideas.
            </p>
            <p>
              Start Your Online Adventure: Discover our courses to protect
              digital ecologies. Learn about malware, ransomware negotiation,
              social engineering, and other topics in a dynamic academic
              setting.Earn certifications: Complete courses to demonstrate
              mastery and earn certifications. Verify your knowledge of and
              dedication to a secure online environment.
            </p>
            <p>
              We see universal cyber literacy as a defense against cyber
              threats. Join us as we transform our curiosity into knowledge and
              our awareness into action to create a more secure digital future.
            </p>
            <p>
              Are you prepared to start your path in cyber security? Together,
              let's investigate knowledge, defense, and innovation to create a
              more secure digital future.
            </p>
          </div>
        </div>
      </section>
      <Separator />
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
