"use client";
import PostEditor from "../_components/post-editor";

export default function NewPostClient() {
  return (
    <PostEditor
      initialTitle=""
      initialContent=""
      heading="New Post"
      primaryActionLabel="Save"
      onSubmit={(data) => {
        console.log("Create Post", data);
      }}
    />
  );
}
