"use client"

import { useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function PostEditor({
  post,
}: {
  post: {
    id: string
    title: string
    remarks: string
  }
}) {
  const [title, setTitle] = useState(post.title)
  const [remarks, setRemarks] = useState(post.remarks)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">Edit Post</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Update</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </CardHeader>
        <CardContent>
          <Textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="min-h-[600px]"
          />
        </CardContent>
      </Card>
    </div>
  )
}
