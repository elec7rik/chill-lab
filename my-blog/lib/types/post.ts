export type PostStatus = "draft" | "published";
export type Post = {
  id: string;
  title: string;
  content: string;
  remarks: string | null;
  status: PostStatus;
  category: string;
  created_at: string;
  published_at: string;
  updated_at: string;
};
