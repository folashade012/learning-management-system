// import type { Metadata } from "next";
import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";

import { Header } from "@/app/components/ui/header";
import { Shell } from "@/app/components/shell";

// export const metadata: Metadata = {
//   title: "Purchases",
//   description: "Manage your purchases",
// };

export default async function PurchasesPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <Shell variant='sidebar'>
      <Header
        title='Purchases'
        description='Manage your purchases.'
        size='sm'
      />
      <div>Purchases Table</div>
    </Shell>
  );
}
