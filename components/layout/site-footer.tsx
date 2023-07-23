import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Shell } from "@/components/shell";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");

  return (
    <footer className='w-full border-t bg-background'>
      <Shell>
        <section
          id='footer-content'
          aria-labelledby='footer-content-heading'
          className='flex justify-between space-x-4 w-full items-center'
        >
          <div className='text-base leading-loose'>&copy; {copyrightDate}</div>
          <Link
            href='/'
            className='z-20 flex items-center text-lg font-bold tracking-tight'
          >
            <span>Secure360</span>
          </Link>
          <div className='flex items-center space-x-1'>
            <ThemeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  );
}
