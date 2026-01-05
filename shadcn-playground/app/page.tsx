import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function TablePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Card>
        <CardHeader className="font-medium">Your Posts</CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Martingale Strategy
                </TableCell>
                <TableCell>Posted</TableCell>
                <TableCell>Math</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end">
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

              <TableRow>
                <TableCell className="font-medium">
                  Hexagon is the bestagon
                </TableCell>
                <TableCell>Posted</TableCell>
                <TableCell>Math</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end">
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

              <TableRow>
                <TableCell className="font-medium">shadcn is awesome</TableCell>
                <TableCell>Drafted</TableCell>
                <TableCell>Frontend</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end">
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
              <TableRow>
                <TableCell className="font-medium">
                  What makes Git lightning fast?
                </TableCell>
                <TableCell>Posted</TableCell>
                <TableCell>Tech</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end">
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
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
