import * as anchor from "@coral-xyz/anchor";
import { FaucetProgram } from "../target/types/faucet_program";

async function main() {
  const provider = new anchor.AnchorProvider(
    new anchor.web3.Connection("https://api.devnet.solana.com", "confirmed"),
    anchor.Wallet.local(),
    { commitment: "confirmed" },
  );

  anchor.setProvider(provider);

  const program = anchor.workspace.FaucetProgram as anchor.Program<FaucetProgram>;

  const tx = await program.methods.initializeVault().rpc();
  console.log("Vault initialized:", tx);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
