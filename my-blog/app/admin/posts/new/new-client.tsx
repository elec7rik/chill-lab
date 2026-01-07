"use client";
import PostEditor from "../_components/post-editor";
import { useRouter } from "next/navigation";

export default function NewPostClient() {
  const router = useRouter();
  return (
    <PostEditor
      initialTitle=""
      initialContent=""
      heading="New Post"
      primaryActionLabel="Save"
      onSubmit={(data) => {
        console.log("Create Post", data);
        router.push("/admin/posts");
      }}
    />
  );
}
