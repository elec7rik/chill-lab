import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardDescription, CardAction, CardTitle, CardContent, CardFooter, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MoreHorizontal } from "lucide-react"

export default function DropdownDemo() {
  return (
    <main className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Deactivate your account</CardTitle>
        <CardDescription>
          Enter credentials to Confirm
        </CardDescription>
        
        <CardAction>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal />
          </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" side="bottom" sideOffset={4}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>

      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Deactivate
          </Button>
        </CardFooter>
    </Card>
    </main>
  )
}


