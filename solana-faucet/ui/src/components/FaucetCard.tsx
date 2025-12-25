import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import type { AnchorWallet } from "@solana/wallet-adapter-react";
import { getProgram, getVaultPda, getUserStatePda } from "@/lib/anchor";
import { SystemProgram } from "@solana/web3.js";

export function FaucetCard() {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function handleRequest() {
    if (!wallet.publicKey || !wallet.signTransaction) return;

    try {
      const program = await getProgram(
        connection,
        wallet as AnchorWallet
      );

      const vault = getVaultPda();
      const userState = getUserStatePda(wallet.publicKey);

      await program.methods
        .requestAirdrop()
        .accounts({
          user: wallet.publicKey,
          userState,
          vault,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
    } catch (err) {
      console.error("Airdrop failed:", err);
    }
  }

  return (
    <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center gap-6 py-8 text-center">
        <h2 className="text-2xl font-semibold">
          Solana Faucet
        </h2>

        <p className="text-sm text-muted-foreground">
          Request test SOL from the faucet. Limited per user.
        </p>

        <WalletMultiButton />

        {wallet.connected && (
          <Button
            size="lg"
            className="w-full max-w-[220px]"
            onClick={handleRequest}
          >
            Request SOL
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
