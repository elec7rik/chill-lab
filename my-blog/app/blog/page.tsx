import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Post Fetching Failed: ", error.message);
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex  justify-between items-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="text-red-400 dark:text-red-500">fed</span>
          <span className="opacity-80">'s blog ;3</span>
        </h1>
        <ModeToggle></ModeToggle>
      </div>

      {posts!
        .map((post) => (
          <div
            key={post.id}
            className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
          >
            <Link href={`/blog/${post.id}`}>
              <h2
                className="scroll-m-20 text-2xl font-semibold tracking-tight hover:text-foreground/80 leading-tight
"
              >
                {post.title}
              </h2>
            </Link>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {post.category}
            </p>
          </div>
        ))}
    </div>
  );
}
