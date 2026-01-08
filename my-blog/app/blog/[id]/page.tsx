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
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.category}</p>
    </div>
  );
}
