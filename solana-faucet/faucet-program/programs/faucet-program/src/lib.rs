use anchor_lang::prelude::*;
use anchor_lang::system_program::{transfer, Transfer};


declare_id!("2iKADw5KnvSbSBmxZYsozTjjPWNMoYnHXecwwMjptXcz");

#[program]
pub mod faucet_program {
    use super::*;

    pub fn initialize_vault(_ctx: Context<InitializeVault>) -> Result<()> {
        Ok(())
    }

    pub fn request_airdrop(ctx: Context<RequestAirdrop>, amount: u64) -> Result<()> {
        ctx.accounts.request_airdrop(amount, &ctx.bumps)
    }
}

#[derive(Accounts)]
pub struct InitializeVault<'info> {
    #[account(
        init,
        payer = payer,
        space = 8,
        seeds = [b"vault"],
        bump,
    )]
    pub vault: Account<'info, VaultState>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct RequestAirdrop<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        init_if_needed,
        payer = user,
        space = UserState::INIT_SPACE,
        seeds = [b"user", user.key().as_ref()],
        bump
    )]
    pub user_state: Account<'info, UserState>,
    #[account(
        mut,
        seeds = [b"vault"],
        bump
    )]
    pub vault: Account<'info, VaultState>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct UserState {
    pub last_claim: i64,
    pub total_claimed: u64,
}

impl Space for UserState {
    const INIT_SPACE: usize = 8 + 8 + 8;
}

impl<'info> RequestAirdrop<'info> {
    pub fn request_airdrop(&mut self, amount: u64, bumps: &RequestAirdropBumps) -> Result<()> {
        let system_program = self.system_program.to_account_info();
        
        // CPI accounts
        let from = self.vault.to_account_info();
        let to = self.user.to_account_info();
        let cpi_accounts = Transfer { from, to };

        // signer seeds
        let seeds = &[b"vault".as_ref(), &[bumps.vault]];
        let signer_seeds = &[&seeds[..]];



        // cpi_context
        let cpi_ctx = CpiContext::new_with_signer(system_program, cpi_accounts, signer_seeds);

        // SOL transfer
        transfer(cpi_ctx, amount)?;

        // last_claim and total_claimed update
        let now = Clock::get()?.unix_timestamp;
        self.user_state.last_claim = now;
        self.user_state.total_claimed += amount;

        Ok(())
    }
}

#[account]
pub struct VaultState {}
