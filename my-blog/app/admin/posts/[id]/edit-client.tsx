"use client";

import { useRouter } from "next/navigation";
import PostEditor from "../_components/post-editor";

export default function EditPostClient({
  post,
}: {
  post: { id: string; title: string; remarks: string };
}) {
  const router = useRouter();
  return (
    <PostEditor
      initialTitle={post.title}
      initialContent={post.remarks}
      heading="Edit Post"
      primaryActionLabel="Update"
      onSubmit={(data) => {
        console.log("Update Post", post.id, data);
        router.push("/admin/posts/");
      }}
    />
  );
}
