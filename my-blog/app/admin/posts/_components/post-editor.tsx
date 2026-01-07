"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PostEditor({
  initialTitle,
  initialContent,
  heading,
  primaryActionLabel,
  onSubmit,
}: {
  initialTitle: string;
  initialContent: string;
  heading: string;
  primaryActionLabel: string;
  onSubmit: (data: { title: string; content: string }) => void;
}) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button onClick={() => onSubmit({ title, content })}>
            {primaryActionLabel}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </CardHeader>
        <CardContent>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[600px]"
          />
        </CardContent>
      </Card>
    </div>
  );
}
