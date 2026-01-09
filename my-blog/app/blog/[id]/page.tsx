import { supabase } from "@/lib/supabase/client";
import type { Post } from "@/lib/types/post";

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
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-3">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="text-sm text-muted-foreground uppercase tracking-wide mb-10">
        {post.category}
      </div>

      {/* Content */}
      <div className="space-y-6 text-base leading-relaxed text-foreground whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
}
