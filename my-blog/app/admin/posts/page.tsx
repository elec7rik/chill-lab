import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import PostActions from "./_components/post-actions";
import Link from "next/link";
import { createSupabaseServer } from "@/lib/supabase/server";
import DeletePostAction from "./_components/delete-post-action";

export default async function AdminPostsPage() {
  const supabase = await createSupabaseServer();
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Post Fetching Failed: ", error);
    return;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Posts</CardTitle>
        <CardAction>
          <Link href={`/admin/posts/new`}>
            <Button variant="default">Create Post</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts?.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.status}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.remarks}</TableCell>
                <TableCell>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        className="bg-popover text-popover-foreground border shadow-md"
                        align="end"
                        side="bottom"
                        sideOffset={4}
                      >
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/posts/${post.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DeletePostAction id={post.id} />
                        <DropdownMenuItem>Hide</DropdownMenuItem>
                        <PostActions post={post} />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
