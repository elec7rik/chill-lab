import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export function FaucetCard() {
  const { connected } = useWallet();

  return (
    <Card className="w-[420px] min-h-[200px]">
      <CardContent className="h-full grid grid-rows-[1fr_auto_1fr] px-8 text-center">
        <div />

        <div className="flex flex-col items-center gap-5">
          <h2 className="text-2xl font-semibold">Solana Faucet</h2>

          <p className="text-sm text-muted-foreground">
            Request test SOL from the faucet. Limited per user.
          </p>

          {/* Wallet control — visually secondary */}
          <div className="scale-90 opacity-80">
            <WalletMultiButton />
          </div>

          {/* Primary action */}
          {connected && (
            <Button size="lg" className="w-full max-w-[220px]">
              Request SOL
            </Button>
          )}
        </div>

        <div />
      </CardContent>
    </Card>
  );
}
