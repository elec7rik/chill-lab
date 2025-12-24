import { AnchorProvider, Program } from "@coral-xyz/anchor";
import type { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";

export const PROGRAM_ID = new PublicKey(
  "2iKADw5KnvSbSBmxZYsozTjjPWNMoYnHXecwwMjptXcz"
);

export async function getProgram(
  connection: Connection,
  wallet: AnchorWallet
) {
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });

  // ✅ Fetch IDL from chain (robust, supported)
  return await Program.at(PROGRAM_ID, provider);
}

export function getVaultPda() {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("vault")],
    PROGRAM_ID
  )[0];
}

export function getUserStatePda(user: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("user"), user.toBuffer()],
    PROGRAM_ID
  )[0];
}
