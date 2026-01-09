import { supabase } from "@/lib/supabase/client";
import type { Post } from "@/lib/types/post";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

export default async function BlogViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: post } = await supabase
    .from("posts")
    .select("title, content, category")
    .eq("id", id)
    .single<Post>();

  if (!post) {
    return <p>Post not found</p>;
  }
  const words = post?.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/blog"
          className="text-l font-medium text-muted-foreground hover:text-foreground"
        >
          <span className="text-red-400 dark:text-red-500">fed</span>
          <span className="opacity-70">'s blog ;3</span>
        </Link>

        <ModeToggle />
      </div>

      <div className="border-t border-border/60 mb-8" />

      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-2">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="text-sm text-muted-foreground uppercase tracking-wide mb-10">
        <span>{post.category}</span>
        <span className="mx-2">·</span>
        <span>{readingTime} min read</span>
      </div>

      {/* Content */}
      <div className="space-y-6 text-base leading-relaxed text-foreground whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
}
