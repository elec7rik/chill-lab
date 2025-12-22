use anchor_lang::prelude::*;
use anchor_lang::system_program;

#[derive(Accounts)]
pub struct InitializeVault<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    /// CHECK: PDA system-owned SOL vault
    #[account(
        mut,
        seeds = [b"vault"],
        bump
    )]
    pub vault: UncheckedAccount<'info>,

    pub system_program: Program<'info, System>,
}

pub fn initialize_vault(ctx: Context<InitializeVault>) -> Result<()> {
    let vault = &ctx.accounts.vault;
    let payer = &ctx.accounts.payer;
    let system_program = &ctx.accounts.system_program;

    // Create only if it doesn't exist yet
    if vault.lamports() == 0 {
        let rent = Rent::get()?;
        let lamports = rent.minimum_balance(0);

        let seeds: &[&[u8]] = &[
        b"vault".as_ref(),
        &[ctx.bumps.vault],
    ];

        let signer_seeds = &[seeds];

        system_program::create_account(
            CpiContext::new_with_signer(
                system_program.to_account_info(),
                system_program::CreateAccount {
                    from: payer.to_account_info(),
                    to: vault.to_account_info(),
                },
                signer_seeds,
            ),
            lamports,
            0,                       // 👈 NO DATA
            &system_program::ID,     // 👈 SYSTEM OWNED
        )?;
    }

    Ok(())
}
