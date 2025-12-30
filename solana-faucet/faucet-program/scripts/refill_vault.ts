import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";
import fs from "fs";
import path from "path";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// ===== CONFIG =====
const RPC_URL = "https://api.devnet.solana.com";
const AIRDROP_AMOUNT = 5 * LAMPORTS_PER_SOL;

// programId
const PROGRAM_ID = new PublicKey(
  "2iKADw5KnvSbSBmxZYsozTjjPWNMoYnHXecwwMjptXcz"
);

// Vault PDA
const [vaultPda] = PublicKey.findProgramAddressSync(
  [Buffer.from("vault")],
  PROGRAM_ID
);

// console.log(vaultPda);

// Load funder keypairs
function loadKeypair(filename: string): Keypair {
  const filePath = path.join(__dirname, filename);
  const secret = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return Keypair.fromSecretKey(Uint8Array.from(secret));
}

async function refill() {
  const connection = new Connection(RPC_URL, "confirmed");

  const funders = [
    loadKeypair("funder1.json"),
    // loadKeypair("funder2.json"),
    // loadKeypair("funder3.json"),
  ];

  for (const funder of funders) {
  try {
    console.log("Requesting faucet SOL for:", funder.publicKey.toBase58());

    const sig = await connection.requestAirdrop(
      funder.publicKey,
      AIRDROP_AMOUNT
    );
    const latestBlockhash = await connection.getLatestBlockhash();

    await connection.confirmTransaction(
    {
        signature: sig,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
    },
    "confirmed"
    );

    await sleep(3000); // give devnet time to breathe

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: funder.publicKey,
        toPubkey: vaultPda,
        lamports: AIRDROP_AMOUNT - 5_000,
      })
    );

    await sendAndConfirmTransaction(connection, tx, [funder]);

    console.log("Transferred SOL to vault");
    await logVaultBalance(connection, vaultPda);
  } catch (err) {
    console.warn(
      "Skipping funder due to faucet error:",
      funder.publicKey.toBase58()
    );
  }

  await sleep(5000); // spacing between wallets
}


  console.log("Vault refill complete");
}

refill().catch(console.error);

async function logVaultBalance(connection: Connection, vault: PublicKey) {
  const lamports = await connection.getBalance(vault);
  console.log(
    `Vault balance: ${(lamports / LAMPORTS_PER_SOL).toFixed(4)} SOL`
  );
}
