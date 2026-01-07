"use client";
import { supabase } from "@/lib/supabase/client";
import PostEditor from "../_components/post-editor";
import { useRouter } from "next/navigation";

export default function NewPostClient() {
  const router = useRouter();
  return (
    <PostEditor
      initialTitle=""
      initialContent=""
      initialRemarks=""
      initialCategory=""
      heading="New Post"
      primaryActionLabel="Save"
      onSubmit={async (data) => {
        // console.log("Create Post", data);
        const { error } = await supabase.from("posts").insert({
          title: data.title,
          content: data.content,
          remarks: data.remarks,
          status: "draft",
          category: data.category,
        });
        if (error) {
          console.error("Insert Failed: ", error);
          return;
        }
        router.push("/admin/posts");
      }}
    />
  );
}
