import EditPostClient from "./edit-client";
import { supabase } from "@/lib/supabase/client";
import type { Post } from "@/lib/types/post";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: post } = await supabase
    .from("posts")
    .select("id, title, content, remarks, category")
    .eq("id", id)
    .single<Post>();

  if (!post) {
    return <p>Post not found</p>;
  }

  return <EditPostClient post={post} />;
}
