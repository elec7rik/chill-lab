import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function New() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-semibold">New Post</h1>
        <div className="flex gap-2">
          <Button variant={"outline"}>Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          {/* <CardTitle>Post Editor</CardTitle> */}
          <Input placeholder="Banger title"></Input>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Banger text" className="min-h-[600px]"></Textarea>
        </CardContent>
      </Card>
    </div>
  );
}
