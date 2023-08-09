import type { Metadata } from "next";
import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";

import { Header } from "@/app/components/ui/header";
import { Shell } from "@/app/components/shell";

export const metadata: Metadata = {
  title: "My Courses",
  description: "Manage your courses",
};

export default async function CoursesPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <Shell variant='sidebar'>
      <Header title='My Courses' description='Manage your courses.' size='sm' />
      <div>Courses Table</div>
    </Shell>
  );
}
