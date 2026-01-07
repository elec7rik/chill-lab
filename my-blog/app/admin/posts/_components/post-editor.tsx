"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PostEditor({
  initialTitle,
  initialContent,
  initialRemarks,
  initialCategory,
  heading,
  primaryActionLabel,
  onSubmit,
}: {
  initialTitle: string;
  initialContent: string;
  heading: string;
  primaryActionLabel: string;
  initialRemarks: string;
  initialCategory: string;
  onSubmit: (data: {
    title: string;
    content: string;
    remarks: string;
    category: string;
  }) => void;
}) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [remarks, setRemarks] = useState(initialRemarks);
  const [category, setCategory] = useState(initialCategory);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <div className="flex gap-2">
          <Button variant="outline" type="button" onClick={() => router.back()}>Cancel</Button>
          <Button
            onClick={() => onSubmit({ title, content, remarks, category })}
          >
            {primaryActionLabel}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <Input
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            value={category}
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />

          <Textarea
            value={content}
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[500px]"
          />
          <Textarea
            value={remarks}
            placeholder="remarks"
            onChange={(e) => setRemarks(e.target.value)}
            className="min-h-[60px]"
          />
        </CardContent>
      </Card>
    </div>
  );
}
