"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import PublishToggle from "./publish-toggle";
import type { Post } from "@/lib/types/post";

export default function PostActions({
  post,
}: {
  post: Post;
}) {
  const router = useRouter();

  return (
    <PublishToggle
      id={post.id}
      currentStatus={post.status}
      onPublish={async ({ id, status }) => {
        await supabase
          .from("posts")
          .update({ status })
          .eq("id", id);

        router.refresh();
      }}
    />
  );
}
