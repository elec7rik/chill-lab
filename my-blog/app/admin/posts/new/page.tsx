import PostEditor from "../_components/post-editor";

export default async function NewPostPage() {
  return (
    <PostEditor
      initialTitle=""
      initialContent=""
      heading="New Post"
      primaryActionLabel="Save"
    />
  );
}
