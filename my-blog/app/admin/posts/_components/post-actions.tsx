"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import PublishToggle from "./publish-toggle";
import type { Post } from "@/lib/types/post";

export default function PostActions({ post }: { post: Post }) {
  const router = useRouter();

  return (
    <PublishToggle
      id={post.id}
      currentStatus={post.status}
      onPublish={async ({ id, status }) => {
        await supabase
          .from("posts")
          .update({
            status,
            published_at:
              status === "published" && post.published_at === null
                ? new Date().toISOString()
                : post.published_at,
          })
          .eq("id", id);

        router.refresh();
      }}
    />
  );
}
