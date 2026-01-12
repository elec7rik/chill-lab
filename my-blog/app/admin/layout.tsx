import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase/server";
import LogoutButton from "./posts/_components/logout-button";
export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      {
        <div>
          <header className="flex items-center justify-between px-6 py-4 border-b">
            <h1 className="font-semibold">Admin</h1>
            <LogoutButton />
          </header>

          <main>{children}</main>
        </div>
      }
    </>
  );
}
