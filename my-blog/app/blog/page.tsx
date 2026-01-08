import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, category")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Post Fetching Failed: ", error.message);
  }
  return (
    <div>
      <h1>Blog</h1>
      {posts!.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
          <h2>{post.title}</h2>
          </Link>
          <p>{post.category}</p>
        </div>
      ))}
    </div>
  );
}
