import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// console.log(data.user);


export async function createSupabaseServer() {
    // const supabase = await createSupabaseServer();
    // const { data } = await supabase.auth.getUser();
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
