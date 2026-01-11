import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";const supabase = await createSupabaseServer();
const { data } = await supabase.auth.getUser();

console.log(data.user);


export async function createSupabaseServer() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
      },
    }
  );
}
