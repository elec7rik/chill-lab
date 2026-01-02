import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogDemo() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-16">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Open
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4">
              <Label htmlFor="sign">Sign By Entering Your Username</Label>
              <Input id="sign" placeholder="elec7rik" required></Input>
            </div>

            <DialogFooter className="flex gap-4">
              <Button variant="default">
                I agree
              </Button>
              <Button variant="link">
                Go to Settings
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    
    </main>
  )
}
