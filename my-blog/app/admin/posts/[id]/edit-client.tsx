"use client";

import { useRouter } from "next/navigation";
import PostEditor from "../_components/post-editor";
import { supabase } from "@/lib/supabase/client";

export default function EditPostClient({
  post,
}: {
  post: { id: string; title: string; content: string; remarks: string | null };
}) {
  const router = useRouter();
  return (
    <PostEditor
      initialTitle={post.title}
      initialContent={post.content}
      heading="Edit Post"
      primaryActionLabel="Update"
      onSubmit={async (data) => {
        // console.log("Update Post", post.id, data);
        const { error } = await supabase
          .from("posts")
          .update({
            title: data.title,
            content: data.content,
            status: "draft",
          })
          .eq("id", post.id);
        if (error) {
          console.error("Update Failed: ", error);
          return;
        }
        router.push("/admin/posts/");
      }}
    />
  );
}
