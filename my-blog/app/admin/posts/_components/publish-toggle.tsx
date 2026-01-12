"use client";

import { Toggle } from "@/components/ui/toggle";
import { ToggleRight } from "lucide-react";

export default function PublishToggle({
  id,
  currentStatus,
  onPublish,
}: {
  id: string;
  currentStatus: "draft" | "published";
  onPublish: (data: { id: string; status: "draft" | "published" }) => void;
}) {
  const isPublished = currentStatus === "published";

  return (
    <Toggle
      pressed={isPublished}
      onPressedChange={() => {
        const nextStatus = isPublished ? "draft" : "published";
        onPublish({ id, status: nextStatus });
      }}
      size="sm"
      variant="outline"
    >
      <ToggleRight className="mr-2 h-4 w-4" />
      {isPublished ? "Unpublish" : "Publish"}
    </Toggle>
  );
}
