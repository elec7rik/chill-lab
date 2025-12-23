import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FaucetCard() {
  return (
    <Card className="w-[420px] min-h-[200px]">
      <CardContent className="h-full grid grid-rows-[1fr_auto_1fr] px-8 text-center">
        <div />

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold">Solana Faucet</h2>

          <p className="text-sm text-muted-foreground">
            Request test SOL from the faucet. Limited per user.
          </p>

          <Button size="lg" className="mt-2">
            Request SOL
          </Button>
        </div>

        <div />
      </CardContent>
    </Card>
  );
}
