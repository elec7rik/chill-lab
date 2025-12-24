import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import type { AnchorWallet } from "@solana/wallet-adapter-react";
import { getProgram, getVaultPda, getUserStatePda } from "@/lib/anchor";
import { SystemProgram } from "@solana/web3.js";

export function FaucetCard() {
  // ✅ hooks go first
  const { connection } = useConnection();
  const wallet = useWallet();

  // ✅ handler lives here
  async function handleRequest() {
  console.log("Request SOL clicked");

  if (!wallet.publicKey || !wallet.signTransaction) return;

  try {
    console.log("Requesting airdrop...");

    const anchorWallet = wallet as AnchorWallet;

    // 👇 THIS was missing
    const program = await getProgram(connection, anchorWallet);

    const vault = getVaultPda();
    const userState = getUserStatePda(wallet.publicKey);

    const tx = await program.methods
      .requestAirdrop()
      .accounts({
        user: wallet.publicKey,
        userState,
        vault,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("Tx sent:", tx);
  } catch (err) {
    console.error("Airdrop failed:", err);
  }
}




  // ⬇️ JSX only below this line
  return (
    <Card className="w-[420px] min-h-[200px]">
      <CardContent className="h-full grid grid-rows-[1fr_auto_1fr] px-8 text-center">
        <div />

        <div className="flex flex-col items-center gap-5">
          <h2 className="text-2xl font-semibold">Solana Faucet</h2>

          <p className="text-sm text-muted-foreground">
            Request test SOL from the faucet. Limited per user.
          </p>

          {/* Wallet control — always visible */}
          <div className="scale-90 opacity-80">
            <WalletMultiButton />
          </div>

          {/* Primary action */}
          {wallet.connected && (
            <Button
              size="lg"
              className="w-full max-w-[220px]"
              onClick={handleRequest}
            >
              Request SOL
            </Button>
          )}
        </div>

        <div />
      </CardContent>
    </Card>
  );
}
