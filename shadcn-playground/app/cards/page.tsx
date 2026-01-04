import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
     <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Deactivate your account</CardTitle>
        <CardDescription>
          Enter credentials to Confirm
        </CardDescription>
        
        <CardAction>
         
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
  );
}
