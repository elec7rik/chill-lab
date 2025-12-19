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
    .to.equal(program.programId.toBase58());
});


});
