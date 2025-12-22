import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { FaucetProgram } from "../target/types/faucet_program";
import { expect } from "chai";

describe("faucet-program", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.FaucetProgram as Program<FaucetProgram>;
  const user = provider.wallet;
  const connection = provider.connection;

  it("initializes the vault", async () => {
    await program.methods
      .initializeVault()
      .accounts({
        payer: user.publicKey,
      })
      .rpc();

    const [vaultPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("vault")],
      program.programId
    );

    const vaultInfo = await connection.getAccountInfo(vaultPda);

    expect(vaultInfo).to.not.be.null;
    expect(vaultInfo!.owner.toBase58())
      .to.equal(anchor.web3.SystemProgram.programId.toBase58());
  });

  it("allows a user to request SOL from the faucet", async () => {
    const [vaultPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("vault")],
      program.programId
    );

    const [userStatePda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("user"), user.publicKey.toBuffer()],
      program.programId
    );

    // Fund the vault
    const fundIx = anchor.web3.SystemProgram.transfer({
      fromPubkey: user.publicKey,
      toPubkey: vaultPda,
      lamports: anchor.web3.LAMPORTS_PER_SOL,
    });

    await provider.sendAndConfirm(
      new anchor.web3.Transaction().add(fundIx)
    );

    // Balances before
    const vaultBefore = await connection.getBalance(vaultPda);
    const userBefore = await connection.getBalance(user.publicKey);

    // Request airdrop (Anchor auto-resolves accounts)
    await program.methods
      .requestAirdrop()
      .rpc();

    // Balances after
    const vaultAfter = await connection.getBalance(vaultPda);
    const userAfter = await connection.getBalance(user.publicKey);

    const vaultDelta = vaultBefore - vaultAfter;

    expect(vaultDelta).to.be.greaterThan(0);
    expect(userAfter).to.be.greaterThan(userBefore);

    const userState = await program.account.userState.fetch(userStatePda);
    expect(userState.totalClaimed.toNumber()).to.equal(vaultDelta);
    expect(userState.claimedToday.toNumber()).to.equal(vaultDelta);

  });
});
