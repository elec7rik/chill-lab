// import { posts } from "@/lib/posts";
import EditPostClient from "./edit-client";
import { supabase } from "@/lib/supabase/client";
import type { Post } from "@/lib/types/post";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // const post = posts.find((p) => p.id === id);
  const { data: post } = await supabase
  .from("posts")
  .select("id, title, content, remarks")
  .eq("id", id)
  .single<Post>();


  if (!post) {
    return <p>Post not found</p>;
  }

  return <EditPostClient post={post} />;
}
