import { Shell } from "@/components/shell";
import SliderMain from "@/components/slider-main";

const images = ["/images/hero1.jpg", "/images/hero2.jpg"];

export default function Home() {
  return (
    <Shell as='div' className='gap-12'>
      <section
        id='hero'
        aria-labelledby='hero-heading'
        className='mx-auto flex w-full items-center justify-center gap-4 text-center'
      >
        <SliderMain images={images} />
      </section>
    </Shell>
  );
}
