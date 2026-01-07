"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function DeletePostAction({ id }: { id: string }) {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="text-red-600"
          onSelect={(e) => e.preventDefault()}
        >
          Delete
        </DropdownMenuItem>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the post.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button
            variant={"destructive"}
            onClick={async () => {
              const { error } = await supabase
                .from("posts")
                .delete()
                .eq("id", id);
              if (error) {
                console.error(`Deletion Failed: `, error);
                return;
              }

              router.refresh();
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
