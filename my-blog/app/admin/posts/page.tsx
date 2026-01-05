import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const posts = [
  {
    post: "P1",
    title: "Reflections on the Practicality of Martingale Strategy",
    status: "drafted",
    category: "Math",
    remarks: "add images",
  },
  {
    post: "P2",
    title: "Hexagon is the Bestagon",
    status: "drafted",
    category: "Math",
    remarks: "none",
  },
  {
    post: "P3",
    title: "What makes Git lightning fast?",
    status: "drafted",
    category: "Tech",
    remarks: "write more about hashing",
  },
  {
    post: "P4",
    title: "shadcn is AWESOME",
    status: "todo",
    category: "UI",
    remarks: "none",
  },
];

export default function AdminPostsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Posts</CardTitle>
        <CardAction>
          <Button>New Post</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Post</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.post}>
                <TableCell>{post.post}</TableCell>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.status}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.remarks}</TableCell>
                <TableCell>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        side="bottom"
                        sideOffset={4}
                      >
                        <DropdownMenuLabel>View</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                        <DropdownMenuItem>Hide</DropdownMenuItem>
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
