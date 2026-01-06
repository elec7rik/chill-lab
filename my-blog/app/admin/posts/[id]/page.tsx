import { posts } from "@/lib/posts";
import PostEditor from "../_components/post-editor";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <PostEditor
      initialTitle={post.title}
      initialContent={post.remarks}
      heading="Edit Post"
      primaryActionLabel="Update"
    />
  );
}
