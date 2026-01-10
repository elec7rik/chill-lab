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
      onPressedChange={(pressed) => {
        const nextStatus = pressed ? "published" : "draft";
        onPublish({ id, status: nextStatus });
      }}
      size="sm"
      variant="outline"
      className="flex items-center gap-2"
    >
      <ToggleRight className="h-4 w-4" />
      {isPublished ? "Published" : "Draft"}
    </Toggle>
  );
}
